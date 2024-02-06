import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const FormSubmitted = ({ closeSubmittedPopup, data }) => {
  return (
    <div className="fixed overflow-y-hidden top-0 z-50 h-screen w-full bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-4 w-7/12 flex flex-col items-center">
        <div className="flex items-center justify-end w-full">
          <button
            type="button"
            className=""
            onClick={() => closeSubmittedPopup(true)}
          >
            <RiCloseCircleFill className="hover:text-blue-800 text-3xl transition duration-200" />
          </button>
        </div>
        <h1 className="mt-8 font-extrabold text-4xl">🎊Your Data is Here!🎊</h1>
        <p className="text-sm text-gray-500 text-center w-8/12 my-4">
        😀 Congratulations! 🥳You've successfully completed the form creation process using JSON Schema. Your hard work has paid off, and now you can view the generated data response below. This data reflects the inputs provided through the form, capturing the essence of your users' interactions. Well done on achieving this milestone in your project journey!
        </p>
        <div className="my-3 flex items-center w-full justify-center">
          <pre className="p-8 border border-dashed border-gray-400">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>

        <button
          type="button"
          className="border mx-2 bg-gray-800 hover:bg-gray-900 transition duration-200 ease text-white font-bold rounded-lg py-3 px-3 w-4/12 my-4"
          onClick={() => closeSubmittedPopup(true)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FormSubmitted;
