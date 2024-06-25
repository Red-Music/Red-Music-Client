"use client";
import { CD } from "@/assets";
import { musicStore } from "@/store/music";
import Image from "next/image";

export const CdPlayer = () => {
  const { isPlaying, image, title, artist } = musicStore();

  return (
    <div className="flex flex-col gap-5 ">
      <div className="relative flex justify-center items-center">
        <Image
          src={CD}
          className={`w-[55%] z-[1] ${isPlaying && "animate-spin-slow"}`}
          alt="CD"
          priority
        />
        <img
          src={image}
          alt="ALBUM"
          className={`w-[25%] h-[90px] absolute z-[2] rounded-full ${
            isPlaying && "animate-spin-slow"
          }`}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-lg">{artist}</p>
      </div>
    </div>
  );
};
