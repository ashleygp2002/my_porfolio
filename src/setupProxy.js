// Lets `npm start` serve /api/chat locally (create-react-app loads this automatically).
// In production, Vercel serves api/chat.js directly.
const express = require("express");
const chatHandler = require("../api/chat");

module.exports = function (app) {
  app.post("/api/chat", express.json(), chatHandler);
};
