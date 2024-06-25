"use client";

import { likeList } from "@/api/like";
import HeartIcon from "@/assets/icon/heart";
import { HeadFootLayout } from "@/components/common/HeadFootLayout";
import { SearchData } from "@/components/search/searchData";
import { useQuery } from "@tanstack/react-query";

export default function Chart() {
  const { data } = useQuery({
    queryKey: ["likeList"],
    queryFn: likeList,
  });

  return (
    <HeadFootLayout title="CHART">
      <div className="flex flex-col flex-1">
        {data?.musics.map((v, i) => (
          <div key={v.id} className="flex flex-col">
            <div className="flex  px-4 -mb-3  mt-1">
              <p className=" font-bold">{i + 1}등</p>
            </div>
            <SearchData key={v.id} data={v} />{" "}
            <div className="flex justify-end px-4 -mt-3  mb-1">
              <div className="flex gap-1">
                <HeartIcon className="text-primary" />
                {v.like_count}개
              </div>
            </div>
            <hr className="w-full border-500 dark:border-500-dark" />
          </div>
        ))}
      </div>
    </HeadFootLayout>
  );
}
