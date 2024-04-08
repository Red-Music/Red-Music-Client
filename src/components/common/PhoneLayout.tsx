import React, { ReactNode } from "react";
import { Audio } from "./Audio";

export const PhoneLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[100vw] flex justify-evenly min-h-[100vh]">
      <div className={`max-w-[400px] w-[100vw] bg-200 dark:bg-200-dark h-full`}>
        <Audio />
        {children}
      </div>
    </div>
  );
};
