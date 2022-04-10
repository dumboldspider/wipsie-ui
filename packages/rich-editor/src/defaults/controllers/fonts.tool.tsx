import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const fontsTool: ToolbarItemProps = {
  id: "fonts",
  command: "fontName",
  format: "select",
  value: {
    "Arial, Helvetica, sans-serif": "Arial",
    "Arial Black, Gadget, sans-serif": "Arial Black",
    "Comic Sans MS, cursive": "Comic Sans MS",
    "Courier New, monospace": "Courier New",
    "Georgia, serif": "Georgia",
    "Impact, Charcoal, sans-serif": "Impact",
    "Lucida Console, Monaco, monospace": "Lucida Console",
    "Lucida Sans Unicode, Lucida Grande, sans-serif": "Lucida Sans Unicode",
    "Palatino Linotype, Book Antiqua, Palatino, serif": "Palatino Linotype",
    "Tahoma, Geneva, sans-serif": "Tahoma",
    "Times New Roman, Times, serif": "Times New Roman",
    "Trebuchet MS, Helvetica, sans-serif": "Trebuchet MS",
    "Verdana, Geneva, sans-serif": "Verdana",
  },
  icon: <b>Font</b>,
};
