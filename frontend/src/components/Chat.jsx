import React from 'react'
import { useState } from "react";
import './player.css'
function Chat() {
    const [chat, setChat] = useState([
    { user: "Alex", text: "Hey, ready to listen?" },
    { user: "Priya", text: "Yes, let's go!" },
    { user: "Rahul", text: "Awesome song choice!" }
  ]);

  const [message, setMessage] = useState("");
  return (
    <div className="chat-sec  p-4">
          <h3>Group Chat</h3>
          <div className="underline1" />

          <div className="messages">
            {chat.map((m, i) => (
              <p key={i} className={`msg ${m.user}`}>
                <b>{m.user}:</b> {m.text}
              </p>
            ))}
          </div>

          <div className="chat-input">
            <input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>Send</button>
          </div>
        </div>
  )
}

export default Chat