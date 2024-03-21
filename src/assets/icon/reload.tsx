const ReloadIcon = ({
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0625 5.20313L13.32 4.33934C12.6904 3.67811 11.9329 3.15189 11.0936 2.7927C10.2542 2.43351 9.3505 2.24887 8.4375 2.25001C4.71094 2.25001 1.6875 5.27344 1.6875 9.00001C1.6875 12.7266 4.71094 15.75 8.4375 15.75C9.83356 15.7499 11.1953 15.3172 12.3353 14.5113C13.4752 13.7054 14.3375 12.5661 14.8032 11.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M16.3125 3.42494V7.31251C16.3125 7.4617 16.2532 7.60477 16.1478 7.71026C16.0423 7.81575 15.8992 7.87501 15.75 7.87501H11.8624C11.3611 7.87501 11.1101 7.26927 11.4645 6.9149L15.3524 3.02697C15.7068 2.67189 16.3125 2.92361 16.3125 3.42494Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ReloadIcon;
