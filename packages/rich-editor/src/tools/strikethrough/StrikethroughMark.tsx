import React from "react";

export const StrikethroughMark = ({ children, attributes }) => (
  <del {...attributes}>{children}</del>
);
