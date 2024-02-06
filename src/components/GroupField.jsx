import React, { useEffect, useState } from "react";
import RadioField from "./RadioField";
import Input from "./Input";
import SelectField from "./SelectField";
import Description from "./Description";
import SwitchField from "./SwitchField";
import IgnoreFields from "./IgnoreFields";

const GroupField = ({ data, parentJsonKey, register, watch, getValues }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [ignoredFields, seteIgnoredFields] = useState();
  const returnSortedBySort = (fields) => {
    return fields.sort((a, b) => a.sort - b.sort);
  }
  useEffect(() => {
    var fields = [];
    data.subParameters.forEach((element) => {
      if (element.uiType == "Ignore") fields.push(element);
    });
    seteIgnoredFields(fields);
  }, []);

  return (
    <div className="my-2 bg-gray-50 rounded-lg p-6 w-full">
      <h1 className="font-bold w-full flex items-center">
        {data.label} &nbsp;
        {data.description && <Description desc={data.description} />}
      </h1>
      <div className="bg-gray-300 w-full my-3" style={{ height: "1px" }}></div>
      {data.subParameters &&
        returnSortedBySort(data.subParameters).map((item, index) => {
          if (item.validate.required) {
            if (item.uiType == "Input")
              return (
                <Input
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Radio")
              return (
                <RadioField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Select")
              return (
                <SelectField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Group")
              return (
                <GroupField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Switch")
              return (
                <SwitchField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
          }
        })}

      <IgnoreFields
        register={register}
        namefield={parentJsonKey}
        parentJsonKey={parentJsonKey}
        ignoredFields={ignoredFields}
        watch={watch}
        getValues={getValues}
      />

      {showAdvanced &&
        data.subParameters &&
        returnSortedBySort(data.subParameters).map((item, index) => {
          if (!item.validate.required) {
            if (item.uiType == "Input")
              return (
                <Input
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Radio")
              return (
                <RadioField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Select")
              return (
                <SelectField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Group")
              return (
                <GroupField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
            else if (item.uiType == "Switch")
              return (
                <SwitchField
                  key={index}
                  data={item}
                  namefield={
                    parentJsonKey
                      ? parentJsonKey + "." + item.jsonKey
                      : item.jsonKey
                  }
                  register={register}
                />
              );
          }
        })}

      <div className="mt-4 mb-2 flex items-center">
        <input
          type="checkbox"
          value={showAdvanced}
          onChange={(e) => setShowAdvanced(!showAdvanced)}
        />
       <h1 className="ml-2">
  {showAdvanced ? "Hide advanced field" : "Show advanced field"}
</h1>
      </div>
    </div>
  );
};

export default GroupField;
