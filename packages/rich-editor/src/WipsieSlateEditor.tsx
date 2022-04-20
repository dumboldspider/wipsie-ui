import React, { useMemo } from "react";
import { withReact, Slate, ReactEditor } from "slate-react";
import { createEditor } from "slate";
import { cloneElement } from "./utils/cloneElement";
import pipe from "lodash/fp/pipe";
import { withHistory } from "slate-history";
import { withLinks } from "./plugins/withLinks";
import { withImages } from "./plugins/withImages";
import { withKeyCommands } from "./plugins/withKeyCommands";

export type SlateEditorProps = {
  value: any;
  onChange?: (value: any) => void;
  className?: string;
  style?: React.CSSProperties;
  plugins?: any[];
  children?: React.ReactNode;
};

export type SlateEditorChildProps = {
  editor: ReactEditor;
  plugins?: any[];
};

const createEditorWithPlugins = pipe(
  withReact,
  withHistory,
  withLinks,
  withImages,
  withKeyCommands
);

export const WipsieSlateEditor = (props: SlateEditorProps) => {
  const { value, onChange, className, style, children, plugins } = props;

  const editor = useMemo(
    () => createEditorWithPlugins(createEditor() as ReactEditor),
    []
  );

  const childProps = {
    plugins,
    editor,
    onChange,
    wrapperStyle: style,
  };

  return (
    <div className={className} style={style}>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => {
          onChange && onChange(value);
        }}
      >
        {cloneElement(children, childProps)}
      </Slate>
    </div>
  );
};
