const BottomSheet = ({
  size = 393,
  color = "text-100 dark:text-100-dark",
  className = "",
  cursor = false,
}: {
  size?: number;
  color?: string;
  className?: string;
  cursor?: boolean;
}) => {
  const feColorMatrixValues = color.includes("dark")
    ? "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
    : "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0";

  return (
    <svg
      className={`${color} ${className} ${cursor ? "cursor-pointer" : ""}`}
      width={size}
      viewBox="0 0 400 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_349_562)">
        <path
          d="M390.5 62.5C390.5 62.5 336.127 57.1411 310.686 55.2334C297.965 54.2795 286.519 52.8789 277.106 50.8276C267.68 48.7732 260.353 46.0784 255.82 42.5711C251.214 39.0076 246.691 34.8891 242.166 30.7194C241.784 30.3674 241.403 30.0151 241.021 29.6627L241.011 29.654C236.876 25.8395 232.735 22.0189 228.543 18.6005C219.549 11.2668 210.207 5.68709 200 6.01363C189.793 5.68709 180.452 11.2668 171.458 18.6005C167.265 22.0189 163.124 25.8395 158.989 29.654L158.98 29.6627L158.933 29.7063C158.567 30.0441 158.2 30.3819 157.834 30.7193C153.31 34.8891 148.787 39.0076 144.181 42.5711C139.647 46.0784 132.321 48.7732 122.894 50.8275C113.482 52.8789 102.036 54.2795 89.3149 55.2334C63.8734 57.1411 9.5 62.5 9.5 62.5C9.5 62.5 4.1083 64.0481 4 68H396C395.923 64.5503 390.5 62.5 390.5 62.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_349_562"
          x="0"
          y="0"
          width="400"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values={feColorMatrixValues} />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_349_562"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_349_562"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BottomSheet;
