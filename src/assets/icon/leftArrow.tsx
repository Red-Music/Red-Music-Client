const LeftIcon = ({
  size = 30,
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
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_83_307)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3662 15.8838C10.1319 15.6493 10.0002 15.3315 10.0002 15C10.0002 14.6685 10.1319 14.3507 10.3662 14.1163L17.4375 7.045C17.5528 6.92561 17.6907 6.83039 17.8432 6.76487C17.9957 6.69936 18.1598 6.66488 18.3257 6.66344C18.4917 6.662 18.6563 6.69362 18.8099 6.75647C18.9635 6.81933 19.1031 6.91214 19.2205 7.02951C19.3378 7.14687 19.4307 7.28644 19.4935 7.44006C19.5564 7.59368 19.588 7.75828 19.5865 7.92425C19.5851 8.09023 19.5506 8.25425 19.4851 8.40676C19.4196 8.55926 19.3244 8.69719 19.205 8.8125L13.0175 15L19.205 21.1875C19.4327 21.4233 19.5587 21.739 19.5558 22.0668C19.553 22.3945 19.4215 22.708 19.1898 22.9398C18.958 23.1715 18.6445 23.303 18.3167 23.3058C17.989 23.3087 17.6732 23.1827 17.4375 22.955L10.3662 15.8838Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_83_307">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LeftIcon;
