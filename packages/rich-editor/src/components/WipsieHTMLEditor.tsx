import { Container } from "@wipsie/ui";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { defaultToolbar } from "../defaults";
import { executeEditorCommand } from "../utils/executeEditorCommand";
import { getStringSizeInKB } from "../utils/getStringSizeInKB";
import { BaseActionButton } from "./BaseActionButton";
import { ToolBarType } from "./Toolbar.types";
import "./wipsie-editor.css";

export type EditorProps = {
  id: string;
  initialValue?: string;
  value: string;
  onChange: (value: string) => void;
  width?: string;
  debug?: boolean;
  toolbar?: ToolBarType;
  backgroundColor?: string;
  editorBackgroundColor?: string;
  toolbarBackgroundColor?: string;
};

export const WipsieHTMLEditor: React.FC<EditorProps> = ({
  id,
  initialValue,
  value,
  onChange,
  width = "100%",
  debug = false,
  toolbar = defaultToolbar,
  backgroundColor = "background",
  toolbarBackgroundColor = "background",
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState(initialValue);
  const [, setIsFocused] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selection, setSelection] = useState<{ start: number; end: number }>();

  // set first initial value
  useEffect(() => {
    if (editorRef.current && initialValue) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [editorRef]);

  // content change handler (callback from parent)
  const onChangeHandler = () => {
    const newValue = editorRef.current.innerHTML;
    setInternalValue(newValue);
    onChange(newValue);
  };

  // content change handler (value from parent)
  // useEffect(() => {
  //   if (editorRef.current) {
  //     setInternalValue(value);

  //     if (!isEditing) {
  //       editorRef.current.innerHTML = value;
  //     }
  //   }
  // }, [value]);

  return (
    <Container
      className="wuire-editor-wrapper"
      width={width}
      id={id}
      p={1}
      backgroundColor={backgroundColor}
      shape="rounded"
    >
      <Container
        p={"0px"}
        mb={0.5}
        display="flex"
        direction="row"
        align="center"
        justify="start"
        alignContent="center"
        wrap="wrap"
        shape="square"
        className="wuire-editor-toolbar"
        backgroundColor={toolbarBackgroundColor}
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        {toolbar.map((toolbarGroup, i) => {
          return (
            <div key={i} className="wuire-editor-toolbar-group">
              {toolbarGroup.map((toolbarItem) => {
                return (
                  <div
                    key={toolbarItem.id}
                    className="wuire-editor-toolbar-group-item"
                  >
                    <BaseActionButton
                      {...toolbarItem}
                      key={toolbarItem.id}
                      action={(value) => {
                        executeEditorCommand(
                          editorRef.current,
                          toolbarItem.command,
                          value
                        );
                      }}
                      metadata={{
                        updateContent: onChangeHandler,
                        editorId: id,
                        ...toolbarItem.metadata,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </Container>
      <div
        ref={editorRef}
        className="wuire-editor-field wuire-content"
        contentEditable
        suppressContentEditableWarning
        onFocus={() => {
          setIsFocused(true);
          setIsEditing(true);
        }}
        onClick={() => {
          setIsEditing(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          setIsEditing(false);
        }}
        onSelect={(e) => {
          const range = window.getSelection().getRangeAt(0);
          const startColumn = range.startOffset;
          const endColumn = range.endOffset;
          setSelection({ start: startColumn, end: endColumn });
        }}
        onKeyDown={(e) => {
          // bold command, dont use document.exedCommand

          if (e.key === "Tab") {
            e.preventDefault();
            executeEditorCommand(
              editorRef.current,
              "insertHTML",
              "&nbsp;&nbsp;&nbsp;&nbsp;"
            );
          }

          toolbar.map((toolbarGroup) => {
            return toolbarGroup.map((toolbarItem) => {
              if (
                toolbarItem.keyEvent &&
                toolbarItem.keyEvent(e) &&
                (typeof toolbarItem.value === "string" ||
                  typeof toolbarItem.value === "function")
              ) {
                e.preventDefault();

                let vv =
                  typeof toolbarItem.value === "function"
                    ? toolbarItem.value()
                    : toolbarItem.value;

                executeEditorCommand(
                  editorRef.current,
                  toolbarItem.command,
                  vv
                );
              }
            });
          });
        }}
        onInput={(e) => {
          const range = window.getSelection().getRangeAt(0);
          const startColumn = range.startOffset;
          const endColumn = range.endOffset;
          setSelection({ start: startColumn, end: endColumn });
          onChangeHandler();
        }}
        // onPaste={(e) => {
        //   e.preventDefault();
        //   const text = e.clipboardData.getData("text/plain");
        //   executeEditorCommand(editorRef.current, "insertHTML", text);
        // }}
      />
      {debug && (
        <Container backgroundColor="shade" mt={2} shape="rounded">
          <code>
            selection: {JSON.stringify(selection)}
            <br />
            isEditing: {JSON.stringify(isEditing)}
            <br />
            size: {getStringSizeInKB(internalValue)}kb
          </code>
        </Container>
      )}
    </Container>
  );
};
