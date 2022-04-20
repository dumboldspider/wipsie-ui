import React, { useCallback } from "react";
import { Editable } from "slate-react";
import classNames from "classnames";
import { Container } from "@wipsie/ui";
import { RenderElement } from "./renders/RenderElement";
import { RenderLeaf } from "./renders/RenderLeaf";

export type SlateContentProps = any;

export const WipsieSlateContent = ({
  className,
  wrapperStyle,
  style,
  value,
  outerState,
  plugins,
  onChange,
  children,
  readOnly = false,
  editor,
  placeholder = "Start typing...",
  spellCheck = true,
  autoFocus = true,
  backgroundColor = "shade",
  ...rest
}: SlateContentProps) => {
  const renderElement = useCallback(
    (props) => <RenderElement {...props} />,
    []
  );
  const renderLeaf = useCallback((props) => <RenderLeaf {...props} />, []);

  return (
    <Container
      className={classNames("editor--content", className)}
      style={wrapperStyle}
      backgroundColor={backgroundColor}
      shape="rounded"
      p={1}
    >
      <Editable
        plugins={plugins}
        value={value}
        // onChange={onChange}
        readOnly={readOnly}
        outerState={outerState}
        style={style}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder={<div>{placeholder}</div>}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        onKeyDown={(event) => {
          for (const action in plugins) {
            if (plugins[action].onKeyDown) {
              plugins[action].onKeyDown(event, editor);
            }
          }

          if (event.key === "Tab") {
            event.preventDefault();
            // editor.insertText("  ");
          }
        }}
        {...rest}
      />
      {children}
    </Container>
  );
};
