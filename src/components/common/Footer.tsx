"use client";
import { HomeIcon, SearchIcon, SettingIcon } from "@/assets";
import PlaylistIcon from "@/assets/icon/playlist";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
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
              ? "text-800 dark:text-dark-800"
              : "text-400 dark:text-dark-400"
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
              ? "text-800 dark:text-dark-800"
              : "text-400 dark:text-dark-400"
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
              ? "text-800 dark:text-dark-800"
              : "text-400 dark:text-dark-400"
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
              ? "text-800 dark:text-dark-800"
              : "text-400 dark:text-dark-400"
          }`}
        >
          오프라인
        </p>
      </div>
    </div>
  );
};
