"use client";
import { delList, musicType } from "@/api/playlist";
import { PauseIcon, PlayIcon, TrashIcon } from "@/assets";
import { musicStore } from "@/store/music";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const Musics = ({
  music,
  listId,
  isLiked,
}: {
  music: musicType;
  listId: number;
  isLiked: boolean;
}) => {
  const { id, isPlaying, toggleIsPlaying } = musicStore();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["delList"],
    mutationFn: delList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listApi"] });
    },
  });
  return (
    <div
      className={`flex w-full justify-between p-4 items-center border-b-2 border-300 dark:border-300-dark
    ${id === music.id && "bg-300 dark:bg-300-dark"}`}
    >
      <div className="flex gap-2">
        <img
          src={music.subnail}
          alt={music.title + music.singer}
          width="44px"
          height="44px"
        />
        <div className="flex flex-col justify-between">
          <p className="font-bold">{music.title}</p>
          <p className="font-light text-sm">{music.singer}</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div
          onClick={() => {
            if (id === music.id) toggleIsPlaying();
            else {
              musicStore.setState({
                id: music.id,
                audio: music.music_file,
                title: music.title,
                artist: music.singer,
                lyrics: music.lyrics,
                image: music.subnail,
                isLiked: isLiked,
              });
            }
          }}
        >
          {id === music.id && isPlaying ? (
            <PauseIcon size={20} cursor />
          ) : (
            <PlayIcon size={20} cursor />
          )}
        </div>
        <div onClick={() => mutate(listId)}>
          <TrashIcon cursor size={20} />
        </div>
      </div>
    </div>
  );
};
