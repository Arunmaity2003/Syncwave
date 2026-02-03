import React, { useState, forwardRef } from "react";
import MiniYTPlayer from "./Miniyt";

const Player = forwardRef((props, ref) => {
  const isHost = true;
  const [videoId, setVideoId] = useState("");

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
      {isHost && (
        <form onSubmit={handleSetVideo} className="flex gap-2">
          <input
            name="link"
            type="text"
            placeholder="Paste YouTube link"
            className="flex-1 p-2 rounded text-white bg-gray-800"
            required
          />
          <button className="bg-blue-600 hover:bg-blue-800 hover:cursor-pointer duration-300 px-4 py-2 rounded font-bold">
            Load
          </button>
        </form>
      )}

      {videoId ? (
        <MiniYTPlayer ref={ref} isHost={isHost} videoId={videoId} />
      ) : (
        <p className="text-center opacity-70">No music loaded yet 🎵</p>
      )}
    </div>
  );
});

export default Player;
