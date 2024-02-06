import React, { useEffect, useState } from "react";
import Input from "./Input";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";

const returnSortedBySort = (fields) => {
  return fields.sort((a, b) => a.sort - b.sort);
}
const IgnoreFields = ({ ignoredFields, namefield, register, watch }) => {
  return (
    <>
      {ignoredFields &&
        returnSortedBySort(ignoredFields).map((field) => {
          return returnSortedBySort(field.subParameters).map((item, index) => {
            if (
              watch(field.conditions[0].jsonKey) === field.conditions[0].value
            ) {
              if (item.uiType == "Select")
                return (
                  <SelectField
                    data={item}
                    register={register}
                    namefield={
                      namefield + "." + field.jsonKey + "." + item.jsonKey
                    }
                    key={index}
                  />
                );
              else if (item.uiType == "Input")
                return (
                  <Input
                    data={item}
                    register={register}
                    namefield={
                      namefield + "." + field.jsonKey + "." + item.jsonKey
                    }
                    key={index}
                  />
                );
              else if (item.uiType == "Switch")
                return (
                  <SwitchField
                    data={item}
                    register={register}
                    namefield={
                      namefield + "." + field.jsonKey + "." + item.jsonKey
                    }
                    key={index}
                  />
                );
              else if (item.uiType == "Radio")
                return (
                  <RadioField
                    data={item}
                    register={register}
                    namefield={
                      namefield + "." + field.jsonKey + "." + item.jsonKey
                    }
                    key={index}
                  />
                );
            }
          });
        })}
    </>
  );
};

export default IgnoreFields;
