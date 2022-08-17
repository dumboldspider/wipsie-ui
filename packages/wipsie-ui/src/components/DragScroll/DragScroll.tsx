// Generated with util/create-component.js
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { DragScrollProps } from "./DragScroll.types";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import debounce from "../../utils/debounce";

// const cn = bem('wipsie-scroll-container');

const SCROLL_END_DEBOUNCE = 300;

const LEFT_BUTTON = 0;

export const DragScroll: React.FC<DragScrollProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    draggingClassName = "dragging",
    className,
    style,
    hideScrollbars,
    component: Component = "div",
    ignoreElements,
    nativeMobileScroll,
    stopPropagation,
    onClick,
    buttons = [LEFT_BUTTON],
    onStartScroll,
    onScroll,
    innerRef,
    horizontal,
    vertical,
    activationDistance = 10,
    onEndScroll,
  } = props;

  // Is container scrolling now (for example by inertia)
  const [scrolling, setScrolling] = useState(false);

  // Is scrolling started
  const [started, setStarted] = useState(false);

  // Is touch active or mouse pressed down
  const [pressed, setPressed] = useState(false);

  // Is event internal
  const [internal, setInternal] = useState(false);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  function _isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  function _isDraggable(target) {
    if (ignoreElements) {
      const closest = target.closest(ignoreElements);
      return closest === null || closest.contains(target);
    } else {
      return true;
    }
  }

  function _isScrollable() {
    return (
      containerRef?.current &&
      (containerRef?.current?.scrollWidth >
        containerRef?.current?.clientWidth ||
        containerRef?.current?.scrollHeight >
          containerRef?.current?.clientHeight)
    );
  }

  // Simulate 'onEndScroll' event that fires when scrolling is stopped
  const _onEndScroll = () =>
    debounce(() => {
      setScrolling(false);
      if (!pressed && started) {
        processEnd();
      }
    }, SCROLL_END_DEBOUNCE);

  const _onScroll = (e) => {
    // Ignore the internal scrolls
    if (
      containerRef?.current?.scrollLeft !== scrollLeft ||
      containerRef?.current?.scrollTop !== scrollTop
    ) {
      setScrolling(true);
      processScroll(e);
      _onEndScroll();
    }
  };

  const onTouchStart = (e) => {
    if (_isDraggable(e.target)) {
      setInternal(true);
      if (nativeMobileScroll && scrolling) {
        setPressed(true);
      } else {
        const touch = e.touches[0];
        processClick(e, touch.clientX, touch.clientY);
        if (!nativeMobileScroll && stopPropagation) {
          e.stopPropagation();
        }
      }
    }
  };

  const onTouchEnd = (e) => {
    if (pressed) {
      if (started && (!scrolling || !nativeMobileScroll)) {
        processEnd();
      } else {
        setPressed(false);
      }
      // forceUpdate();
    }
  };

  const onTouchMove = (e) => {
    if (pressed && (!nativeMobileScroll || !isMobile)) {
      const touch = e.touches[0];
      if (touch) {
        processMove(e, touch.clientX, touch.clientY);
      }
      e.preventDefault();
      if (stopPropagation) {
        e.stopPropagation();
      }
    }
  };

  const onMouseDown = (e) => {
    if (_isDraggable(e.target) && _isScrollable()) {
      setInternal(true);
      if (buttons.indexOf(e.button) !== -1) {
        processClick(e, e.clientX, e.clientY);
        e.preventDefault();
        if (stopPropagation) {
          e.stopPropagation();
        }
      }
    }
  };

  const onMouseMove = (e) => {
    if (pressed) {
      processMove(e, e.clientX, e.clientY);
      e.preventDefault();
      if (stopPropagation) {
        e.stopPropagation();
      }
    }
  };

  const onMouseUp = (e) => {
    if (pressed) {
      if (started) {
        processEnd();
      } else {
        setPressed(false);
        setInternal(false);
        // forceUpdate();
        onClick && onClick(e);
      }
      e.preventDefault();
      if (stopPropagation) {
        e.stopPropagation();
      }
    }
  };

  function processClick(e, clientX, clientY) {
    if (containerRef?.current) {
      setScrollLeft(containerRef?.current?.scrollLeft);
      setScrollTop(containerRef?.current?.scrollTop);
      setClientX(clientX);
      setClientY(clientY);
      setPressed(true);
    }
  }

  function processStart(changeCursor = true) {
    setStarted(true);

    // Add the class to change displayed cursor
    if (changeCursor) {
      document.body.classList.add("wipsie-dragging");
    }

    onStartScroll &&
      onStartScroll({
        external: !internal,
      });

    // forceUpdate();
  }

  // Process native scroll (scrollbar, mobile scroll)
  function processScroll(e) {
    if (started) {
      onScroll &&
        onScroll({
          external: !internal,
        });
    } else {
      processStart(false);
    }
  }

  // Process non-native scroll
  function processMove(e, newClientX, newClientY) {
    if (containerRef?.current) {
      if (!started) {
        if (
          (horizontal && Math.abs(newClientX - clientX) > activationDistance) ||
          (vertical && Math.abs(newClientY - clientY) > activationDistance)
        ) {
          setClientX(newClientX);
          setClientY(newClientY);
          processStart();
        }
      } else {
        if (horizontal) {
          // containerRef?.current?.scrollLeft-= newClientX - clientX;
        }
        if (vertical) {
          // containerRef?.current?.scrollTop -= newClientY - clientY;
        }
        if (onScroll) {
          onScroll({ external: !internal });
        }
        setClientX(newClientX);
        setClientY(newClientY);
        setScrollLeft(containerRef?.current?.scrollLeft);
        setScrollTop(containerRef?.current?.scrollTop);
      }
    }
  }

  function processEnd() {
    if (containerRef?.current) {
      onEndScroll &&
        onEndScroll({
          external: !internal,
        });

      setPressed(false);
      setStarted(false);
      setInternal(false);
      setScrolling(false);

      document.body.classList.remove("wipsie-dragging");
      // forceUpdate();
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
    }

    if (containerRef?.current) {
      // due to https://github.com/facebook/react/issues/9809#issuecomment-414072263
      containerRef?.current.addEventListener("touchstart", onTouchStart, {
        passive: false,
      });
      containerRef?.current.addEventListener("mousedown", onMouseDown, {
        passive: false,
      });
    }
    if (nativeMobileScroll) {
      // We should check if it's the mobile device after page was loaded
      // to prevent breaking SSR
      // const _isMobile = _isMobileDevice();
      setIsMobile(_isMobileDevice());

      // // If it's the mobile device, we should rerender to change styles
      // if (isMobile) {
      //   // forceUpdate();
      // }
    }

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (containerRef?.current) {
        containerRef?.current.removeEventListener("touchstart", onTouchStart);
        containerRef?.current.removeEventListener("mousedown", onMouseDown);
      }
    };
  }, []);

  return (
    <div
      data-testid="Wps-DragScroll"
      className={classnames(
        "Wps-DragScroll",
        className,
        pressed && draggingClassName,
        hideScrollbars && "hide-scrollbars",
        isMobile && "native-scroll"
      )}
      style={style}
      ref={containerRef}
      onScroll={_onScroll}
      // cn({
      //   dragging: this.pressed,
      //   "hide-scrollbars": hideScrollbars,
      //   "native-scroll": this.isMobile,
      // })
    >
      <style jsx>{`
        .Wps-DragScroll {
          color: black;
          overflow: auto;
        }

        .Wps-DragScroll.dragging {
          scroll-behavior: auto !important;
        }

        .Wps-DragScroll.dragging > * {
          pointer-events: none;
          cursor: grab;
        }

        .Wps-DragScroll.hide-scrollbars {
          overflow: hidden;
          overflow: -moz-scrollbars-none;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .Wps-DragScroll.hide-scrollbars::-webkit-scrollbar {
          display: none !important;
          height: 0 !important;
          width: 0 !important;
          background: transparent !important;
          -webkit-appearance: none !important;
        }

        .Wps-DragScroll.native-scroll {
          overflow: auto;
        }

        .wipsie-dragging {
          cursor: grabbing;
        }
      `}</style>
      {children}
    </div>
  );
};

// class ScrollContainer2 extends PureComponent<DragScrollProps> {
//   static defaultProps = {
//     nativeMobileScroll: true,
//     hideScrollbars: true,
//     activationDistance: 10,
//     vertical: true,
//     horizontal: true,
//     stopPropagation: false,
//     style: {},
//     component: "div",
//     buttons: [LEFT_BUTTON],
//   };
//   container: RefObject<HTMLElement>;
//   scrolling: boolean;
//   started: boolean;
//   pressed: boolean;
//   isMobile: boolean;
//   internal: boolean;

//   scrollLeft?: number;
//   scrollTop?: number;
//   clientX?: number;
//   clientY?: number;

//   constructor(props) {
//     super(props);
//     this.container = React.createRef();
//     this.onEndScroll = debounce(this.onEndScroll, SCROLL_END_DEBOUNCE);

//     // // Is container scrolling now (for example by inertia)
//     // this.scrolling = false;
//     // // Is scrolling started
//     // this.started = false;
//     // // Is touch active or mouse pressed down
//     // this.pressed = false;
//     // // Is event internal
//     // this.internal = false;

//     // Bind callbacks
//     this.getRef = this.getRef.bind(this);
//   }

//   componentDidMount() {
//     const { nativeMobileScroll } = this.props;
//     const container = this.container.current;

//     // window.addEventListener("mouseup", this.onMouseUp);
//     // window.addEventListener("mousemove", this.onMouseMove);
//     // window.addEventListener("touchmove", this.onTouchMove, { passive: false });
//     // window.addEventListener("touchend", this.onTouchEnd);

//     // // due to https://github.com/facebook/react/issues/9809#issuecomment-414072263
//     // container.addEventListener("touchstart", this.onTouchStart, {
//     //   passive: false,
//     // });
//     // container.addEventListener("mousedown", this.onMouseDown, {
//     //   passive: false,
//     // });

//     // if (nativeMobileScroll) {
//     //   // We should check if it's the mobile device after page was loaded
//     //   // to prevent breaking SSR
//     //   this.isMobile = this.isMobileDevice();

//     //   // If it's the mobile device, we should rerender to change styles
//     //   if (this.isMobile) {
//     this.forceUpdate();
//     //   }
//     // }
//   }

//   componentWillUnmount() {

//   }

//   // getElement() {
//   //   return this.container.current;
//   // }

//   // isMobileDevice() {
//   //   return (
//   //     typeof window.orientation !== "undefined" ||
//   //     navigator.userAgent.indexOf("IEMobile") !== -1
//   //   );
//   // }

//   // isDraggable(target) {
//   //   const ignoreElements = this.props.ignoreElements;
//   //   if (ignoreElements) {
//   //     const closest = target.closest(ignoreElements);
//   //     return closest === null || closest.contains(this.getElement());
//   //   } else {
//   //     return true;
//   //   }
//   // }

//   // isScrollable() {
//   //   const container = this.container.current;
//   //   return (
//   //     container &&
//   //     (container.scrollWidth > container.clientWidth ||
//   //       container.scrollHeight > container.clientHeight)
//   //   );
//   // }

//   // // Simulate 'onEndScroll' event that fires when scrolling is stopped
//   // onEndScroll = () => {
//   //   this.scrolling = false;
//   //   if (!this.pressed && this.started) {
//   //     this.processEnd();
//   //   }
//   // };

//   // onScroll = (e) => {
//   //   const container = this.container.current;
//   //   // Ignore the internal scrolls
//   //   if (
//   //     container.scrollLeft !== this.scrollLeft ||
//   //     container.scrollTop !== this.scrollTop
//   //   ) {
//   //     this.scrolling = true;
//   //     this.processScroll(e);
//   //     this.onEndScroll();
//   //   }
//   // };

//   // onTouchStart = (e) => {
//   //   const { nativeMobileScroll } = this.props;
//   //   if (this.isDraggable(e.target)) {
//   //     this.internal = true;
//   //     if (nativeMobileScroll && this.scrolling) {
//   //       this.pressed = true;
//   //     } else {
//   //       const touch = e.touches[0];
//   //       this.processClick(e, touch.clientX, touch.clientY);
//   //       if (!nativeMobileScroll && this.props.stopPropagation) {
//   //         e.stopPropagation();
//   //       }
//   //     }
//   //   }
//   // };

//   // onTouchEnd = (e) => {
//   //   const { nativeMobileScroll } = this.props;
//   //   if (this.pressed) {
//   //     if (this.started && (!this.scrolling || !nativeMobileScroll)) {
//   //       this.processEnd();
//   //     } else {
//   //       this.pressed = false;
//   //     }
//     this.forceUpdate();
//   //   }
//   // };

//   // onTouchMove = (e) => {
//   //   const { nativeMobileScroll } = this.props;
//   //   if (this.pressed && (!nativeMobileScroll || !this.isMobile)) {
//   //     const touch = e.touches[0];
//   //     if (touch) {
//   //       this.processMove(e, touch.clientX, touch.clientY);
//   //     }
//   //     e.preventDefault();
//   //     if (this.props.stopPropagation) {
//   //       e.stopPropagation();
//   //     }
//   //   }
//   // };

//   // onMouseDown = (e) => {
//   //   if (this.isDraggable(e.target) && this.isScrollable()) {
//   //     this.internal = true;
//   //     if (this.props.buttons.indexOf(e.button) !== -1) {
//   //       this.processClick(e, e.clientX, e.clientY);
//   //       e.preventDefault();
//   //       if (this.props.stopPropagation) {
//   //         e.stopPropagation();
//   //       }
//   //     }
//   //   }
//   // };

//   // onMouseMove = (e) => {
//   //   if (this.pressed) {
//   //     this.processMove(e, e.clientX, e.clientY);
//   //     e.preventDefault();
//   //     if (this.props.stopPropagation) {
//   //       e.stopPropagation();
//   //     }
//   //   }
//   // };

//   // onMouseUp = (e) => {
//   //   if (this.pressed) {
//   //     if (this.started) {
//   //       this.processEnd();
//   //     } else {
//   //       this.internal = false;
//   //       this.pressed = false;
//       this.forceUpdate();
//   //       if (this.props.onClick) {
//   //         this.props.onClick(e);
//   //       }
//   //     }
//   //     e.preventDefault();
//   //     if (this.props.stopPropagation) {
//   //       e.stopPropagation();
//   //     }
//   //   }
//   // };

//   // processClick(e, clientX, clientY) {
//   //   const container = this.container.current;
//   //   this.scrollLeft = container.scrollLeft;
//   //   this.scrollTop = container.scrollTop;
//   //   this.clientX = clientX;
//   //   this.clientY = clientY;
//   //   this.pressed = true;
//   // }

//   // processStart(changeCursor = true) {
//   //   const { onStartScroll } = this.props;

//   //   this.started = true;

//   //   // Add the class to change displayed cursor
//   //   if (changeCursor) {
//   //     document.body.classList.add("wipsie-dragging");
//   //   }

//   //   if (onStartScroll) {
//   //     onStartScroll({
//   //       external: !this.internal,
//   //     });
//   //   }
//   this.forceUpdate();
//   // }

//   // // Process native scroll (scrollbar, mobile scroll)
//   // processScroll(e) {
//   //   if (this.started) {
//   //     const { onScroll } = this.props;
//   //     if (onScroll) {
//   //       onScroll({
//   //         external: !this.internal,
//   //       });
//   //     }
//   //   } else {
//   //     this.processStart(false);
//   //   }
//   // }

//   // // Process non-native scroll
//   // processMove(e, newClientX, newClientY) {
//   //   const { horizontal, vertical, activationDistance, onScroll } = this.props;
//   //   const container = this.container.current;

//   //   if (!this.started) {
//   //     if (
//   //       (horizontal &&
//   //         Math.abs(newClientX - this.clientX) > activationDistance) ||
//   //       (vertical && Math.abs(newClientY - this.clientY) > activationDistance)
//   //     ) {
//   //       this.clientX = newClientX;
//   //       this.clientY = newClientY;
//   //       this.processStart();
//   //     }
//   //   } else {
//   //     if (horizontal) {
//   //       container.scrollLeft -= newClientX - this.clientX;
//   //     }
//   //     if (vertical) {
//   //       container.scrollTop -= newClientY - this.clientY;
//   //     }
//   //     if (onScroll) {
//   //       onScroll({ external: !this.internal });
//   //     }
//   //     this.clientX = newClientX;
//   //     this.clientY = newClientY;
//   //     this.scrollLeft = container.scrollLeft;
//   //     this.scrollTop = container.scrollTop;
//   //   }
//   // }

//   // processEnd() {
//   //   const { onEndScroll } = this.props;
//   //   const container = this.container.current;

//   //   if (container && onEndScroll) {
//   //     onEndScroll({
//   //       external: !this.internal,
//   //     });
//   //   }

//   //   this.pressed = false;
//   //   this.started = false;
//   //   this.scrolling = false;
//   //   this.internal = false;

//   //   document.body.classList.remove("wipsie-dragging");
//   this.forceUpdate();
//   // }

//   // getRef(el) {
//   //   [this.container, this.props.innerRef].forEach((ref) => {
//   //     if (ref) {
//   //       if (typeof ref === "function") {
//   //         ref(el);
//   //       } else {
//   //         (ref as MutableRefObject<HTMLElement>).current = el;
//   //       }
//   //     }
//   //   });
//   // }

//   render() {
//     const {
//       children,
//       draggingClassName,
//       className,
//       style,
//       hideScrollbars,
//       component: Component,
//     } = this.props;

//     return (
//       <Component
//         className={classnames(
//           className,
//           this.pressed && draggingClassName,
//           cn({
//             dragging: this.pressed,
//             "hide-scrollbars": hideScrollbars,
//             "native-scroll": this.isMobile,
//           })
//         )}
//         style={style}
//         ref={this.getRef}
//         onScroll={this.onScroll}
//       >
//         {children}
//       </Component>
//     );
//   }
// }
