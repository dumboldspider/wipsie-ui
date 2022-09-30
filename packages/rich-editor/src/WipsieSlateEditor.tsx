import React, { useMemo } from "react";
import { withReact, Slate, ReactEditor } from "slate-react";
import { createEditor } from "slate";
import { cloneElement } from "./utils/cloneElement";
import pipe from "lodash/fp/pipe";
import { withHistory } from "slate-history";
import { withLinks } from "./plugins/withLinks";
import { withImages } from "./plugins/withImages";
import { withKeyCommands } from "./plugins/withKeyCommands";
import { withMentions } from "./plugins/withMentions";

export type SlateEditorProps = {
  value: any;
  onChange?: (value: any) => void;
  className?: string;
  style?: React.CSSProperties;
  plugins?: any[];
  children?: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  initializer?: any;
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
  withKeyCommands,
  withMentions
);

export const WipsieSlateEditor = (props: SlateEditorProps) => {
  const {
    value,
    onChange,
    className,
    style,
    children,
    plugins = [],
    onKeyDown,
    initializer,
  } = props;

  const editor = useMemo(() => {
    const currentEditor = createEditorWithPlugins(
      createEditor() as ReactEditor
    );

    initializer && initializer.setCurrentEditor(currentEditor); // initialize external hook
    return currentEditor;
  }, []);

  // Plugins Start
  const pluginVars = plugins.map((plugin) => {
    if (plugin.usePlugin) {
      return plugin.usePlugin();
    }
    return {}; // There is no start variables to return
  });

  const pluginKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown && onKeyDown(event);
    plugins.forEach((plugin, i) => {
      if (plugin.onKeyDown) {
        plugin.onKeyDown(event, { editor, ...pluginVars[i] });
      }
    });
  };
  // Plugins End

  const childProps = {
    plugins,
    editor,
    onChange,
    value,
    wrapperStyle: style,
    onKeyDown: pluginKeyDown,
    pluginVars: pluginVars,
    initializer: initializer,
  };

  // get plugin renders
  const pluginsWithChildren =
    plugins &&
    plugins.length > 0 &&
    plugins.map((Plugin, i) => {
      if (Plugin.renderComponent) {
        return <Plugin.renderComponent {...childProps} {...pluginVars[i]} />;
      }
      return null;
    });

  return (
    <div className={className} style={style}>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => {
          onChange && onChange(value);

          // internal plugins test
          plugins.forEach((plugin, i) => {
            if (plugin.onChange) {
              plugin.onChange({ editor, value, ...pluginVars[i] });
            }
          });
        }}
      >
        {pluginsWithChildren}

        {cloneElement(children, childProps)}
      </Slate>
    </div>
  );
};
