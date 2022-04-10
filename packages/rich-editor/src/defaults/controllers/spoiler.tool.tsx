import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const spoilerTool: ToolbarItemProps = {
  id: "spoiler",
  command: "insertHTML",
  format: "button",
  value: () => {
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    const selText = range.toString();
    const element = document.createElement("span");
    element.classList.add("wuire-spoiler");
    element.innerHTML = selText;
    element.setAttribute(
      "onclick",
      "this.classList.toggle('wuire-spoiler-open');"
    );

    return element.outerHTML;
  },
  icon: <b>spoiler</b>,
};
