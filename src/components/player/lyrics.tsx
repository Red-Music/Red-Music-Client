"use client";
import { BottomSheetIcon, TopArrowIcon } from "@/assets";
import { musicStore } from "@/store/music";

interface LyricsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Lyrics = ({ isOpen, setIsOpen }: LyricsProps) => {
  const { lyrics: lyricsText } = musicStore();
  return (
    <div
      className={`flex flex-col absolute bottom-[64px] z-50 max-w-[400px] w-[100vw] h-[58vh] ${
        isOpen ? "translate-y-0" : "translate-y-[50vh]"
      }
      transition-transform transform ease-in-out duration-500
      `}
    >
      <div className="relative flex flex-col justify-center">
        <BottomSheetIcon className="w-full" />
        <div
          className="absolute top-4 left-[50%] translate-x-[-43%] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TopArrowIcon
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-transform transform ease-in-out`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-100 dark:bg-100-dark flex flex-col items-center text-center rounded-t-lg w-full overflow-auto py-5 ">
          <pre>{lyricsText}</pre>
          <div className="bg-100 dark:bg-100-dark h-10 w-full"></div>
        </div>
      )}
    </div>
  );
};
