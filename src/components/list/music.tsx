"use client";
import { PauseIcon, PlayIcon, TrashIcon } from "@/assets";
import { musicStore } from "@/store/music";

interface musicProps {
  title: string;
  artist: string;
  image: string;
  id: number;
}
export const Musics = ({ music }: { music: musicProps }) => {
  const { id, isPlaying, toggleIsPlaying } = musicStore();
  return (
    <div
      className={`flex w-full justify-between p-4 items-center border-b-2 border-300 dark:border-300-dark
    ${id === music.id && "bg-300 dark:bg-300-dark"}`}
    >
      <div className="flex gap-2">
        <img
          src={music.image}
          alt={music.title + music.artist}
          width="44px"
          height="44px"
        />
        <div className="flex flex-col justify-between">
          <p className="font-bold">{music.title}</p>
          <p className="font-light text-sm">{music.artist}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          onClick={() => {
            if (id === music.id) toggleIsPlaying();
            else {
              toggleIsPlaying();
              musicStore.setState({ id: music.id });
            }
          }}
        >
          {id === music.id && isPlaying ? (
            <PauseIcon size={20} cursor />
          ) : (
            <PlayIcon size={20} cursor />
          )}
        </div>
        <div>
          <TrashIcon cursor />
        </div>
      </div>
    </div>
  );
};
