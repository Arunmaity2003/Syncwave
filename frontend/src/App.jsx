import React from 'react'
import Room from "./pages/Room.jsx"
import { useEffect } from "react";
import { socket } from "../src/socket/Socket.js";

function App() {
  useEffect(() => {
  socket.emit("test", "Hello from frontend");
  console.log("Socket instance:", socket);
}, []);
  return (
    <>
      <Room />
    </>
  )
}

export default App