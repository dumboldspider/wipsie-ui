import { useTheme } from "@wipsie/ui";
import React from "react";
import { useReadOnly } from "slate-react";

// Spoiler plugin
export class SpoilerPlugin {
  public leafType = "spoiler";

  public renderLeaf = ({ children, attributes }) => {
    const [isHidden, setIsHidden] = React.useState(true);
    const theme = useTheme();
    const readOnly = useReadOnly();

    return (
      <span
        style={{
          backgroundColor: theme.palette.text,
          color:
            readOnly && isHidden
              ? theme.palette.text
              : theme.palette.background,
          cursor: readOnly ? "pointer" : "auto",
          padding: "3px 3px 2px",
          margin: "1px 1px",
          verticalAlign: "baseline",
          display: "inline-block",
          borderRadius: "5px",
          fontSize: "0.9em",
          transition: "all 0.2s ease-in-out",
          userSelect: readOnly ? "none" : "auto",
        }}
        onClick={() => readOnly && setIsHidden(!isHidden)}
        {...attributes}
      >
        {children}
      </span>
    );
  };
}
