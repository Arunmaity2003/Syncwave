import YouTube from "react-youtube";
import { useEffect, useRef } from "react";
import { socket } from "../socket/socket";

export default function MiniYTPlayer({ isHost, videoId }) {
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  // HOST → send actions
  const hostPlay = () => {
    const time = playerRef.current.getCurrentTime();
    socket.emit("HOST_PLAY", { time });
  };

  const hostPause = () => {
    const time = playerRef.current.getCurrentTime();
    socket.emit("HOST_PAUSE", { time });
  };

  // LISTENERS → receive sync
  useEffect(() => {
    socket.on("PLAY", ({ time }) => {
      playerRef.current.seekTo(time, true);
      playerRef.current.playVideo();
    });

    socket.on("PAUSE", ({ time }) => {
      playerRef.current.seekTo(time, true);
      playerRef.current.pauseVideo();
    });

    socket.on("SYNC_TIME", ({ time }) => {
      playerRef.current.seekTo(time, true);
    });

    return () => {
      socket.off("PLAY");
      socket.off("PAUSE");
      socket.off("SYNC_TIME");
    };
  }, []);

  return (
    <div className="yt-mini">
      <YouTube
        videoId={videoId}
        onReady={onReady}
        opts={{
          width: "100%",
          height: "180",
          playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0
          }
        }}
      />

      {isHost && (
        <div className="yt-host-controls">
          <button className="play" onClick={hostPlay}>▶ Play</button>
          <button className="pause" onClick={hostPause}>⏸ Pause</button>
        </div>
      )}
    </div>
  );
}
