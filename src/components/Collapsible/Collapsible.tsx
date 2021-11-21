// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { CollapsibleProps } from "./Collapsible.types";
import { Container } from "../Container";
import { Flex } from "../Flex";

export const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const theme = useTheme();
  const {
    open,
    as = null,
    header,
    children,
    icon = null,
    contentStyle = {},
    headerStyle = {},
    className,
    ...otherProps
  } = props;

  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!height || !open || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, open]);
  useEffect(() => {
    if (open) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [open]);

  // Component
  const Component = as || "div";

  return (
    <>
      <Component
        data-testid="Wps-Collapsible"
        className={classnames("Wps-CollapsibleWrapper", className)}
        {...otherProps}
      >
        <div className={"Wps-CollapsibleHeader"} style={headerStyle}>
          {header}
          {icon !== null ? (
            icon !== false ? (
              <span style={{ paddingLeft: 5 }}> {icon} </span>
            ) : (
              ""
            )
          ) : (
            <div
              className={`Wps-CollapsibleIconContainer ${
                open ? "Wps-IconRotate down" : "Wps-IconRotate up"
              }`}
            >
              ❯
            </div>
          )}
        </div>
        <div
          className={"Wps-CollapsiblePanel"}
          style={{ width: "100%", height }}
        >
          <div ref={ref}>
            <div className={"Wps-CollapsibleContent"} style={contentStyle}>
              {children}
            </div>
          </div>
        </div>

        <style jsx>{`
          .Wps-CollapsibleWrapper {
            transition: 0.3s;
          }
          .Wps-CollapsiblePanel {
            overflow: hidden;
            transition: height 0.2s ease-in-out;
          }

          .Wps-CollapsibleHeader {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            user-select: none;
            width: 100%;
          }

          .Wps-IconRotate {
            -moz-transition: all 0.2s linear;
            -webkit-transition: all 0.2s linear;
            transition: all 0.2s linear;
          }
          .Wps-IconRotate.down {
            transform: rotate(90deg);
          }
          .Wps-IconRotate.up {
            transform: rotate(0deg);
          }
          .Wps-CollapsibleIconContainer {
            cursor: pointer;
            background-color: Transparent;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            overflow: hidden;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </Component>
    </>
  );
};
