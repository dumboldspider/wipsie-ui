import React, { useCallback } from "react";
import { Editable, ReactEditor } from "slate-react";
import classNames from "classnames";
import { Container } from "@wipsie/ui";
import { useEffect } from "react";
// import { useRef } from "react";
import { DefaultElementRenders } from "./renders/DefaultElementRenders";
import { DefaultLeafRenders } from "./renders/DefaultLeafRenders";
import { Node } from "slate";

export type SlateContentProps = {
  className?: string;
  style?: React.CSSProperties;
  readOnly?: boolean;
  placeholder?: string;
  spellCheck?: boolean;
  autoFocus?: boolean;
  backgroundColor?: string;
  placeholderStyle?: React.CSSProperties;
  children?: React.ReactNode;
};

export type InheritedSlateContentProps = {
  editor?: ReactEditor;
  plugins: any;
  pluginVars: any;
  onChange: any;
  value?: any;
  onKeyDown?: any;
  wrapperStyle?: React.CSSProperties;
  initializer?: any;
};

type AllSlateContentProps = SlateContentProps & InheritedSlateContentProps;

export const serialize = (nodes) => {
  return nodes.map((n) => Node.string(n)).join("\n");
};

export const WipsieSlateContent = (props: SlateContentProps) => {
  const {
    className,
    wrapperStyle,
    style,
    value,
    initializer,
    // outerState,
    plugins,
    pluginVars,
    onChange,
    children,
    readOnly = false,
    editor,
    // focus,
    placeholder = "Start typing...",
    spellCheck = true,
    autoFocus = true,
    backgroundColor = "shade",
    onKeyDown,
    placeholderStyle,
  } = props as AllSlateContentProps;
  // const renderElement = useCallback(
  //   (props) => <RenderElement {...props} />,
  //   []
  // );
  // const renderLeaf = useCallback((props) => <RenderLeaf {...props} />, []);

  const pluginRenderElements = useCallback((props) => {
    const { element } = props;

    // get the plugin that match type
    let PluginRender = null;
    let pluginIndex = null;

    plugins.forEach((plugin, i) => {
      if (plugin.elementType === element.type) {
        PluginRender = plugin;
        pluginIndex = i;
        return;
      }
    });

    // if the plugin is not found, or the plugin has no render
    if (!PluginRender || !PluginRender.renderElement) {
      // get one of the default renders
      const DefaultRender =
        DefaultElementRenders[element.type] || DefaultElementRenders.default;
      return <DefaultRender {...props} />;
    }

    // if the plugin has a render, return the plugin render
    return (
      <PluginRender.renderElement {...props} {...pluginVars[pluginIndex]} />
    );
  }, []);

  const pluginRenderLeafs = useCallback((props) => {
    const { leaf, children: originalChildren, attributes } = props;
    const leafKeys = Object.keys(leaf);

    // wrap and rewrap the mark according to the type
    let children = <span {...attributes}>{originalChildren}</span>;

    // get the plugin that match type
    leafKeys.forEach((key) => {
      let PluginRender = null;
      let pluginIndex = null;

      plugins.forEach((plugin, i) => {
        if (plugin.leafType === key) {
          PluginRender = plugin;
          pluginIndex = i;
        }
      });

      // if the plugin is not found, or the plugin has no render, return the default render
      if (!PluginRender || !PluginRender.renderLeaf) {
        const DefaultRender =
          DefaultLeafRenders[key] || DefaultLeafRenders.default;
        children = <DefaultRender {...props}>{children}</DefaultRender>;
        return;
      }

      // if the plugin has a render, return the plugin render
      children = (
        <PluginRender.renderLeaf {...props} {...pluginVars[pluginIndex]}>
          {children}
        </PluginRender.renderLeaf>
      );
    });

    return children;
  }, []);

  // ref

  for (const action in plugins) {
    if (plugins[action].useEffect) {
      useEffect(...(plugins[action].useEffect(editor, value) as [any, any]));
    }
  }

  const plainText = value ? serialize(value) : "";

  return (
    <Container
      className={classNames("editor--content", className)}
      style={wrapperStyle}
      backgroundColor={backgroundColor}
      shape="rounded"
      p={1}
    >
      <Editable
        id={initializer && initializer?.id}
        // plugins={plugins}
        value={value}
        onChange={onChange}
        // itemRef={editorRef}
        // itemRef={editableRef}
        readOnly={readOnly}
        // outerState={outerState}
        style={style}
        renderElement={pluginRenderElements}
        renderLeaf={pluginRenderLeafs}
        // placeholder={placeholder}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        onKeyDown={(event) => {
          onKeyDown && onKeyDown(event);

          for (const action in plugins) {
            if (plugins[action].onKeyDown) {
              plugins[action].onKeyDown(event, editor);
            }
          }

          // onKeyDownMentions && onKeyDownMentions(event, editor);

          if (event.key === "Tab") {
            event.preventDefault();
            // editor.insertText("  ");
          }
        }}
        // {...rest}
      />

      {plainText.length === 0 && (
        <div
          className={"placeholder"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            pointerEvents: "none",
            userSelect: "none",
            opacity: 0.5,
            padding: 8,
            ...placeholderStyle,
          }}
        >
          {placeholder}
        </div>
      )}

      {children}
    </Container>
  );
};
