const HeartIcon = ({
  size = 22,
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
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24.9083L12.3083 23.3683C6.3 17.92 2.33333 14.315 2.33333 9.91667C2.33333 6.31167 5.15667 3.5 8.75 3.5C10.78 3.5 12.7283 4.445 14 5.92667C15.2717 4.445 17.22 3.5 19.25 3.5C22.8433 3.5 25.6667 6.31167 25.6667 9.91667C25.6667 14.315 21.7 17.92 15.6917 23.3683L14 24.9083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeartIcon;
