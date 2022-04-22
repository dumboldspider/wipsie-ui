// Generated with util/create-component.js
import React, { useState } from "react";
import { TextEditable } from "./TextEditable";

import useEditing from "./useEditing";

export default {
  title: "Prototypes/TextEditable",
};

export const WithBar = () => {
  const { isEditing, setIsEditing } = useEditing();
  const [value, setValue] = useState("teste");

  return (
    <>
      {/* <Button backgroundColor={isEditing ? "primary" : "basic"}>{value}</Button> */}
      <TextEditable
        content={value}
        setStore={setValue}
        isFocus={isEditing}
        // index={index}
        setParent={setIsEditing}
      />
    </>
  );
};
