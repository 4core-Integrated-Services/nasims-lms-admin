import React, { useState } from "react";
import Link from "next/link";
import { BsDoorClosed, BsSearch } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";

const notificationitems = [
  {
    count: 13,
    text: "Messages",
    link: "/messages",
  },
  {
    count: 6,
    text: "notifications",
    link: "/notifications",
  },
  {
    count: 2,
    text: "Alert",
    link: "/alert",
  },
];

const profileItems = [
  {
    icon: <BsPerson className="text-gray-100 w-6 h-6" />,
    text: "Profile",
    link: "/profile",
  },
  {
    icon: <BsGearFill className="text-gray-100 w-6 h-6" />,
    text: "Settings",
    link: "/settings",
  },
  {
    icon: <RiLogoutBoxLine className="text-gray-100 w-6 h-6" />,
    text: "Logout",
    link: "/logout",
  },
];

export default function Topbar() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  function searchFeature() {
    console.log("searchFeature");
  }

  function toggleNotificationsMenu() {
    if (notificationOpen == false) {
      setNotificationOpen(true);
      setProfileOpen(false);
      console.log(notificationOpen);
    } else {
      setNotificationOpen(false);
      console.log(notificationOpen);
    }
  }
  function toggleProfileMenu() {
    if (profileOpen == false) {
      setProfileOpen(true);
      setNotificationOpen(false);
      console.log(profileOpen);
    } else {
      setProfileOpen(false);
      console.log(profileOpen);
    }
  }

  function closeProfileMenu() {
    setProfileOpen(false);
  }

  function closeNotificationMenu() {
    setNotificationOpen(false);
  }

  return (
    <>
      <nav className="fixed top-0 justify-around flex  bg-white w-screen h-[4rem] shadow-md z-10 dark:bg-slate-800 items-center gap-[-15rem]">
        <div className=" absolute left-16 mt-0 w-[8rem] h-[100%] z-50">
          <Link href="/">
            <div
              className="w-[90%] h-[100%] bg-cover bg-top object-cover"
              style={{
                backgroundImage: `url("assets/images/logo.png")`,
              }}
            ></div>
          </Link>
        </div>

        <div className="w-[30%] h-[100%] mt-5 relative top-[50%] left-[35%] translate-x-[-50%] translate-y-[-50%]">
          <input
            type="text"
            className="  w-full h-[65%] bg-gray-100 focus:bg-gray-100  rounded-md pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600bg-gray-100 border-0 dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 dark:focus:bg-gray-600 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            placeholder="Search for Anything..."
            onChange={searchFeature}
          />
          <BsSearch className="absolute top-[.8rem] left-2 text-gray-100" />
          <button className="hidden" type="submit"></button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="cursor-pointer">
            <BsSunFill className="text-gray-600 w-5 h-5" />
          </div>

          <div
            className="cursor-pointer relative"
            onClick={toggleNotificationsMenu}
          >
            <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
            <BsBellFill className="text-gray-600 w-5 h-5  " />
            <div className={notificationOpen ? "block" : "hidden"}>
              <div className="absolute -bottom-[8.5rem] -left-32 bg-slate-600 shadow-md rounded-md transition-all ease-in duration-[.3s] w-[10rem] h-32 px-1 py-2 ">
                <ul className="flex flex-col items-start justify-start">
                  {notificationitems.map((items, index) => {
                    return (
                      <li
                        key={index}
                        className="flex w-full rounded-md items-center hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 py-1"
                      >
                        <a className="flex items-center justify-between w-[100%] text-gray-100 px-2 py-1 text-sm font-semibold transition-colors duration-150 capitalize ">
                          {items.text}
                        </a>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-[.6rem] font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                          {items.count}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div
            className="relative h-10 w-10 cursor-pointer rounded-full"
            onClick={toggleProfileMenu}
          >
            <div
              style={{
                backgroundImage: `url("/assets/images/user.jpg")`,
              }}
              className="bg-cover bg-top object-cover w-full h-full rounded-full"
            ></div>
            <div className={profileOpen ? "block" : "hidden"}>
              <div className="absolute -bottom-[8.5rem] -left-32 bg-gray-600 shadow-md rounded-md transition-all ease-in duration-[.3s] w-[10rem] h-32 px-1 py-2 ">
                <ul className="flex flex-col items-start justify-start ">
                  {profileItems.map((items, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center w-full rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 py-1 "
                      >
                        {items.icon}
                        <a className="flex items-center justify-between w-[100%] text-gray-100 px-2 py-1 text-sm font-semibold transition-colors duration-150 ">
                          {items.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
