import serverModule from '../dist/server/index.js';

console.log('SERVER MODULE:', serverModule);

function getRequestUrl(req) {
  const protocol = String(req.headers['x-forwarded-proto'] ?? 'https');
  const host = String(req.headers.host ?? 'localhost');
  const path = req.url ?? '/';

  return new URL(path, `${protocol}://${host}`);
}

function makeWebHeaders(req) {
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (item) headers.append(key, item);
      }
    }
  }

  return headers;
}

async function sendResponse(res, response) {
  res.status(response.status);

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = await response.arrayBuffer();

  res.end(Buffer.from(body));
}

export default async function handler(req, res) {
  try {
    console.log('REQUEST START');

    const request = new Request(getRequestUrl(req).toString(), {
      method: req.method ?? 'GET',
      headers: makeWebHeaders(req),
      body:
        req.method === 'GET' || req.method === 'HEAD'
          ? undefined
          : req,
    });

    console.log('REQUEST CREATED');

    console.log('SERVER DEFAULT:', serverModule.default);

    const response = await serverModule.default.fetch(
      request,
      {},
      {},
    );

    console.log('RESPONSE OK');

    await sendResponse(res, response);
  } catch (error) {
    console.error('VERCEL SSR ERROR:', error);

    res.statusCode = 500;
    res.end(`
      <h1>SSR Error</h1>
      <pre>${String(error?.stack || error)}</pre>
    `);
  }
}