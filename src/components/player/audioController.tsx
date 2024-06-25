"use client";
import { addLike } from "@/api/like";
import { PauseIcon, PlayIcon, ReloadIcon } from "@/assets";
import HeartIcon from "@/assets/icon/heart";
import { musicStore } from "@/store/music";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

interface AudioControllerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AudioController = ({ setIsOpen }: AudioControllerProps) => {
  const {
    audio,
    isPlaying,
    totalTime,
    currentTime,
    toggleIsPlaying,
    setCurrentTime,
    progress,
    setProgress,
    setIsPlaying,
    controller,
    id,
    isLiked,
    toggleIsLiked,
  } = musicStore();

  const onClickPlay = () => {
    if (!controller) return;

    toggleIsPlaying();
  };

  const onClickReload = () => {
    if (!controller) return;
    setIsPlaying(true);
    controller.load();
    controller.play();
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
    if (controller) {
      controller.currentTime = time * per;
    }
  };

  const { mutate: addLikeMutate } = useMutation({
    mutationKey: ["addLike"],
    mutationFn: addLike,
    onSuccess: () => {
      toggleIsLiked();
    },
  });

  useEffect(() => {
    setCurrentTime(controller?.currentTime || 0);
  }, [controller?.currentTime, isPlaying, setCurrentTime]);

  useEffect(() => {
    if (audio && controller) {
      controller.addEventListener("timeupdate", () => {
        if (controller?.currentTime === controller?.duration) {
          setIsPlaying(false);
          controller?.pause();
        }
        setProgress(controller?.currentTime || 0, controller?.duration || 0);
      });
    }
  }, [audio, controller, setIsPlaying, setProgress]);

  useEffect(() => {
    document
      .getElementById("progressBar")
      ?.style.setProperty("width", progress);
    document
      .getElementById("progressBarCircle")
      ?.style.setProperty("left", progress);
  }, [progress]);

  useEffect(() => {
    if (id === "0") {
      setIsPlaying(false);
      controller?.pause();
    }
  }, [controller, id, setIsPlaying]);

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
      </div>
      <div className="flex justify-between w-full items-center">
        <div onClick={() => addLikeMutate(id)}>
          <HeartIcon
            className={`cursor-pointer ${
              isLiked ? "text-primary" : "text-500 dark:text-500-dark"
            }`}
          />
        </div>
        <div className="flex gap-10 items-center">
          {/* <div>
            <PrevIcon className="cursor-pointer" />
          </div> */}
          <div onClick={onClickPlay}>
            {isPlaying ? (
              <PauseIcon className="cursor-pointer" />
            ) : (
              <PlayIcon className="cursor-pointer" />
            )}
          </div>
          {/* <div>
            <NextIcon className="cursor-pointer" />
          </div> */}
        </div>
        <div onClick={onClickReload}>
          <ReloadIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
