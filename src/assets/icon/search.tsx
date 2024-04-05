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
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_27_215)">
        <path
          d="M23.4244 24.0064L16.0968 16.6788C15.5135 17.1604 14.8426 17.5373 14.0843 17.8095C13.326 18.0818 12.5414 18.2179 11.7308 18.2179C9.73674 18.2179 8.04914 17.5275 6.66796 16.1466C5.28678 14.7658 4.59619 13.0786 4.59619 11.0851C4.59619 9.09162 5.28661 7.40383 6.66743 6.02178C8.04826 4.63975 9.73544 3.94873 11.729 3.94873C13.7225 3.94873 15.4102 4.63932 16.7923 6.0205C18.1743 7.40168 18.8654 9.08928 18.8654 11.0833C18.8654 11.9164 18.7255 12.7121 18.4458 13.4705C18.1661 14.2288 17.7929 14.8884 17.3262 15.4493L24.6538 22.7769L23.4244 24.0064ZM11.7308 16.4679C13.234 16.4679 14.5072 15.9463 15.5505 14.903C16.5938 13.8598 17.1154 12.5865 17.1154 11.0833C17.1154 9.58009 16.5938 8.30685 15.5505 7.26358C14.5072 6.22031 13.234 5.69867 11.7308 5.69867C10.2276 5.69867 8.95431 6.22031 7.91104 7.26358C6.86779 8.30685 6.34616 9.58009 6.34616 11.0833C6.34616 12.5865 6.86779 13.8598 7.91104 14.903C8.95431 15.9463 10.2276 16.4679 11.7308 16.4679Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
