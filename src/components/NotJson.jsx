import React from "react";
import { BiError } from "react-icons/bi";
import { MdDangerous } from "react-icons/md";

const NotJson = () => {
  return (
    <div className="col-span-6 flex flex-col items-center justify-center  h-full">
      <MdDangerous className="text-6xl scale-150 text-red-500 font-bold" />
      <p className="text-4xl mt-6 font-bold font-mono">
      Apologies for the confusion, there seems to be an issue with the structure of the JSON schema. Let's refine it to ensure it accurately represents the data model. By improving the schema, we can ensure better clarity and compatibility with the form data. Let's work together to refine and enhance the schema for a smoother form experience
      </p>
    </div>
  );
};

export default NotJson;
