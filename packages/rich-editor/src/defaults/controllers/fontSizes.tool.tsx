import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const fontSizesTool: ToolbarItemProps = {
  id: "fontSizes",
  command: "fontSize",
  format: "select",
  value: {
    "1 (8pt)": "Mini",
    "2 (10pt)": "Small",
    "3 (12pt)": "Normal",
    "4 (14pt)": "Large",
    "5 (18pt)": "Huge",
    "6 (24pt)": "Giant",
    "7 (36pt)": "Colossal",
  },
  icon: <b>S</b>,
};
