import * as serverModule from '../dist/server/index.js';

console.log('SERVER MODULE KEYS:', Object.keys(serverModule));

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
  res.statusCode = response.status;

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = Buffer.from(await response.arrayBuffer());

  res.end(body);
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

    const entry =
      serverModule.default ??
      serverModule;

    console.log('ENTRY:', entry);

    if (!entry?.fetch) {
      throw new Error(
        `Fetch function not found. Export keys: ${Object.keys(entry || {})}`
      );
    }

    const response = await entry.fetch(request, {}, {});

    console.log('SSR RESPONSE STATUS:', response.status);

    await sendResponse(res, response);
  } catch (error) {
    console.error('SSR ERROR:', error);

    res.statusCode = 500;

    res.setHeader('content-type', 'text/html');

    res.end(`
      <h1>SSR Runtime Error</h1>
      <pre>${error?.stack || String(error)}</pre>
    `);
  }
}