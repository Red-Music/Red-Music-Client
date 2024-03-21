const LyricsIcon = ({
  size = 18,
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
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="3"
        width="9.3913"
        height="1.56522"
        rx="0.782609"
        fill="currentColor"
      />
      <rect
        y="13.9565"
        width="11.7391"
        height="1.56522"
        rx="0.782609"
        fill="currentColor"
      />
      <rect
        y="8.47827"
        width="18"
        height="1.56522"
        rx="0.782609"
        fill="currentColor"
      />
    </svg>
  );
};

export default LyricsIcon;
