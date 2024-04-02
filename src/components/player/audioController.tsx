"use client";
import {
  BilzzardsMusic,
  FirstLove,
  LyricsIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  ReloadIcon,
} from "@/assets";
import { musicStore } from "@/store/music";
import { useEffect, useRef } from "react";

export const AudioController = () => {
  const controller = useRef<HTMLAudioElement>(null);
  const audio = FirstLove;
  const {
    // audio,
    isPlaying,
    totalTime,
    currentTime,
    toggleIsPlaying,
    setTotalTime,
    setCurrentTime,
    progress,
    setProgress,
    setIsPlaying,
  } = musicStore();

  const onClickPlay = () => {
    if (!controller.current) return;

    if (isPlaying) {
      controller.current?.pause();
      toggleIsPlaying();
    } else {
      toggleIsPlaying();

      const playPromise = controller.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
            console.log("재생 오류:", error);
            toggleIsPlaying();
          });
      }
    }
  };

  const onClickReload = () => {
    if (!controller.current) return;
    setIsPlaying(true);
    controller.current.load();
    controller.current.play();
  };

  const onClickProgressBar = (e: any) => {
    const targetElement = e.currentTarget;
    const rect = targetElement.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;

    if (offsetX < 0) return;

    const width = targetElement.offsetWidth;
    const per = offsetX / width;
    const total = totalTime.split(":");
    const time = Number(total[0]) * 60 + Number(total[1]);
    setProgress(time * per, time);
    if (controller.current) {
      controller.current.currentTime = time * per;
    }
  };

  useEffect(() => {
    setCurrentTime(controller.current?.currentTime || 0);
  }, [isPlaying, setCurrentTime]);

  useEffect(() => {
    if (audio && controller.current) {
      controller.current.addEventListener("timeupdate", () => {
        if (controller.current?.currentTime === controller.current?.duration) {
          setIsPlaying(false);
          controller.current?.pause();
        }
        setProgress(
          controller.current?.currentTime || 0,
          controller.current?.duration || 0
        );
      });
    }
  }, [controller, audio, setProgress]);

  useEffect(() => {
    document
      .getElementById("progressBar")
      ?.style.setProperty("width", progress);
    document
      .getElementById("progressBarCircle")
      ?.style.setProperty("left", progress);
  }, [progress]);

  return (
    <div className="flex flex-col items-center px-10 gap-10">
      <div className="w-full gap-2 flex flex-col">
        <div
          className="relative cursor-pointer"
          onClick={(e) => onClickProgressBar(e)}
        >
          <div className="w-full h-[5px] bg-400 dark:bg-400-dark rounded absolute top-0" />
          <div
            id="progressBar"
            className="w-[0px] h-[5px] bg-800 dark:bg-800-dark rounded absolute top-0 left-0 transition-all"
          />
          <div
            id="progressBarCircle"
            className="left-[0%] w-2 h-2 rounded bg-800 dark:bg-800-dark absolute top-0 translate-y-[-25%] translate-x-[-25%]  cursor-pointer transition-all"
          />
        </div>
        <div className="flex justify-between">
          <p className="text-sm">{currentTime}</p>
          <p className="text-sm text-500 dark:text-500-dark">{totalTime}</p>
        </div>
        <audio src={audio} ref={controller} controlsList="nodownload">
          오디오 지원되지 않는 브라우저
        </audio>
      </div>
      <div className="flex justify-between w-full items-center">
        <div>
          <LyricsIcon className="cursor-pointer" />
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <PrevIcon className="cursor-pointer" />
          </div>
          <div onClick={onClickPlay}>
            {isPlaying ? (
              <PauseIcon className="cursor-pointer" />
            ) : (
              <PlayIcon className="cursor-pointer" />
            )}
          </div>
          <div>
            <NextIcon className="cursor-pointer" />
          </div>
        </div>
        <div onClick={onClickReload}>
          <ReloadIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
