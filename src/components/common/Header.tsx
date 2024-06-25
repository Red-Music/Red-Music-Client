import LeftIcon from "@/assets/icon/leftArrow";
import { useState } from "react";
import { Modal } from "./Modal";
import { usePathname } from "next/navigation";

export const Header = ({
  prev = false,
  title,
}: {
  prev?: boolean;
  title?: string;
}) => {
  const pathName = usePathname();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-between items-center h-11 px-2 fixed bg-100 dark:bg-100-dark top-0 max-w-[400px] w-[100vw]">
      <div className="w-[30px] flex justify-center items-center">
        {prev && <LeftIcon />}
      </div>
      <p className="text-500 dark:text-500-dark">{title}</p>
      {pathName === "/search" ? (
        <div className="flex">
          <div className="w-[30px]">
            {/* plus 버튼을 누르면 모달이 나오면서 input창들이 있음 */}
            <button
              className="w-6 h-6 flex justify-center items-center"
              onClick={() => setOpenModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-500 dark:text-500-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      ) : (
        <div className="w-[30px]"></div>
      )}
    </div>
  );
};
