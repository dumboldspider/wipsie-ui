import { Button, contrast, Popover, useTheme } from "@wipsie/ui";
import React from "react";
import { useFocused, useSelected } from "slate-react";

export const MentionElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  const theme = useTheme();
  return (
    <Popover arrow position="top" content={"hello"} spacing={0.5}>
      <span
        {...attributes}
        contentEditable={false}
        data-cy={`mention-${element.character.replace(" ", "-")}`}
        style={{
          margin: "0 1px",
          verticalAlign: "baseline",
          display: "inline-block",
          backgroundColor: theme.palette.primary[300],
          borderRadius: "4px",
          color: contrast(theme.palette.primary[500]),
          padding: "4px",
          fontSize: theme.font.body1.fontSize,
          boxShadow: selected && focused ? "0 0 0 2px #B4D5FF" : "none",
        }}
      >
        @{element.character}
        {children}
      </span>
    </Popover>
  );
};
