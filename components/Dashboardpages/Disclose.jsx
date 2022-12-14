import React from "react";
import { Disclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";

export default function Disclose() {
  return (
    <div className="w-[full] px64 pt-4 overflow-hidden">
      <div className="mx-auto w-[90%] rounded-md bg-white dark:bg-gray-700 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg dark:text-white dark:bg-gray-600 bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <FiChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500 dark:text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-100">
                {` If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.`}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <FiChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
