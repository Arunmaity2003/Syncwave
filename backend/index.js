const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // ▶ PLAY
  socket.on("play-video", () => {
    socket.broadcast.emit("play-video");
  });

  // ⏸ PAUSE
  socket.on("pause-video", () => {
    socket.broadcast.emit("pause-video");
  });

  // 🔗 SYNC (seek)
  socket.on("sync-video", ({ time }) => {
    socket.broadcast.emit("sync-video", { time });
  });

  // 🎵 CHANGE VIDEO
  socket.on("change-video", ({ url }) => {
    socket.broadcast.emit("change-video", { url });
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
