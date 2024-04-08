"use client";

import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { AudioController } from "@/components/player/audioController";
import { CdPlayer } from "@/components/player/cdPlayer";
import { Lyrics } from "@/components/player/lyrics";
import { musicStore } from "@/store/music";
import { useRouter } from "next/navigation";

export default function Player() {
  const { id } = musicStore();
  const router = useRouter();
  return (
    <HeadFootLayout title="HOME">
      {id ? (
        <>
          <CdPlayer />
          <AudioController />
          <Lyrics />
        </>
      ) : (
        <div className="flex flex-col items-center h-24 gap-2">
          <h1 className="text-2xl">재생 중인 음악이 없습니다.</h1>
          <button
            onClick={() => router.push("/search")}
            className="bg-300 dark:bg-300-dark text-500 dark:text-500-dark w-fit p-2 rounded-lg hover:bg-200 dark:hover:bg-200-dark border-2"
          >
            음악 고르러 가기
          </button>
        </div>
      )}
    </HeadFootLayout>
  );
}
