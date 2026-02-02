import YouTube from "react-youtube";
import { useEffect, useRef } from "react";
import { socket } from "../socket/Socket";

export default function MiniYTPlayer({ isHost, videoId }) {
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  // HOST actions
  const hostPlay = () => {
    const time = playerRef.current.getCurrentTime();
    socket.emit("play-video", { time });
  };

  const hostPause = () => {
    const time = playerRef.current.getCurrentTime();
    socket.emit("pause-video", { time });
  };

  // Listeners
  useEffect(() => {
    socket.on("play-video", ({ time }) => {
      playerRef.current.seekTo(time, true);
      playerRef.current.playVideo();
    });

    socket.on("pause-video", ({ time }) => {
      playerRef.current.seekTo(time, true);
      playerRef.current.pauseVideo();
    });

    socket.on("sync-video", ({ time }) => {
      playerRef.current.seekTo(time, true);
    });

    return () => {
      socket.off("play-video");
      socket.off("pause-video");
      socket.off("sync-video");
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
            rel: 0,
          },
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
