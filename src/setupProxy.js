// Lets `npm start` serve /api/chat locally (create-react-app loads this automatically).
// In production, Netlify serves it through netlify/functions/chat.mjs.
const express = require("express");
const chatHandler = require("../api/chat");

module.exports = function (app) {
  app.post("/api/chat", express.json(), chatHandler);
};
