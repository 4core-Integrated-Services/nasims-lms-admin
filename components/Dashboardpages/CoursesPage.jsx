import React from "react";
import Link from "next/link";
import ChartComponent from "./ChartsComponent";
import { AiOutlineBlock } from "react-icons/ai";
import { coursesData } from "../data/coursesData";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function CoursesPage() {
  return (
    <div className="fixed w-[100vw] h-full  top-[4rem] left-[25.5rem] container">
      <main className="h-full pb-16 overflow-y-auto">
        <div className="container grid px-6 mx-auto">
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Courses
          </h2>

          <a className="flex items-center justify-between w-[90%] p-4 mb-8 text-sm font-semibold text-purple-100 bg-green-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
            <div className="flex items-center gap-3">
              <AiOutlineBlock className="w-5 h-5 text-gray-50" />
              <span>Some Information</span>
            </div>
            <span className="cursor-pointer">View more &rarr;</span>
          </a>

          <ChartComponent />

          <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            List of courses created
          </h4>

          <div className="w-[68vw] mb-8 overflow-hidden rounded-lg shadow-xs container mx-2">
            <table className="w-full  whitespace-nowrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Lectures</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {coursesData.map((data) => {
                  return (
                    <tr
                      key={data.id}
                      className="text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <div
                              style={{
                                backgroundImage: `url("${data.thumbnail}")`,
                              }}
                              className="bg-cover bg-top object-cover object-top w-full h-full rounded-full"
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold capitalize">
                              {data.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                              {data.title}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{data.lectures}</td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          // className={
                          //   data.level === "Beginner"
                          //     ? "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                          //     : "px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                          // }
                          className={`${
                            data.level === "Beginner"
                              ? "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                              : ""
                          }
                          ${
                            data.level === "Intermediate"
                              ? "px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:bg-orange-700 dark:text-orange-100"
                              : ""
                          }
                          ${
                            data.level === "Expert"
                              ? "px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100"
                              : ""
                          }`}
                        >
                          {data.level}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{data.date}</td>

                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-4 text-sm">
                          <Link href={`/course-edit/${data.id}`} passHref>
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Edit"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                              </svg>
                            </button>
                          </Link>

                          <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex items-center col-span-3">
                Showing 1-10 of {coursesData.length}
              </span>
              <span className="col-span-2"></span>

              {/* pagination */}
              <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                  <ul className="inline-flex items-center">
                    <li>
                      <button
                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]"
                        aria-label="Previous"
                      >
                        {/* svg */}
                        <BsChevronLeft />
                      </button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]">
                        1
                      </button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]">
                        2
                      </button>
                    </li>
                    <li>
                      <button className="px-3 py-1 text-white transition-colors duration-150 bg-green-600 border border-r-0 border-green-600 rounded-md focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]">
                        3
                      </button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]">
                        4
                      </button>
                    </li>
                    <li>
                      <span className="px-3 py-1">...</span>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]">
                        8
                      </button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]">
                        9
                      </button>
                    </li>
                    <li>
                      <button
                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:border-green-600 focus:border-solid focus:border-[1px]"
                        aria-label="Next"
                      >
                        {/* svg */}
                        <BsChevronRight />
                      </button>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
