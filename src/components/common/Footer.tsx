"use client";
import {
  DEFAULTIMAGE,
  HomeIcon,
  SearchIcon,
  SettingIcon,
  PauseIcon,
  PlayIcon,
  CloseIcon,
} from "@/assets";
import PlaylistIcon from "@/assets/icon/playlist";
import { musicStore } from "@/store/music";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();
  const router = useRouter();

  const { isPlaying, toggleIsPlaying, setId, id, image, artist, title } =
    musicStore();

  return (
    <>
      {id && pathName !== "/player" && (
        <div className="flex justify-between items-center fixed bottom-16 bg-200 dark:bg-200-dark max-w-[400px] w-[100vw] z-[1000] py-2 px-4 shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.25)]">
          <div className="flex gap-1 items-center">
            <Image
              src={image ?? DEFAULTIMAGE}
              alt={title ?? "제목 없음" + artist ?? "가수 미상"}
              className="w-12 h-12"
            />
            <p className="text-lg font-bold">{title ?? "제목 없음"}</p>
            <p className="text-sm font-bold">{artist ?? "가수 미상"}</p>
          </div>
          <div className="flex gap-2">
            <div onClick={toggleIsPlaying}>
              {isPlaying ? (
                <PauseIcon size={20} cursor />
              ) : (
                <PlayIcon size={20} cursor />
              )}
            </div>
            <div onClick={() => setId(0)}>
              <CloseIcon size={20} cursor />
            </div>
          </div>
        </div>
      )}
      <div className="bg-100 dark:bg-100-dark grid grid-cols-4 pt-1 pb-2 shadow-bottom z-[1000] fixed bottom-0 max-w-[400px] w-[100vw]">
        <div
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => router.push("player")}
        >
          <HomeIcon
            size={28}
            color={
              pathName === "/player"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }
          />
          <p
            className={`text-sm ${
              pathName === "/player"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }`}
          >
            홈
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => router.push("/list")}
        >
          <PlaylistIcon
            size={28}
            color={
              pathName === "/list"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }
          />
          <p
            className={`text-sm ${
              pathName === "/list"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }`}
          >
            목록
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => router.push("/search")}
        >
          <SearchIcon
            size={28}
            color={
              pathName === "/search"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }
          />
          <p
            className={`text-sm ${
              pathName === "/search"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }`}
          >
            검색
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => router.push("/offline")}
        >
          <SettingIcon
            size={28}
            color={
              pathName === "/offline"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }
          />
          <p
            className={`text-sm ${
              pathName === "/offline"
                ? "text-800 dark:text-800-dark"
                : "text-400 dark:text-400-dark"
            }`}
          >
            오프라인
          </p>
        </div>
      </div>
    </>
  );
};
