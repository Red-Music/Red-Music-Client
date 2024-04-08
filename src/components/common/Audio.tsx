"use client";
import { FirstLove } from "@/assets";
import { musicStore } from "@/store/music";
import { use, useEffect, useRef } from "react";

export const Audio = () => {
  const audio = FirstLove;
  const {
    // audio,
    controller,
    setController,
    isPlaying,
    toggleIsPlaying,
    setIsPlaying,
  } = musicStore();

  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioPlayer.current) return;
    setController(audioPlayer.current);
  }, [controller, setController]);

  useEffect(() => {
    if (isPlaying) {
      if (!controller) return;
      const playPromise = controller.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
            console.log("재생 오류:", error);
            toggleIsPlaying();
          });
      }
    } else {
      controller?.pause();
    }
  }, [controller, isPlaying, setIsPlaying, toggleIsPlaying]);

  useEffect(() => {
    if (!controller) return;
    if (controller.paused) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [controller?.paused]);

  return (
    <>
      <audio src={audio} ref={audioPlayer} controlsList="nodownload">
        오디오 지원되지 않는 브라우저
      </audio>
    </>
  );
};
