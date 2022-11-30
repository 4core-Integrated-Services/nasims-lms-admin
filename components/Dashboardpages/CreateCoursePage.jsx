import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoCreateOutline } from "react-icons/io5";
import { BsChevronExpand } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export default function CreateCoursePage() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="fixed w-[80%] h-full  top-[4rem] left-[23rem] mr-[5rem]">
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

          <div className="flex gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 w-[90%]">
            <div className="w-[155%]">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg dark:bg-gray-600 dark:text-white bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
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
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-gray-400 text-gray-900"
                                : "text-gray-900 dark:text-gray-50"
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
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
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg dark:text-white dark:bg-gray-600 bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
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
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-gray-400 text-gray-900"
                                : "text-gray-900 dark:text-gray-50"
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
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
          </div>
        </div>
      </main>
    </div>
  );
}
