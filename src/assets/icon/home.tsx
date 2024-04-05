const HomeIcon = ({
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
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_24_1492)">
        <path
          d="M6.12501 19H9.47118V13.9615C9.47118 13.7055 9.5578 13.4908 9.73103 13.3176C9.90426 13.1443 10.1189 13.0577 10.375 13.0577H13.875C14.1311 13.0577 14.3457 13.1443 14.519 13.3176C14.6922 13.4908 14.7788 13.7055 14.7788 13.9615V19H18.125V10.1539C18.125 10.1026 18.1138 10.0561 18.0914 10.0144C18.0689 9.97277 18.0385 9.93591 18 9.90386L12.3077 5.62501C12.2564 5.58015 12.1955 5.55771 12.125 5.55771C12.0545 5.55771 11.9936 5.58015 11.9423 5.62501L6.25001 9.90386C6.21156 9.93591 6.18111 9.97277 6.15866 10.0144C6.13622 10.0561 6.12501 10.1026 6.12501 10.1539V19ZM4.62503 19V10.1539C4.62503 9.86765 4.68906 9.5965 4.81711 9.34041C4.94516 9.08433 5.12216 8.87344 5.34811 8.70774L11.0404 4.41929C11.3563 4.17826 11.7173 4.05774 12.1235 4.05774C12.5296 4.05774 12.8917 4.17826 13.2096 4.41929L18.9019 8.70774C19.1279 8.87344 19.3049 9.08433 19.4329 9.34041C19.561 9.5965 19.625 9.86765 19.625 10.1539V19C19.625 19.409 19.4772 19.7612 19.1817 20.0567C18.8862 20.3522 18.534 20.5 18.125 20.5H14.1827C13.9266 20.5 13.712 20.4134 13.5387 20.2401C13.3655 20.0669 13.2789 19.8522 13.2789 19.5961V14.5577H10.9712V19.5961C10.9712 19.8522 10.8845 20.0669 10.7113 20.2401C10.5381 20.4134 10.3234 20.5 10.0673 20.5H6.12501C5.71604 20.5 5.36381 20.3522 5.06831 20.0567C4.77279 19.7612 4.62503 19.409 4.62503 19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;