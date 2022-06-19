import React, { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";

import {
  BsPerson,
  BsSearch,
  BsThreeDotsVertical,
  BsSun,
  BsMoon,
  BsChat,
  BsMessenger,
} from "react-icons/bs";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGlobal,
  AiOutlineSetting,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlineNotification,
  AiOutlineInbox,
  AiOutlineUserDelete,
} from "react-icons/ai";

import { BiMessageAlt } from "react-icons/bi";

import { useSession, signIn, signOut } from "next-auth/react";

import Logo from "../public/assets/logo.png";

import MenuItem from "./MenuItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { data: session } = useSession();
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = () => {
    signOut();
  };

  /* Right container styles */

  const itemsStyle = "hover:bg-gray-500 flex items-center w-full px-3";
  const signinItemsStyle = itemsStyle.concat("mx-2 truncate text-sm my-4");

  const logButtonStyle =
    "hidden lg:flex px-4 py-[6px] rounded-lg font-bold mr-2 w-[25%] items-center justify-center text-sm";

  const rightSideContainer = " flex grow items-center justify-end";

  /* Middle container styles */
  const middleSideContainerGeneral =
    "text-white flex justify-between items-center max-w-[400px]  opacity-200 p-2 mx-[1px]";

  const middleSideContainerSearchBar = middleSideContainerGeneral.concat(
    " w-full rounded-l-xl  "
  );
  const middleSideContainerSearchIcon = middleSideContainerGeneral.concat(
    " h-10 w-10  rounded-tr-xl rounded-br-xl  "
  );

  const middleSideMainContainer =
    "hidden md:flex grow-[2] items-center justify-center";

  const middleSideInput =
    "bg-transparent w-full border-none text-white focus:outline-none";

  /* Mobile Menu styles */
  const mobileMenuGeneral =
    "md:hidden fixed left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300";
  const mobileMenuActive = mobileMenuGeneral.concat(" top-0 ");
  const mobileMenuInactive = mobileMenuGeneral.concat(" top-[-100%] ");
  const mobileMenuStyle = "p-4 text-3xl font-bold";

  /* Menu Items */

  const menuItemsGeneral =
    " origin-top-right absolute  mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none";

  const menuItemsIcon =
    " origin-top-right absolute top-8 right-[1%] mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none";

  const menuItemsDots = menuItemsGeneral.concat("left-0 top-8");

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
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={menuItemsDots}>
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
      <div className={middleSideMainContainer}>
        <div
          className={middleSideContainerSearchBar}
          style={{ backgroundColor: "rgb(59,59,59)" }}
        >
          <div className="w-full ">
            <input
              type="text"
              className={middleSideInput}
              placeholder="Search"
            />
          </div>
        </div>
        <div
          className={middleSideContainerSearchIcon}
          style={{ backgroundColor: "#3b3b44" }}
        >
          <BsSearch />
        </div>
      </div>
      {/* Right side */}
      {session ? (
        <div className={rightSideContainer}>
          <AiOutlineInbox size={22} className="mx-4" />
          <BiMessageAlt size={22} className="mx-4" />
          <Menu as="div" className="relative text-left mx-4">
            <div className="flex">
              <Menu.Button>
                <Image
                  src={session.user.image}
                  width="35"
                  height="35"
                  className="rounded-full"
                  alt="/"
                />
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
              <Menu.Items className={menuItemsIcon}>
                <div className="py-1 flex items-center justify-left flex-col cursor-pointer">
                  <div className={signinItemsStyle}>
                    <Image
                      src={session.user.image}
                      width="35"
                      height="35"
                      className="rounded-full"
                      alt="/"
                    />
                    <div className="mx-4">
                      <p className="pr-4 cursor-pointer">{session.user.name}</p>
                    </div>
                  </div>
                  <div className={itemsStyle}>
                    <AiOutlineUserDelete size={22} />
                    <MenuItem title={"Channel"} enable={true} />
                  </div>
                  <div className={itemsStyle}>
                    <AiOutlineSetting size={22} />
                    <MenuItem title={"Setings"} enable={true} />
                  </div>
                  <div className={itemsStyle}>
                    <AiOutlineGlobal size={22} />
                    <MenuItem title={"Language"} enable={true} />
                  </div>
                  <div className={itemsStyle} onClick={handleDarkMode}>
                    {darkMode ? <BsMoon size={22} /> : <BsSun size={22} />}

                    <MenuItem title={"Dark Mode"} enable={true} />
                  </div>

                  <div className={itemsStyle} onClick={handleSignOut}>
                    <AiOutlineLogout size={22} />
                    <MenuItem title={"Logout"} enable={true} />
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className={rightSideContainer}>
          <Link href="/account">
            <button
              className={logButtonStyle}
              style={{ backgroundColor: "rgb(59,59,59)" }}
            >
              Log-In
            </button>
          </Link>
          <Link href="/account">
            <button
              className={logButtonStyle}
              style={{ backgroundColor: "#9147ff" }}
            >
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
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className={menuItemsIcon}>
                  <div className="py-1 flex items-center justify-left flex-col cursor-pointer">
                    <div className={itemsStyle}>
                      <AiOutlineSetting size={22} />
                      <MenuItem title={"Setings"} enable={true} />
                    </div>
                    <div className={itemsStyle}>
                      <AiOutlineGlobal size={22} />
                      <MenuItem title={"Language"} enable={true} />
                    </div>
                    <div className={itemsStyle} onClick={handleDarkMode}>
                      {darkMode ? <BsMoon size={22} /> : <BsSun size={22} />}

                      <MenuItem title={"Dark Mode"} enable={true} />
                    </div>
                    <Link href="/account">
                      <div className={itemsStyle}>
                        <AiOutlineLogin size={22} />
                        <MenuItem title={"Log In"} enable={true} />
                      </div>
                    </Link>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      )}

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile menu */}
      <div className={nav ? mobileMenuActive : mobileMenuInactive}>
        <ul className="text-center">
          <li onClick={() => setNav(false)} className={mobileMenuStyle}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className={mobileMenuStyle}>
            <Link href="/#live">Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className={mobileMenuStyle}>
            <Link href="/#Category">Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className={mobileMenuStyle}>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
