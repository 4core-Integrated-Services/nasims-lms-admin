import React, { useState } from "react";
import Link from "next/link";
import { usePage, sidebarMenu } from "../dashboardPageBody";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../modal/modal";

export default function Sidebar() {
  const pageMenu = usePage((state) => state);
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className="fixed z-20 top-16 left-0 h-screen w-64 bg-white shadow-sm dark:bg-slate-800 md:block flex-shrink-0">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <ul className="mt-6">
          {sidebarMenu.slice(0, 4).map((menu, index) => {
            return (
              <li key={index} className="relative px-6 py-4">
                <span
                  className={
                    pageMenu.pageSelected.link === menu.link
                      ? "absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg"
                      : "hidden"
                  }
                  aria-hidden="true"
                ></span>
                <div className="flex gap-4 items-center">
                  {menu.icon}
                  <Link href={`/page${menu.link}`} key={menu.link} passHref>
                    <p
                      className="dark:text-white text-gray-600 capitalize text-1xl font-semibold"
                      onClick={(e) => {
                        e.preventDefault();
                        pageMenu.onMenuClick(menu);
                      }}
                    >
                      {menu.name}
                    </p>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="px-6 my-6">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);

              // pageMenu.onMenuClick(sidebarMenu[4]);
            }}
          >
            Create Course
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-600 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 dark:border-slate-500 rounded-t">
                  <h3 className="text-3xl font-semibold dark:text-white">
                    Disclaimer
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      pageMenu.onMenuClick(sidebarMenu[0]);
                    }}
                  >
                    <AiOutlineClose className="text-black dark:text-white" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 dark:text-slate-100 text-lg leading-relaxed">
                    We reserve the right to remove any and all content that
                    breach our terms of argreement. Incase of any mishap or
                    breach of argreement, you would be subject to a lifetime ban
                    from our platform and all your content deletedfrom our
                    database also reserve the right to amend these terms and
                    conditions and it's linking policy at any time. By clicking
                    accept, you agree to be bound to and follow these linking
                    terms and conditions.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid dark:border-slate-500 border-slate-200 rounded-b">
                  <button
                    className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      pageMenu.onMenuClick(sidebarMenu[0]);
                    }}
                  >
                    Decline
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      pageMenu.onMenuClick(sidebarMenu[4]);
                    }}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </aside>
  );
}
