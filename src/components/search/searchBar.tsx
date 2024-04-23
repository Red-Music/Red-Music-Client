import { SearchIcon } from "@/assets";

export const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 justify-center sticky top-0 bg-100 p-2">
      <input
        type="text"
        className="bg-300 dark:bg-300-dark focus:outline-none py-1 px-3 rounded-lg w-[80%]"
        placeholder="제목으로 검색"
      />
      <button className="bg-300 dark:bg-300-dark p-1 rounded-lg">
        <SearchIcon size={24} />
      </button>
    </div>
  );
};
