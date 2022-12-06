import React, { useState, useRef, useCallback } from "react";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useTabCheckerStore } from "./EditCoursePage";
import { useDropzone } from "react-dropzone";

export default function ModuleForm() {
  const [isFileUploaded, setFileUploaded] = useState("");
  const { isFormFilled, setIsFormFilled } = useTabCheckerStore(
    (state) => state
  );
  const moduleTitle = useRef();
  const moduleFileUpload = useRef();
  function handleUpload(e) {
    setFileUploaded("Files uploaded");
  }
  function handleSubmit(e) {
    e.preventDefault();
    const title = moduleTitle.current.value;
    const fileInput = moduleFileUpload.current.value;

    setIsFormFilled(true);
  }
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="w-[90%] bg-white rounded-lg shadow-md dark:bg-gray-800 mb-8 ">
      <form onSubmit={handleSubmit}>
        <label className="block text-sm mt-8 mb-8 px-16 py-4">
          <span className="text-gray-700 dark:text-gray-400">Module Title</span>
          <input
            className="block  py-3 px-2 w-full rounded-md mt-1 text-sm invalid:border-red-500  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="Enter your Module title"
            required
            autoComplete="off"
            ref={moduleTitle}
          />
        </label>

        <div
          className="flex items-center justify-center w-[90%] mx-auto pb-8"
          {...getRootProps()}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <HiOutlineCloudUpload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Upload module videos (mp4, mkv , avi )
                </p>
              </div>
            )}

            <input id="dropzone-file" className="hidden" {...getInputProps()} />
          </label>
        </div>
        <div className="w-[90%]  mx-auto grid place-items-end ">
          <button className="mb-4 text-white mt-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
