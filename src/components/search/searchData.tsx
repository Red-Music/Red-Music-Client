import { addPlayList } from "@/api/search";
import { PlusIcon } from "@/assets";
import { useMutation } from "@tanstack/react-query";

interface SearchDataProps {
  title: string;
  singer: string;
  subnail: string;
  id: string;
}
export const SearchData = ({ data }: { data: SearchDataProps }) => {
  const { mutate } = useMutation({
    mutationKey: ["addPlayList"],
    mutationFn: addPlayList,
    onSuccess: () => {},
  });
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-2">
        <img src={data.subnail} alt="music" className="w-[44px] h-[44px]" />
        <div className="flex flex-col justify-between">
          <p className="font-bold">{data.title}</p>
          <p className="font-light text-sm">{data.singer}</p>
        </div>
      </div>
      <button
        onClick={() => {
          mutate(data.id);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
};
