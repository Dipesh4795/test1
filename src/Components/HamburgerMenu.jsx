import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const HamburgerMenu = ({ children, isMenuModalOpen, setIsMenuModalOpen }) => {
  return (
    <div
      className={`  fixed  w-fit  left-0 top-[60px] z-[100] inset-0 bg-stone-500 transition-all duration-1000
      ${isMenuModalOpen ? "translate-x-0" : "translate-x-[-100%]"} 
    `}
    >
      <div className="relative">
        <div
          className="absolute top-1 left-10"
          onClick={() => setIsMenuModalOpen((prev) => !prev)}
        >
          {
            isMenuModalOpen && <MdOutlineCancel size={30} fill={"white"} />
            // : (
            //   <MdOutlineCancel size={30} fill={"white"} />
            // )
          }
        </div>
      </div>
      <div className="flex min-h-full">
        <div className=" text-white mt-6">{children}</div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
