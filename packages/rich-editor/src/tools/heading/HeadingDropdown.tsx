import { Select } from "@wipsie/ui";
import React from "react";
import { useSlate } from "slate-react";
import {
  HEADING_COMPONENTS,
  isSelectionInHeading,
  toggleHeadingNodes,
} from "./HeadingUtils";

export function HeadingDropdown(props) {
  const editor = useSlate();
  const { style, icon } = props;

  let headingDefault =
    Object.keys(HEADING_COMPONENTS).find((key) =>
      isSelectionInHeading(editor, key)
    ) || "body1";

  return (
    <Select
      style={style}
      shape="rounded"
      size="small"
      onChange={({ target: { value: variant } }: any) => {
        toggleHeadingNodes(editor, variant);
      }}
      value={headingDefault}
      startAdornment={icon}
    >
      {Object.keys(HEADING_COMPONENTS).map((key, index) => {
        const variantName = HEADING_COMPONENTS[key];

        return (
          <option key={`heading-${index}`} value={key}>
            {variantName}
          </option>
        );
      })}
    </Select>
  );
}
