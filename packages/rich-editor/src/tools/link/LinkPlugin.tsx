import { Box, Popover } from "@wipsie/ui";
import React from "react";
import { useFocused, useReadOnly, useSelected } from "slate-react";
import { LinkElementProps } from "./Link.types";

// Link plugin
export class LinkPlugin {
  // This is where we define the plugin's type
  public elementType = "link";

  // This is how the plugin render inside the editor
  public renderElement = ({
    element,
    attributes,
    children,
  }: LinkElementProps) => {
    const selected = useSelected();
    const focused = useFocused();
    const readOnly = useReadOnly();

    const url = element.url as string;

    const Link = () => (
      <a
        {...attributes}
        href={url}
        target={element.openInNewTab ? "_blank" : "_self"}
        rel={element.openInNewTab ? "noopener noreferrer" : null}
      >
        {children}
      </a>
    );

    if (readOnly) {
      return <Link />;
    } else {
      return (
        <Popover
          visible={selected && focused}
          content={
            <Box p={1} contentEditable={false}>
              Link to:{" "}
              <a href={url} target="_blank">
                {url}
              </a>
            </Box>
          }
        >
          <Link />
        </Popover>
      );
    }
  };
}
