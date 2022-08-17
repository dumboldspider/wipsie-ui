// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { CSSProperties, ReactNode, Ref } from "react";

export interface DragScrollEvent {
  external: boolean;
}

export type DragScrollProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    vertical?: boolean;
    horizontal?: boolean;
    hideScrollbars?: boolean;
    activationDistance?: number;
    children?: ReactNode;
    onStartScroll?: (event: DragScrollEvent) => void;
    onScroll?: (event: DragScrollEvent) => void;
    onEndScroll?: (event: DragScrollEvent) => void;
    onClick?: (event: MouseEvent) => void;
    className?: string;
    draggingClassName?: string;
    style?: CSSProperties;
    ignoreElements?: string;
    nativeMobileScroll?: boolean;
    ref?: ReactNode;
    component?: HTMLElement | string;
    innerRef?: Ref<HTMLElement>;
    stopPropagation?: boolean;
    buttons?: number[];
  }
>;
