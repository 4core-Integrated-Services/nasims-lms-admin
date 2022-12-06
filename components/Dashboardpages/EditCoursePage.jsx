import React, { useState, Fragment } from "react";
import { coursesData } from "../data/coursesData";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import create from "zustand";
import Disclose from "./Disclose";
// import ChartComponent from "./ChartsComponent";
import QuizForm from "./QuizForm";
import ModuleForm from "./ModuleForm";

export const useTabCheckerStore = create((set) => ({
  isFormFilled: false,
  setIsFormFilled: (formChecker) => set(() => ({ isFormFilled: formChecker })),
}));

export default function EditCoursePage({ courseId }) {
  const course = coursesData.find((data) => data.id == courseId);
  const { isFormFilled, setIsFormFilled } = useTabCheckerStore(
    (state) => state
  );
  const correctOptions = [
    { option: "--Select correct option--" },
    { option: "A" },
    { option: "B" },
    { option: "C" },
    { option: "D" },
  ];
  // const [isFormFilled, setIsFormFilled] = useState(false);

  const [correctOption, setCorrectOption] = useState(correctOptions[0]);
  return (
    <div className="fixed  h-full top-[4rem] w-full left-[16rem] grid place-items-center">
      <div className="  w-[70%] h-full mr-[15rem] ">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Edit {course?.title}
        </h2>

        {/* topbar thingy */}
        <a className="flex items-center justify-between w-[90%] p-4 mb-8 text-sm font-semibold text-purple-100 bg-indigo-800 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
          <div className="flex items-center gap-3">
            <BsSpeedometer2 className="w-5 h-5 text-gray-50" />
            <span>Some Information about editing sections</span>
          </div>
          <span className="cursor-pointer">View more &rarr;</span>
        </a>

        {isFormFilled ? <QuizForm /> : <ModuleForm />}
      </div>
    </div>
  );
}
// <div className="fixed w-[70vw] h-full  top-[4rem] left-[25.5rem] container">
//   <main className="h-full pb-16 overflow-y-auto">
//     <div className="container grid px-6 mx-auto">
//       <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
//         Edit {course?.title}
//       </h2>

//       <div className="mb-8 w-[100%] py-3 mb px-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
//         <div className="flex items-start justify-start gap-8  ">
//           <div className="w-[60%] ">
//             <form>
//               <label className="block text-sm mt-8 mb-8 ">
//                 <span className="text-gray-700 dark:text-gray-400">
//                   Module Title
//                 </span>
//                 <input
//                   className="block  py-3 px-2 w-full rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
//                   placeholder="Enter your Module title"
//                   required
//                   name="courseTitle"
//                 />
//               </label>

//               <label
//                 htmlFor="dropzone-file"
//                 className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 "
//               >
//                 <div className="flex  flex-col items-center justify-center pt-5 pb-6">
//                   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                     {" "}
//                     <span className="font-semibold">Click to upload </span>
//                     Or drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     Upload module videos ( mp4,mkv,avi )
//                   </p>
//                 </div>
//                 <input
//                   type="file"
//                   className="hidden"
//                   id="dropzone-file"
//                   multiple
//                 />
//               </label>
//               <div className="flex justify-start">
//                 <button
//                   className="text-white mt-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//                   type="submit"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="w-[40%]">
//             <form>
//               <label className="block text-sm mt-8">
//                 <span className="text-gray-700 dark:text-gray-400">
//                   Quiz Question
//                 </span>
//                 <input
//                   className="block w-full py-3 px-2 rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
//                   placeholder="Enter your Quiz Question"
//                   required
//                   name="quizQuestion"
//                 />
//               </label>
//               <label className="block text-sm mt-8">
//                 <input
//                   className="block w-full py-3 px-2 rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
//                   placeholder="Enter your Option A"
//                   required
//                   name="optionA"
//                 />
//               </label>
//               <label className="block text-sm mt-8">
//                 <input
//                   className="block w-full py-3 px-2 rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
//                   placeholder="Enter your Option B"
//                   required
//                   name="optionB"
//                 />
//               </label>
//               <label className="block text-sm mt-8">
//                 <input
//                   className="block w-full py-3 px-2 rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
//                   placeholder="Enter your Option C"
//                   required
//                   name="optionC"
//                 />
//               </label>
//               <label className="block text-sm mt-8">
//                 <input
//                   className="block w-full py-3 px-2 rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
//                   placeholder="Enter your Option D"
//                   required
//                   name="optionD"
//                 />
//               </label>
//               <div className="relative mt-1 ">
//                 <span className="text-gray-700 dark:text-gray-400 text-sm">
//                   Correct option
//                 </span>
//                 <Listbox
//                   value={correctOption}
//                   onChange={setCorrectOption}
//                   name="correctOption"
//                 >
//                   <div className="relative mt-1">
//                     <Listbox.Button className="relative w-full cursor-default rounded-lg dark:bg-gray-700 dark:text-gray-200 bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
//                       <span className="block truncate">
//                         {correctOption.option}
//                       </span>
//                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <BsChevronExpand
//                           className="h-5 w-5 text-gray-400 dark:text-gray-200"
//                           aria-hidden="true"
//                         />
//                       </span>
//                     </Listbox.Button>
//                     <Transition
//                       as={Fragment}
//                       leave="transition ease-in duration-100"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0"
//                     >
//                       <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md dark:bg-gray-500 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                         {correctOptions.map((options, optionsIdx) => (
//                           <Listbox.Option
//                             key={optionsIdx}
//                             className={({ active }) =>
//                               `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                                 active
//                                   ? "bg-gray-400 text-gray-900"
//                                   : "text-gray-900 dark:text-gray-50"
//                               }`
//                             }
//                             value={options}
//                           >
//                             {({ selected }) => (
//                               <>
//                                 <span
//                                   className={`block truncate ${
//                                     selected ? "font-medium" : "font-normal"
//                                   }`}
//                                 >
//                                   {options.option}
//                                 </span>
//                                 {selected ? (
//                                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
//                                     <BsCheck2
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   </span>
//                                 ) : null}
//                               </>
//                             )}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Transition>
//                   </div>
//                 </Listbox>
//               </div>{" "}
//               <div className="flex justify-end">
//                 <button
//                   className="text-white mt-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//                   type="submit"
//                 >
//                   Create Quiz
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 mb-8 w-full">
//         <Disclose />
//       </div>
//     </div>
//   </main>
// </div>
