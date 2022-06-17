import React, { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";

import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "../public/assets/logo.png";

import MenuItem from "./MenuItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10 text-white">
      {/* Left side */}
      <div className="flex grow items-center justify-start">
        <Link href="/">
          <a className="flex">
            <Image
              src={Logo}
              alt="/"
              width="36"
              height="36"
              className="cursor-pointer z-10"
            />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem title={"general"} enable={false} />
                  <MenuItem
                    title={"about"}
                    enable={true}
                    reference={"https://www.twitch.tv/p/en/about/"}
                  />
                  <MenuItem
                    title={"blog"}
                    enable={true}
                    reference={"https://blog.twitch.tv/en/"}
                  />
                  <MenuItem
                    title={"developers"}
                    enable={true}
                    reference={"https://dev.twitch.tv"}
                  />
                  <MenuItem
                    title={"careers"}
                    enable={true}
                    reference={"https://www.twitch.tv/jobs/en/"}
                  />
                  <MenuItem
                    title={"partners"}
                    enable={true}
                    reference={"https://www.twitch.tv/p/en/partners/"}
                  />

                  <MenuItem
                    title={"help and legal information"}
                    enable={false}
                  />
                  <MenuItem
                    title={"help"}
                    enable={true}
                    reference={"https://help.twitch.tv/s/"}
                  />

                  <MenuItem
                    title={"Accessibility Statement"}
                    enable={true}
                    reference={
                      "https://www.twitch.tv/p/en/legal/accessibility/"
                    }
                  />

                  <MenuItem
                    title={"Community Guidelines"}
                    enable={true}
                    reference={
                      "https://safety.twitch.tv/s/article/Community-Guidelines?language=en_US"
                    }
                  />

                  <MenuItem
                    title={"Ad Choices"}
                    enable={true}
                    reference={"https://www.twitch.tv/p/en/legal/ad-choices/"}
                  />

                  <MenuItem
                    title={"cookies notice"}
                    enable={true}
                    reference={
                      "https://www.twitch.tv/p/en/legal/cookie-notice/"
                    }
                  />
                  <MenuItem
                    title={"privacy notice"}
                    enable={true}
                    reference={
                      "https://www.twitch.tv/p/en/legal/privacy-notice/"
                    }
                  />

                  <MenuItem
                    title={"Safety Center"}
                    enable={true}
                    reference={"https://safety.twitch.tv/s/?language=en_US"}
                  />
                  <MenuItem
                    title={"security"}
                    enable={true}
                    reference={"https://www.twitch.tv/p/en/security/"}
                  />
                  <MenuItem
                    title={"terms"}
                    enable={true}
                    reference={
                      "https://www.twitch.tv/p/en/legal/terms-of-service/"
                    }
                  />
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle side */}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-[rgb(59,59,59)] text-white flex justify-between items-center max-w-[400px] w-full p-2 rounded-tl-xl rounded-bl-xl opacity-200">
          <div>
            <input
              type="text"
              className="bg-transparent border-none text-white focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="bg-[#3b3b44] h-10 w-10 text-white flex justify-between items-center max-w-[40px] mx-[1px] p-2 rounded-tr-xl rounded-br-xl opacity-200">
          <BsSearch />
        </div>
      </div>
      {/* Right side */}
      <div className=" flex grow items-center justify-end">
        <Link href="/">
          <button className=" hidden lg:flex px-4 py-[6px] rounded-lg font-bold bg-[rgb(59,59,59)] mr-2 w-[25%] items-center justify-center">
            Log-In
          </button>
        </Link>
        <Link href="/">
          <button className="hidden lg:flex px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2 w-[25%]">
            Register
          </button>
        </Link>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsPerson size={25} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="  origin-top-right absolute right-[5%] mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
