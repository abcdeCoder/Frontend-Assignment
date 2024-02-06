import React from "react";
import Description from "./Description";

const RadioField = ({ data , namefield, register }) => {
  return (
    <div className="bg-gray-50 grid grid-cols-12 gap-4 my-4" style={{ order: data.sort }}>
      {data.validate.options &&
        data.validate.options.map((radiooptions, index) => (
          <div
            key={index}
            className="col-span-6 bg-white rounded-lg p-3 flex items-center justify-between"
          >
            <label>
              {radiooptions.label} &nbsp;
              {data.description && (
                <Description desc={radiooptions.description} />
              )}
            </label>
            <input
              type="radio"
            //   name={namefield}
            {...register(namefield)}
              value={radiooptions.value}
              defaultChecked={radiooptions.value == data.validate.defaultValue}
              required={data.validate.required}
              disabled={data.disable}
            />
          </div>
        ))}
    </div>
  );
};

export default RadioField;
