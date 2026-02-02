import React, { useState } from "react";
import MiniYTPlayer from "./Miniyt";

function Player() {
  // later this will come from room / socket
  const isHost = true;

  const [videoId, setVideoId] = useState("");

  // helper to extract videoId from link
  const extractVideoId = (url) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : "";
  };

  const handleSetVideo = (e) => {
    e.preventDefault();
    const url = e.target.link.value;
    const id = extractVideoId(url);
    if (id) setVideoId(id);
    e.target.reset();
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Host-only input */}
      {isHost && (
        <form onSubmit={handleSetVideo} className="flex gap-2">
          <input
            name="link"
            type="text"
            placeholder="Paste YouTube link"
            className="flex-1 p-2 rounded text-black"
            required
          />
          <button className="bg-blue-600 px-4 py-2 rounded font-bold">
            Load
          </button>
        </form>
      )}

      {/* Mini YouTube Player */}
      {videoId ? (
        <MiniYTPlayer isHost={isHost} videoId={videoId} />
      ) : (
        <p className="text-center opacity-70">
          No music loaded yet 🎵
        </p>
      )}
    </div>
  );
}

export default Player;
