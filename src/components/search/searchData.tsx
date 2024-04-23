import { PlusIcon } from "@/assets";

interface SearchDataProps {
  title: string;
  artist: string;
  image: string;
  id: number;
}
export const SearchData = ({ data }: { data: SearchDataProps }) => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-2">
        <img src={data.image} alt="music" className="w-[44px] h-[44px]" />
        <div className="flex flex-col justify-between">
          <p className="font-bold">{data.title}</p>
          <p className="font-light text-sm">{data.artist}</p>
        </div>
      </div>
      <button>
        <PlusIcon />
      </button>
    </div>
  );
};
