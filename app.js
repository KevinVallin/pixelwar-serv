const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require ('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
app.use(cors(
  {
    origin:"*"
  }
))
// Configure your database connection hered
io = require('socket.io')(Server, {
  cors: {
    origin: '*',
  }
});
// WebSocket connection
io.on('connection', (socket) => {
  console.log('Client connected');


  socket.on('changePixelColor', (data) => {
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
