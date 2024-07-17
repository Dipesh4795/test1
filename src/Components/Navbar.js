import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const { accounttype, setAccounttype } = useContext(AppContext);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  return (
    <div className="w-full fixed  h-[60px] bg-slate-500 flex flex-col justify-center items-center">
      <div className="w-11/12 flex  justify-between items-center">
        {accounttype === null && (
          <Link to="/">
            <img src={logo} alt="Logo" width={40} height={20} loading="lazy" />
          </Link>
        )}
        {accounttype != null && (
          <div>
            {!isMenuModalOpen && (
              <div
                onClick={(event) => {
                  event.preventDefault();
                  setIsMenuModalOpen((prev) => !prev);
                }}
              >
                <AiOutlineMenu size={30} fill={"white"} />
              </div>
            )}

            <HamburgerMenu
              isMenuModalOpen={isMenuModalOpen}
              setIsMenuModalOpen={setIsMenuModalOpen}
            >
              <div className="flex flex-col gap-y-2 py-5 px-5 justify-center items-center">
                {accounttype === "Admin" && (
                  <div className="flex flex-col gap-4 text-white text-xl ">
                    <p>Menu1</p>
                    <p>Menu2</p>
                    <p>Menu3</p>
                    <p>Menu4</p>
                    <p>Menu5</p>
                  </div>
                )}
                {accounttype === "User" && (
                  <div className="flex flex-col gap-4 text-white text-xl ">
                    <p>Menu6</p>
                    <p>Menu7</p>
                    <p>Menu8</p>
                    <p>Menu9</p>
                    <p>Menu10</p>
                  </div>
                )}
              </div>
            </HamburgerMenu>
          </div>
        )}
        <nav className=" flex flex-row  gap-4 ">
          <ul className="flex flex-row gap-4 text-white text-xl ">
            <Link to="/">
              <li className="hover:bg-zinc-500">Home</li>
            </Link>

            <Link to="about">
              <li className="hover:bg-zinc-500">About Us</li>
            </Link>

            <Link to="contact">
              <li className="hover:bg-zinc-500">Contact Me</li>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-4 ">
          {accounttype === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}

          {accounttype != null && (
            <Link to="/">
              <button
                className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 "
                onClick={() => {
                  localStorage.clear();
                  setAccounttype(null);
                }}
              >
                Log Out
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
