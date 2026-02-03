import YouTube from "react-youtube";
import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { socket } from "../socket/Socket";

//sync logic 
const handSync = () => {
  if(!playerRef.current) return;
  const time = playerRef.current.getCurrentTime();
  socket.emit("sync-video", { time });
}

const MiniYTPlayer = forwardRef(({ isHost, videoId }, ref) => {
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const play = () => {
    if (!playerRef.current) return;
    const time = playerRef.current.getCurrentTime();
    playerRef.current.playVideo();
    socket.emit("play-video", { time });
  };

  const pause = () => {
    if (!playerRef.current) return;
    const time = playerRef.current.getCurrentTime();
    playerRef.current.pauseVideo();
    socket.emit("pause-video", { time });
  };

  const sync = () => {
    if (!playerRef.current) return;
    const time = playerRef.current.getCurrentTime();
    socket.emit("sync-video", { time });
  };

  useImperativeHandle(ref, () => ({
    play,
    pause,
    sync,
  }));

  // socket listeners
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
          height: "450px",
          playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
          },
        }}
      />
    </div>
  );
});

export default MiniYTPlayer;