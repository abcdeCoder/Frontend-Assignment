import React from "react";
import Description from "./Description";

const SelectField = ({ data , namefield , register}) => {
  return (
    <div className="my-2 bg-gray-50  rounded-lg p-6 w-full grid grid-cols-12" style={{ order: data.sort }}>
      <h1 className="font-bold col-span-6 flex items-center">
        {data.label} &nbsp;
        {data.description && <Description desc={data.description} />}
      </h1>
      <select
        // name={namefield}
        {...register(namefield)}
        className="col-span-6 bg-white p-2 rounded-lg text-sm"
      >
        {data.validate.options &&
          data.validate.options.map((selectoption, index) => (
            <option
              key={index}
              value={selectoption.value}
              selected={data.validate.defaultValue === selectoption.value}
              required={data.validate.required}
              disabled={data.disable}
            >
              {selectoption.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
