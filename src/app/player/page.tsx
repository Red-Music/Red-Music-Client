"use client";
import {
  ALBUM,
  CD,
  LyricsIcon,
  NextIcon,
  PlayIcon,
  PrevIcon,
  ReloadIcon,
  Wave,
} from "@/assets";
import { Header } from "@/components/common/Header";
import Image from "next/image";
// import Music from "@/assets/music/Blizzards.mp3";
import Lottie from "lottie-react";
export default function Player() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header title="NOW PLAYING" prev />
      <div className="flex flex-1 flex-col justify-evenly">
        <div className="flex flex-col gap-5">
          <div className="relative flex justify-center items-center">
            <Lottie
              animationData={Wave}
              loop={true}
              autoplay={true}
              className="max-w-[500px] absolute top-[50%] translate-y-[-50%]"
            />
            <Image
              src={CD}
              className="w-[55%] z-[1] animate-spin-slow"
              alt="CD"
              priority
            />
            <Image
              src={ALBUM}
              alt="ALBUM"
              className="w-[25%] absolute z-[2] rounded-full animate-spin-slow"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl">첫사랑</h1>
            <p className="text-lg">백아</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-10 gap-10">
          <div className="w-full gap-2 flex flex-col">
            <div className="relative">
              <div className="w-full h-[5px] bg-400 dark:bg-400-dark rounded" />
              <div className="w-[50%] h-[5px] bg-800 dark:bg-800-dark rounded absolute top-0 left-0" />
              <div className="w-2 h-2 rounded bg-800 dark:bg-800-dark absolute top-0 translate-y-[-25%] translate-x-[-25%] left-[50%]" />
            </div>
            <div className="flex justify-between">
              <p className="text-sm">01:52</p>
              <p className="text-sm text-500 dark:text-500-dark">03:08</p>
            </div>
            {/* <audio src={Music}></audio> */}
          </div>
          <div className="flex justify-between w-full items-center">
            <LyricsIcon />
            <div className="flex gap-10 items-center">
              <PrevIcon />
              <PlayIcon />
              <NextIcon />
            </div>
            <ReloadIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
