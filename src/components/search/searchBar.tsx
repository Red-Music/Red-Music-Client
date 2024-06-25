"use client";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

export const SearchBar = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [tempText, setTempText] = useState<string>("");
  const debouncedValue = useDebounce(tempText, 500);
  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex items-center gap-3 justify-center sticky top-0 bg-100 dark:bg-100-dark p-2">
      <input
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
        type="text"
        className="bg-300 dark:bg-300-dark focus:outline-none py-1 px-3 rounded-lg w-[95%]"
        placeholder="제목으로 검색"
      />
    </div>
  );
};
