import { content } from "../Content";
import { useState } from "react";
import close from '../assets/images/close.svg'
import menu from '../assets/images/menu.svg'

import logo from "../assets/images/logo.png"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { nav } = content
  const navs = nav;
  return (
    <nav className="w-full z-10 flex justify-between items-center absolute left-0 top-0 bg-transparent">
      {/* Logo */}
      <a href="#home">
        <img
          src={logo}
          alt="Sudhanva"
          className="w-[150px] bg-transparent"
        />
      </a>

      {/* List of links */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navs.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px]
            hover:text-[#5b86cd] sm:mr-6 text-dark_primary`}
          >
            <a href={`${nav.link}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* only for mobile devices, created separately */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        {/* shows toggle icon based on its state */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          // correct way to change state using the prev
          // version of the same state using a callback function
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2
        min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navs.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                ${index === navs.length - 1 ? "mb-0" : "mb-4"}
                text-white`}
              >
                <a href={`${nav.link}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;