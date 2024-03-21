import LeftIcon from "@/assets/icon/leftArrow";

export const Header = ({
  prev = false,
  title,
}: {
  prev?: boolean;
  title?: string;
}) => {
  return (
    <div className="flex justify-between items-center h-11 px-2">
      <div className="w-[30px] flex justify-center items-center">
        {prev && <LeftIcon />}
      </div>
      <p className="text-500 dark:text-500-dark">{title}</p>
      <div className="w-[30px]"></div>
    </div>
  );
};
