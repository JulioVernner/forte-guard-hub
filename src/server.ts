import serverModule from '../dist/server/index.js';

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
    const request = new Request(getRequestUrl(req).toString(), {
      method: req.method ?? 'GET',
      headers: makeWebHeaders(req),
      body:
        req.method === 'GET' || req.method === 'HEAD'
          ? undefined
          : req,
    });

    const response = await serverModule.default.fetch(
      request,
      {},
      {},
    );

    await sendResponse(res, response);
  } catch (error) {
    console.error('VERCEL SSR ERROR:', error);

    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}