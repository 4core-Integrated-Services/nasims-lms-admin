import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoCreateOutline } from "react-icons/io5";
import { BsChevronExpand } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { categoriesList } from "../data/categoriesList";
import { difficultyLevel } from "../data/categoriesList";
import create from "zustand";

const useCategoryStore = create((set) => ({
  selected: categoriesList[0],
  subCategory: categoriesList[0].sub.at(0),
  setSelected: (category) =>
    set(() => ({ selected: category, subCategory: category.sub.at(0) })),
  setSubSelected: (sub) => set(() => ({ subCategory: sub })),
}));

export default function CreateCoursePage() {
  const [catTitle, setCatTitle] = useState("");
  const [catSubTitle, setCatSubTitle] = useState("");
  const [coureseThumbnail, setCourseThumbnail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    // if (
    //   selected.title === "-- Select a category --" ||
    //   subCategory.title === "-- Select a sub category --" ||
    //   selectedDifficulty.title === "-- Select a difficulty level --"
    // ) {
    //   return;
    // } else {
    //   console.log(catTitle);
    //   console.log(catSubTitle);
    //   console.log(coureseThumbnail);
    //   console.log(selectedDifficulty.title);
    //   console.log(selected.title);
    //   console.log(subCategory.title);
    //   console.log(e.target);
    // }
  }
  const { selected, setSelected, setSubSelected, subCategory } =
    useCategoryStore((state) => state);

  const [selectedDifficulty, setSelectedDifficulty] = useState(
    difficultyLevel[0]
  );
  return (
    <div className="fixed w-[80%] h-full  top-[4rem] left-[23rem] mr-[5rem] ">
      <main className="h-full pb-16 overflow-y-auto">
        <div className="container grid px-6 mx-auto">
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Create course
          </h2>

          <a className="flex items-center justify-between w-[90%] p-4 mb-8 text-sm font-semibold text-purple-100 bg-emerald-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
            <div className="flex items-center gap-3">
              <IoCreateOutline className="w-5 h-5 text-gray-50" />
              <span>Some Information about the Dashboard</span>
            </div>
            <span className="cursor-pointer">View more &rarr;</span>
          </a>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-8 w-[90%] py-3 mb px-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex gap-6 md:grid-cols-2 xl:grid-cols-4 ">
                <div className="w-[155%]">
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    Course Category
                  </span>
                  <Listbox
                    value={selected}
                    onChange={setSelected}
                    name="courseCategory"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg dark:bg-gray-700 dark:text-gray-200 bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                        <span className="block truncate">{selected.title}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <BsChevronExpand
                            className="h-5 w-5 text-gray-400 dark:text-gray-200"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md dark:bg-gray-500 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {categoriesList.map((category, categoryIdx) => (
                            <Listbox.Option
                              key={categoryIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-gray-400 text-gray-900"
                                    : "text-gray-900 dark:text-gray-50"
                                }`
                              }
                              value={category}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {category.title}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                      <BsCheck2
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="w-[155%]">
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    Course Sub Category
                  </span>
                  <Listbox
                    value={subCategory}
                    onChange={setSubSelected}
                    name="courseSubCategory"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg dark:text-gray-200 dark:bg-gray-700 bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                        <span className="block truncate">
                          {subCategory?.title}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <BsChevronExpand
                            className="h-5 w-5 text-gray-400 dark:text-gray-200"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md dark:bg-gray-500 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {selected.sub.map((sub, subCategoryIdx) => (
                            <Listbox.Option
                              key={subCategoryIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-gray-400 text-gray-900"
                                    : "text-gray-900 dark:text-gray-50"
                                }`
                              }
                              value={sub}
                            >
                              <span
                                className={`block truncate ${
                                  subCategory?.id === sub?.id
                                    ? "font-medium"
                                    : "font-normal"
                                }`}
                              >
                                {sub.title}

                                {subCategory?.id === sub?.id ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                    <BsCheck2
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </span>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <label className="block text-sm mt-8">
                <span className="text-gray-700 dark:text-gray-400">
                  Course Title
                </span>
                <input
                  className="block w-full py-3 px-2 rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Enter your Course title"
                  required
                  value={catTitle}
                  onChange={(e) => {
                    setCatTitle(e.target.value);
                  }}
                  name="courseTitle"
                />
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Course Description
                </span>
                <textarea
                  className="block w-full mt-1 text-sm rounded-md py-2 px-3 invalid:border-red-500  dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  rows="4"
                  placeholder="Enter the course description"
                  required
                  value={catSubTitle}
                  onChange={(e) => {
                    setCatSubTitle(e.target.value);
                  }}
                  name="courseDescription"
                ></textarea>
              </label>
              <div className="flex my-6s  w-full  gap-8 py-2  ">
                <div className="w-[50%] mt-2 ">
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    Course Level
                  </span>
                  <Listbox
                    value={selectedDifficulty}
                    onChange={setSelectedDifficulty}
                    name="courseLevel"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg dark:bg-gray-700 dark:text-gray-200 bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                        <span className="block truncate">
                          {selectedDifficulty.title}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <BsChevronExpand
                            className="h-5 w-5 text-gray-400 dark:text-gray-200"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md dark:bg-gray-500 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {difficultyLevel.map((difficulty, difficultyIdx) => (
                            <Listbox.Option
                              key={difficultyIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-gray-400 text-gray-900"
                                    : "text-gray-900 dark:text-gray-50"
                                }`
                              }
                              value={difficulty}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {difficulty.title}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                      <BsCheck2
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className=" w-[50%] mt-2 ">
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    Course Thumbnail
                  </span>
                  <input
                    className="block w-full text-sm text-gray-900 border file:py-3 file:bg-gray-600 file:outline-none file:border-none file:text-gray-200  border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="file"
                    value={coureseThumbnail}
                    name="coureseThumbnail"
                    onChange={(e) => {
                      setCourseThumbnail(e.target.value);
                    }}
                  ></input>
                  <p
                    className="mt-1 text-xs text-gray-500 dark:text-gray-400"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
              </div>
              <div
                className="flex justify-end mt-3
              "
              >
                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
