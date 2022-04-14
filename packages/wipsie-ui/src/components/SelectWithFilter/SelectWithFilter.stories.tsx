// Generated with util/create-component.js
import React from "react";
import { SelectWithFilter } from "./SelectWithFilter";
import { SelectItemsType } from "./SelectWithFilter.types";

export default {
  title: "Prototypes/SelectWithFilter",
};

const list: SelectItemsType[] = [
  { id: "1", name: "option 1" },
  { id: "2", name: "option 2" },
  { id: "3", name: "option 3" },
  { id: "4", name: "option 4" },
];

export const Default = () => {
  const [value, setValue] = React.useState<SelectItemsType | null>(null);

  return (
    <SelectWithFilter
      list={list}
      selected={value?.id}
      fullWidth
      // color="primary"
      // variant="outlined"
      onChange={(e) => {
        setValue(e);
      }}
    />
  );
};
