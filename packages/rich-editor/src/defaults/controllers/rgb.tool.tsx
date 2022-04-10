import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const rgbTool: ToolbarItemProps = {
  id: "rgb",
  command: "insertHTML",
  format: "button",
  value: () => {
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    const selText = range.toString();
    const element = document.createElement("span");
    element.classList.add("wuire-rgb");
    element.innerHTML = selText;

    return element.outerHTML;
  },
  icon: <b>rgb</b>,
};
