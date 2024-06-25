"use client";

import { musicList, musiclistResponseType } from "@/api/musiclist";
import { searchList } from "@/api/search";
import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { SearchBar } from "@/components/search/searchBar";
import { SearchData } from "@/components/search/searchData";
import useDebounce from "@/hooks/useDebounce";
import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Search() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["musicList"],
    queryFn: ({ pageParam }) => musicList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (
        lastPage.musics.count > allPages.map((v) => v.musics.rows).flat().length
      ) {
        return allPages.length + 1;
      }
    },
  });

  const { data: searchData, mutate } = useMutation({
    mutationKey: ["searchList"],
    mutationFn: searchList,
    onSuccess: () => {},
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      mutate(search);
    }
  }, [search]);
  return (
    <HeadFootLayout title="SEARCH">
      <div className="flex-1 flex flex-col">
        <SearchBar setValue={setSearch} />
        <div className="flex flex-col">
          {search.length > 0 ? (
            searchData?.musics.map((s) => <SearchData key={s.id} data={s} />)
          ) : (
            <>
              {data?.pages
                .map((v) => v.musics.rows)
                .flat()
                .filter((s) => s.title.includes(search))
                .map((s) => (
                  <SearchData key={s.id} data={s} />
                ))}
              {hasNextPage && (
                <button
                  onClick={() => fetchNextPage()}
                  className="bg-300 dark:bg-300-dark p-2 rounded-lg m-2 w-fit self-center"
                >
                  더보기
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </HeadFootLayout>
  );
}
