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

  //room join
  socket.on("join-room", ({ roomId }) => {
    socket.join(roomId);
    console.log(`👥 ${socket.id} joined room ${roomId}`);

    socket.to(roomId).emit("user-joined", {
      userId: socket.id,
    });
  });

  // ▶ PLAY
  socket.on("play-video", ({ time }) => {
    socket.broadcast.emit("play-video", { time });
  });

  // ⏸ PAUSE
  socket.on("pause-video", ({ time }) => {
    socket.broadcast.emit("pause-video", { time });
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
