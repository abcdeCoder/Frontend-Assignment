import React, { useRef, useState } from "react";
import Description from "./Description";

const SwitchField = ({ data, namefield, register }) => {
  const checkboxRef = useRef(null);
  const { ref, ...rest } = register(namefield);
  const [animateToggle, setAnimateToggle] = useState(false);

  const handleToggle = () => {
    if (checkboxRef.current.checked) {
      checkboxRef.current.checked = false;
      setAnimateToggle(false);
    } else {
      checkboxRef.current.checked = true;
      setAnimateToggle(true);
    }
  };
  return (
    <div className="my-2 bg-gray-50  rounded-lg p-6 w-full flex items-center" style={{ order: data.sort }}>
      <h1 className="col-span-3 font-bold flex items-center">
        {data.label} &nbsp;
        {data.description && <Description desc={data.description} />}
      </h1>

      <div className=" ml-4">
        <input
          type="checkbox"
          disabled={data.disable}
          ref={(e) => {
            ref(e);
            checkboxRef.current = e;
          }}
          name={namefield}
          //   {...register(namefield)}
          {...rest}
        //   className="h-0 w-0 hidden"
        //   defaultChecked={data.validate.defaultValue}
        />
        {/* <div
          className={`relative flex itms-center justify-between cursor-pointer w-16 h-8  rounded-2xl ${
            animateToggle ? "bg-orange-600" : "bg-gray-200"
          }`}
          onClick={handleToggle}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 transition duration-200 ease-in-out rounded-full bg-white shadow-lg ${
              animateToggle ? "translate-x-8" : ""
            } `}
          ></span>
        </div> */}
      </div>
    </div>
  );
};

export default SwitchField;
