import React from "react";
import { AiOutlineBlock } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { students } from "../data/studentsData";

export default function StudentPage() {
  return (
    <div className="fixed w-full h-full  top-[4rem] left-[16rem]">
      <main className="h-full pb-16 overflow-y-auto">
        <div className="container grid px-6 mx-auto">
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Students
          </h2>

          <a className="flex items-center justify-between w-[90%] p-4 mb-8 text-sm font-semibold text-purple-100 bg-green-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
            <div className="flex items-center gap-3">
              <AiOutlineBlock className="w-5 h-5 text-gray-50" />
              <span>Some Information</span>
            </div>
            <span className="cursor-pointer">View more &rarr;</span>
          </a>

          <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            List of enrolled students
          </h4>

          <div className="w-[90%] mb-8 overflow-hidden rounded-lg shadow-xs">
            <table className="w-full  whitespace-nowrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {students.map((student) => {
                  return (
                    <tr
                      key={student.id}
                      className="text-gray-700 dark:text-gray-400"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <div
                              style={{
                                backgroundImage: `url("${student.avatar}")`,
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
                              {student.name}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                              {student.title}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{student.email}</td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          className={
                            student.status === "Completed"
                              ? "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                              : "px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                          }
                        >
                          {student.status}
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">{student.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex items-center col-span-3">
                Showing 1-10 of {students.length}
              </span>
              <span class="col-span-2"></span>

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
