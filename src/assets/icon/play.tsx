const PlayIcon = ({
  size = 40,
  color = "text-800 dark:text-800-dark",
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
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3907 34.375C9.911 34.3741 9.43982 34.2484 9.02349 34.0102C8.08599 33.4789 7.50317 32.4477 7.50317 31.3281V8.67189C7.50317 7.54923 8.08599 6.52111 9.02349 5.98986C9.44974 5.74489 9.93397 5.61891 10.4256 5.6251C10.9172 5.63128 11.3981 5.7694 11.818 6.02502L31.1813 17.6156C31.5848 17.8687 31.9175 18.2201 32.1481 18.6368C32.3787 19.0536 32.4997 19.5221 32.4997 19.9985C32.4997 20.4748 32.3787 20.9433 32.1481 21.3601C31.9175 21.7768 31.5848 22.1282 31.1813 22.3813L11.8149 33.975C11.3851 34.2348 10.8929 34.3731 10.3907 34.375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlayIcon;
