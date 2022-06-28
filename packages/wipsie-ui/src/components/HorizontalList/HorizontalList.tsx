// Generated with util/create-component.js
import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { HorizontalListProps } from "./HorizontalList.types";

import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import useScrollBlock from "../../hooks/useScrollBlock";

export const HorizontalList: React.FC<HorizontalListProps> = (props) => {
  const theme = useTheme();
  const {
    width = "100%",
    deltaMultiplier = 0.5,
    arrowTriggerRange = 20,
    showArrows = true,
    style,
    color = "background",
    textColor = null,
    arrowScrollDistance = 200,
    children,
    className,
    internalProps = {},
    ...otherProps
  } = props;

  const scrollEl = useRef(null) as any;
  const scrollInEl = useRef(null) as any;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const [, setLocked] = useScrollBlock();

  useEffect(() => {
    handleScroll({ deltaY: 1, deltaX: 1 });
  }, []);

  // scroll event
  const handleScroll = (event: any) => {
    if (!scrollEl?.current) return; // error if element not defined

    let scrollLeftMax =
      scrollEl.current.scrollWidth - scrollEl.current.clientWidth;

    let scaleNew =
      prevScrollPos + (event.deltaY + event.deltaX) * deltaMultiplier;

    // inside scroll range

    if (scaleNew > 0 && scaleNew < scrollLeftMax + arrowTriggerRange) {
      setPrevScrollPos(scaleNew);
    }

    prevScrollPos >= scrollLeftMax - arrowTriggerRange
      ? setIsEnd(true)
      : setIsEnd(false);

    prevScrollPos <= 0 + arrowTriggerRange
      ? setIsStart(true)
      : setIsStart(false);

    scrollEl.current.scrollLeft = prevScrollPos;
  };

  function scrollPage(scrollDistance: number) {
    let scrollLeftMax =
      scrollEl.current.scrollWidth - scrollEl.current.clientWidth;
    let scaleNew = Math.min(
      Math.max(0, prevScrollPos + scrollDistance),
      scrollLeftMax
    );

    setPrevScrollPos(scaleNew);
    scrollEl.current.scrollLeft = scaleNew;
  }

  function handleBackgroundColor() {
    switch (color) {
      case "text":
        return theme.palette.text;
      case "subtext":
        return theme.palette.subtext;
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

  function handleTextColor() {
    if (!textColor) return contrast(handleBackgroundColor());
    switch (textColor) {
      case "text":
        return theme.palette.text;
      case "subtext":
        return theme.palette.subtext;
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(textColor)
          ? theme.palette[textColor][500]
          : textColor;
    }
  }

  return (
    <div style={{ position: "relative", width, ...style }} {...otherProps}>
      {showArrows && !isStart && (
        <div
          className={classnames("Wps-HorizontalListStartIcon")}
          onClick={() => {
            scrollPage(-arrowScrollDistance);
          }}
        >
          ❮
        </div>
      )}

      <div
        data-testid="Wps-HorizontalList"
        className={classnames("Wps-HorizontalListWrapper")}
        ref={scrollEl}
        onScroll={handleScroll}
        onWheel={handleScroll}
        onMouseEnter={() => setLocked(true)}
        onMouseLeave={() => setLocked(false)}
      >
        <div
          ref={scrollInEl}
          className={classnames("Wps-HorizontalList", className)}
          {...internalProps}
        >
          {children}
        </div>
      </div>

      {showArrows && !isEnd && (
        <div
          className={classnames("Wps-HorizontalListEndIcon", className)}
          onClick={() => {
            scrollPage(arrowScrollDistance);
          }}
        >
          ❯
        </div>
      )}

      <style jsx>{`
        .Wps-HorizontalListWrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          width: fit-content;
          max-width: 100%;
          overflow: hidden;
          position: relative;
          background-color: transparent;

          //scrollbar
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
        .Wps-HorizontalListWrapper ::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .Wps-HorizontalList {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          width: fit-content;
          /* display: -webkit-inline-box; */
          position: relative;
        }
        .Wps-HorizontalListStartIcon {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: ${handleTextColor()};
          background: transparent;
          border: none;
          cursor: pointer;
          background-image: linear-gradient(
            -90deg,
            transparent,
            ${handleBackgroundColor()},
            ${handleBackgroundColor()}
          );
          content: "❮";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          padding: 0px 20px;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .Wps-HorizontalListEndIcon {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: ${handleTextColor()};
          background: transparent;
          border: none;
          cursor: pointer;
          background-image: linear-gradient(
            90deg,
            transparent,
            ${handleBackgroundColor()},
            ${handleBackgroundColor()}
          );
          content: "❯";
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          padding: 0px 20px;
          z-index: 1;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};
