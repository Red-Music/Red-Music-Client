"use client";
import { BottomSheetIcon, TopArrowIcon } from "@/assets";
import { useState } from "react";

export const Lyrics = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col absolute bottom-[64px] z-50 max-w-[400px] w-[100vw] h-[58vh] ${
        isOpen ? "translate-y-0" : "translate-y-[50vh]"
      }
      transition-transform transform ease-in-out duration-500
      `}
    >
      <div className="relative flex flex-col justify-center">
        <BottomSheetIcon className="w-full" />
        <div
          className="absolute top-4 left-[50%] translate-x-[-43%] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TopArrowIcon
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-transform transform ease-in-out`}
          />
        </div>
      </div>
      <div className="bg-100 dark:bg-100-dark flex justify-center text-center rounded-t-lg w-full overflow-auto py-5">
        <p>
          알아 내 맘에 조용히
          <br />
          문을 두드리면
          <br />
          눈에 뿌옇게 고여버린
          <br />널 흘려보내야 해<br />
          기억은 저 빠른
          <br />
          시겟바늘을 놓쳐
          <br />
          처음 널 알아본
          <br />
          마지막에 웃어보일거야
          <br />
          사선을 트는 저 빛은
          <br />날 향해 불을 피우고
          <br />
          재가 되지 않으려
          <br />난 돌아서지만
          <br />빈 갈피에 차오른
          <br />
          알아 내 맘에 조용히
          <br />
          문을 두드리면
          <br />
          눈에 뿌옇게 고여버린
          <br />널 흘려보내야 해<br />
          기억은 저 빠른
          <br />
          시겟바늘을 놓쳐
          <br />
          처음 널 알아본
          <br />
          마지막에 웃어보일거야
          <br />
          사선을 트는 저 빛은
          <br />날 향해 불을 피우고
          <br />
          재가 되지 않으려
          <br />난 돌아서지만
          <br />빈 갈피에 차오른
          <br />
          우리라는 색은
        </p>
      </div>
    </div>
  );
};
