import { Button, Select } from "@wipsie/ui";
import React from "react";
import { ToolbarItemProps } from "./Toolbar.types";

export const BaseActionButton: React.FC<ToolbarItemProps> = (props) => {
  const { action, icon, id, value, format, component, visible = true } = props;

  async function commitValue() {
    let vv = typeof value === "function" ? await value() : value;
    return vv;
  }

  if (!visible) return null;

  if (format === "custom" && component) {
    let Component = component;

    return <Component commitValue={commitValue} {...props} />;
  } else if (format === "button") {
    return (
      <Button
        id={id}
        variant="ghost"
        shape="rounded"
        size="small"
        onClick={async () => {
          const vv = await commitValue();
          action && typeof vv === "string" && action(vv);
        }}
      >
        {icon}
      </Button>
    );
  } else if (format === "select" && typeof value === "object") {
    return (
      <Select
        id={id}
        startAdornment={icon}
        size="small"
        onChange={(e) => {
          action && action(e.currentTarget.value);
        }}
      >
        {Object.keys(value).map((key) => {
          const vv = value[key];
          return (
            <option key={key} value={key}>
              {vv}
            </option>
          );
        })}
      </Select>
    );
  }

  return null;
};
