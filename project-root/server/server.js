const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const logsRouter = require('./routes/logs');
const searchRouter = require('./routes/search');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use('/logs', logsRouter);
app.use('/search', searchRouter);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

server.listen(3000, function() {
  console.log('Server is running on port 3000');
});