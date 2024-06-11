import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <section className="pt-8 pb-4 border-b">
        <div className="resContainer">
          <div className="flex justify-between items-center">
            <h4 className="text-2xl font-bold text-body">Exclusive</h4>
            <ul className="list-none flex gap-x-10 items-center">
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-body hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-body hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-body hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-normal text-body hover:underline"
                >
                  Sign Up
                </a>
              </li>
            </ul>
            <div className="flex gap-x-7 items-center">
              <div className="w-[243px] max-w-[243px] h-[38px] rounded bg-bg-secondary flex gap-x-4 items-center px-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 h-full bg-transparent focus:outline-none text-xs font-normal text-body"
                />
                <FiSearch className="text-xl" />
              </div>
              <button>
                <GoHeart className="text-2xl" />
              </button>
              <button>
                <IoCartOutline className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
