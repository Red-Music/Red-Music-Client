const SearchIcon = ({
  size = 40,
  color = "text-500 dark:text-500-dark",
  className = "",
  cursor = false,
}: {
  size?: number;
  color?: string;
  className?: string;
  cursor?: boolean;
}) => {
  return (
    <svg
      className={`${color} ${className} ${cursor ? "cursor-pointer" : ""}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 12.75L20 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.5355 12.5355C15.4882 10.5829 15.4882 7.41709 13.5355 5.46447C11.5829 3.51184 8.41709 3.51184 6.46451 5.46447C4.51184 7.41709 4.51184 10.5829 6.46451 12.5355C8.41709 14.4882 11.5829 14.4882 13.5355 12.5355Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
