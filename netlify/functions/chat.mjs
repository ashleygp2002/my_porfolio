// Netlify Function that serves /api/chat in production.
// The chat logic lives in api/chat.js (also used by `npm start` via src/setupProxy.js);
// this file just adapts Netlify's Request/Response to it.
// Set ANTHROPIC_API_KEY in Netlify: Site configuration → Environment variables.
import chatHandler from "../../api/chat.js";

export default async (req) => {
  const body = await req.json().catch(() => ({}));

  let status = 200;
  let payload = {};
  const headers = {};
  const res = {
    status(code) {
      status = code;
      return this;
    },
    setHeader(name, value) {
      headers[name] = value;
    },
    json(data) {
      payload = data;
      return this;
    },
  };

  await chatHandler({ method: req.method, body }, res);
  return Response.json(payload, { status, headers });
};

export const config = { path: "/api/chat" };
