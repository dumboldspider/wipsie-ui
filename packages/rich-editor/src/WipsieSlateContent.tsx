import React, { useCallback } from "react";
import { Editable } from "slate-react";
import classNames from "classnames";
import { Container } from "@wipsie/ui";
import { useEffect } from "react";
import { useRef } from "react";
import { DefaultElementRenders } from "./renders/DefaultElementRenders";
import { DefaultLeafRenders } from "./renders/DefaultLeafRenders";

export type SlateContentProps = any;

export const WipsieSlateContent = ({
  className,
  wrapperStyle,
  style,
  value,
  outerState,
  plugins,
  pluginVars,
  onChange,
  children,
  readOnly = false,
  editor,
  placeholder = "Start typing...",
  spellCheck = true,
  autoFocus = true,
  backgroundColor = "shade",
  onKeyDown,
  ...rest
}: SlateContentProps) => {
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
  const editableRef = useRef<any>(null);

  for (const action in plugins) {
    if (plugins[action].useEffect) {
      useEffect(...(plugins[action].useEffect(editor, value) as [any, any]));
    }
  }

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
        itemRef={editableRef}
        readOnly={readOnly}
        outerState={outerState}
        style={style}
        renderElement={pluginRenderElements}
        renderLeaf={pluginRenderLeafs}
        placeholder={<div>{placeholder}</div>}
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
        {...rest}
      />
      {children}
    </Container>
  );
};
