// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { AccordionProps } from "./Accordion.types";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
// import opacity from "../../utils/opacity";

export const Accordion: React.FC<AccordionProps> = (props) => {
  // const theme = useTheme();
  const {
    children,
    className,
    panels = [],
    wrapperStyle,
    contentStyle,
    innerStyle,
    labelStyle,
    backgroundColor = "basic",
    labelColor = null,
    labelBackgroundColor = null,
    labelActiveColor = null,
    labelActiveBackgroundColor = null,
    contentColor = null,
    shape = "rounded",
    size = "medium",
    style,
    ...otherProps
  } = props;
  const [activeTab, setActiveTab] = useState(0);

  function activateTab(index: number) {
    setActiveTab(activeTab === index ? -1 : index);
  }

  return (
    <div
      data-testid="Wps-Accordion"
      className={classnames("Wps-Accordion", className)}
      role="tablist"
      style={wrapperStyle}
      {...otherProps}
    >
      {panels.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          style={style}
          shape={shape}
          size={size}
          backgroundColor={backgroundColor}
          labelColor={labelColor}
          labelBackgroundColor={labelBackgroundColor}
          labelActiveColor={labelActiveColor}
          labelActiveBackgroundColor={labelActiveBackgroundColor}
          contentColor={contentColor}
          labelStyle={labelStyle}
          contentStyle={contentStyle}
          innerStyle={innerStyle}
          {...panel}
          activateTab={() => {
            activateTab(index);
          }}
        />
      ))}
      <style jsx>{`
        .Wps-Accordion {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

const Panel = (props) => {
  const theme = useTheme();
  const {
    label,
    icon,
    content,
    shape,
    size,
    className,
    activeTab,
    index,
    activateTab,
    innerStyle,
    labelStyle,
    contentStyle,
    backgroundColor,
    labelColor,
    labelBackgroundColor,
    labelActiveColor,
    labelActiveBackgroundColor,
    contentColor,
    style,
    ...otherProps
  } = props;
  const internalRef = React.useRef(null) as any;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (internalRef.current) {
        const internalHeight = internalRef.current.scrollHeight;
        setHeight(internalHeight);
      }
    }, 333);
  }, []);

  function handleShapeFirstVertical() {
    switch (shape) {
      case "round":
        return "border-radius: 10em 10em 0px 0px; border-top-width: 2px;";
      case "rounded":
        return "border-radius: 0.7em 0.7em 0px 0px; border-top-width: 2px;";
      case "square":
        return "border-radius: 0em; border-top-width: 2px;";
      default:
        return "border-radius: 0.7em 0.7em 0px 0px; border-top-width: 2px;";
    }
  }
  function handleShapeLastVertical() {
    switch (shape) {
      case "round":
        return "border-radius: 0px 0px 10em 10em; border-bottom-width: 2px;";
      case "rounded":
        return "border-radius: 0px 0px 0.7em 0.7em; border-bottom-width: 2px;";
      case "square":
        return "border-radius: 0em; border-bottom-width: 2px;";
      default:
        return "border-radius: 0px 0px 0.7em 0.7em; border-bottom-width: 2px;";
    }
  }

  function handleFontSize() {
    switch (size) {
      case "xlarge":
        return "font-size: 18px;";
      case "large":
        return "font-size: 16px;";
      case "small":
        return "font-size: 12px;";
      case "mini":
        return "font-size: 10px;";
      case "medium":
      default:
        return "font-size: 14px;";
    }
  }

  function handlePadding() {
    switch (size) {
      case "xlarge":
        return "padding: 20px;";
      case "large":
        return "padding: 18px;";
      case "small":
        return "padding: 13px;";
      case "mini":
        return "padding: 10px;";
      case "medium":
      default:
        return "padding: 15px;";
    }
  }

  function handleExpandWidth() {
    switch (size) {
      case "xlarge":
        return "width: 20px;";
      case "large":
        return "width: 18px;";
      case "small":
        return "width: 13px;";
      case "mini":
        return "width: 10px;";
      case "medium":
      default:
        return "width: 15px;";
    }
  }

  function handleColor(color) {
    if (!color) return handleColor(backgroundColor);
    switch (color) {
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(color) ? theme.palette[color][500] : color;
    }
  }

  function handleContrastColor(color) {
    if (!color) return contrast(backgroundColor);
    switch (color) {
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(color) ? theme.palette[color][500] : color;
    }
  }

  return (
    <div
      data-testid="Wps-AccordionPanel"
      className={classnames("Wps-AccordionPanel", className)}
      aria-expanded={activeTab === index}
      {...otherProps}
    >
      <button
        className="Wps-AccordionPanelLabel"
        role="tab"
        onClick={activateTab}
        style={labelStyle}
      >
        {icon && <span style={{ paddingRight: 10 }}>{icon}</span>}
        {label}
      </button>
      <div
        className="Wps-AccordionPanelInner"
        style={innerStyle}
        aria-hidden={!activeTab === index}
        ref={internalRef}
      >
        <p className="Wps-AccordionPanelContent" style={contentStyle}>
          {content}
        </p>
      </div>

      <style jsx>{`
        .Wps-AccordionPanel {
          background: ${handleColor(backgroundColor)};
        }

        .Wps-AccordionPanel:first-child,
        .Wps-AccordionPanel:first-child .Wps-AccordionPanelLabel {
          ${handleShapeFirstVertical()};
        }
        .Wps-AccordionPanel:last-child,
        .Wps-AccordionPanel:last-child .Wps-AccordionPanelLabel {
          ${handleShapeLastVertical()};
        }

        .Wps-AccordionPanel .Wps-AccordionPanelInner {
          height: ${activeTab === index ? height : 0}px;
          max-height: 100%;
          overflow: hidden;
          will-change: height;
          transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        .Wps-AccordionPanel .Wps-AccordionPanelLabel {
          position: relative;
          display: block;
          width: 100%;
          background: ${labelBackgroundColor
            ? handleColor(labelBackgroundColor)
            : "transparent"};
          border: none;
          text-align: left;
          ${handlePadding()}
          font-weight: 500;
          ${handleFontSize()}
          font-family: inherit;
          transition: all 0.2s linear;
          cursor: pointer;
          color: ${handleContrastColor(labelColor)};
        }
        .Wps-AccordionPanel .Wps-AccordionPanelLabel:focus {
          outline: none;
        }
        .Wps-AccordionPanel .Wps-AccordionPanelLabel:after,
        .Wps-AccordionPanel .Wps-AccordionPanelLabel:before {
          content: "";
          position: absolute;
          right: 25px;
          top: 50%;
          ${handleExpandWidth()}
          height: 2px;
          margin-top: -2px;
          background: ${handleContrastColor(labelColor)};
        }
        .Wps-AccordionPanel .Wps-AccordionPanelLabel:before {
          transform: rotate(-90deg);
          transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        .Wps-AccordionPanel[aria-expanded="true"] .Wps-AccordionPanelContent {
          opacity: 1;
        }
        .Wps-AccordionPanel[aria-expanded="true"] .Wps-AccordionPanelLabel {
          background: ${labelActiveBackgroundColor
            ? handleColor(labelActiveBackgroundColor)
            : labelBackgroundColor
            ? handleColor(labelBackgroundColor)
            : "transparent"};

          color: ${labelActiveColor
            ? handleContrastColor(labelActiveColor)
            : labelColor
            ? handleContrastColor(labelColor)
            : "transparent"};

          transition: all 0.2s linear;
        }
        .Wps-AccordionPanel[aria-expanded="true"]
          .Wps-AccordionPanelLabel:before {
          transform: rotate(0deg);
        }
        .Wps-AccordionPanel .Wps-AccordionPanelContent {
          ${handlePadding()}
          padding-top: 5px;
          ${handleFontSize()}
          color: ${handleContrastColor(contentColor)};
          opacity: ${activeTab === index ? 1 : 0};
          transition: opacity 0.3s linear 0.18s;
        }
        .Wps-AccordionPanel:not(:last-child) {
          /* margin-bottom: 3px; */
        }
      `}</style>
    </div>
  );
};

// class Panel2 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       height: 0,
//     };
//   }

//   // componentDidMount() {
//   //   window.setTimeout(() => {
//   //     const el = ReactDOM.findDOMNode(this);
//   //     const height = el.querySelector(".panel__inner").scrollHeight;
//   //     this.setState({
//   //       height,
//   //     });
//   //   }, 333);
//   // }

//   render() {
//     // const { label, content, activeTab, index, activateTab } = this.props;
//     // const { height } = this.state;
//     // const isActive = activeTab === index;
//     // const innerStyle = {
//     //   height: `${isActive ? height : 0}px`,
//     // };

//     return (
//       // <div className="panel" role="tabpanel" aria-expanded={isActive}>
//       //   <button className="panel__label" role="tab" onClick={activateTab}>
//       //     {label}
//       //   </button>
//       //   <div
//       //     className="panel__inner"
//       //     style={innerStyle}
//       //     aria-hidden={!isActive}
//       //   >
//       //     <p className="panel__content">{content}</p>
//       //   </div>
//       // </div>
//     );
//   }
// }
