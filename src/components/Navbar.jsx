import React from "react";
import AppLayout from "./AppLayout";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="bg-[#FFF]  text-white sticky top-0 z-50">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-black lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
                <span className="text-3xl font-bold">Dashboard</span>
                {/* <img src="/" alt="comLogo" /> */}
              </a>
            </div>
            <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <div className="flex items-center bg-gray-100 p-2 rounded-md shadow-[#445ce3] shadow-sm w-[350px] h-[40px]">
                    <svg
                      className="w-5 h-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 10-10 0 5 5 0 0010 0z"
                      ></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search anything..."
                      className="bg-transparent focus:outline-none w-full text-gray-600 placeholder-gray-400"
                    />
                  </div>
                  <li className="hover:text-black transition hover:underline cursor-pointer">
                    <FaBell className="mt-2.5 text-[#445ce3]" size={24} />
                  </li>
                  <li className="hover:text-black transition hover:underline cursor-pointer">
                    <div className="flex items-center space-x-2 text-[15px] hover:text-black">
                       <CgProfile className="mt-2.5 text-[#445ce3] h-8 w-8" />
                      <span className="font-bold mt-2.5">user</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
