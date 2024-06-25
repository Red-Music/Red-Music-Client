"use client";

import { listApi, playlistResponseType } from "@/api/playlist";
import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { Musics } from "@/components/list/music";
import { useQuery } from "@tanstack/react-query";

export default function List() {
  const { data } = useQuery({
    queryKey: ["listApi"],
    queryFn: listApi,
  });

  return (
    <HeadFootLayout title="PLAYLIST">
      <div className="flex flex-col flex-1">
        {data &&
          data.playlist.map((music: playlistResponseType, index: number) => (
            <Musics
              key={index}
              music={music.music}
              listId={music.id}
              isLiked={music.isLiked}
            />
          ))}
      </div>
    </HeadFootLayout>
  );
}
