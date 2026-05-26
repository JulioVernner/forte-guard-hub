const serverEntryPromise = import('../src/server.ts');

function getRequestUrl(req: any) {
  const protocol = String(req.headers['x-forwarded-proto'] ?? 'https');
  const host = String(req.headers.host ?? 'localhost');
  const path = req.url ?? '/';
  return new URL(path, `${protocol}://${host}`);
}

function makeWebHeaders(req: any) {
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

async function sendResponse(res: any, response: Response) {
  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = await response.arrayBuffer();
  res.end(new Uint8Array(body));
}

export default async function handler(req: any, res: any) {
  const entry = await serverEntryPromise;
  const serverEntry = (entry as any).default ?? entry;

  const request = new Request(getRequestUrl(req).toString(), {
    method: req.method ?? 'GET',
    headers: makeWebHeaders(req),
    body: ['GET', 'HEAD'].includes(req.method ?? 'GET') ? undefined : req,
  });

  const response = await serverEntry.fetch(request, {}, {});
  await sendResponse(res, response);
}
