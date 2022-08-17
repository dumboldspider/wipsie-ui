// Generated with util/create-component.js
import React from "react";
import { Slider } from "./Slider";

export default {
  title: "Prototypes/Slider",
};

export const WithBar = () => {
  const [value, setValue] = React.useState(75);

  return (
    <>
      <Slider
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        max={100}
        min={0}
        color="primary"
        shape="rounded"
        size="medium"
        width="200px"
      />
      {value}
    </>
  );
};
