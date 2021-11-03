// Generated with util/create-component.js
import { Modify } from "../../types/modify";

// export type FlexProps = React.HTMLProps<HTMLDivElement>;
export type FlexProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  BoxContainerProps & FlexContainerProps
>;

export type FlexDisplay = "flex" | "inline-flex" | "block" | "none";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type FlexAlign = "start" | "center" | "end" | "stretch";
export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type FlexAlignContent =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "stretch";
type BoxSpaceItem = number | string | undefined;

export interface BoxContainerProps {
  /**
   * Container padding
   */
  p?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container padding horizontal
   */
  px?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container padding vertical
   */
  py?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container padding top
   */
  pt?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container padding right
   */
  pr?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container padding bottom
   */
  pb?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container padding left
   */
  pl?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;

  /**
   * Container margin
   */
  m?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container margin horizontal
   * */
  mx?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container margin vertical
   *  */
  my?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container margin top
   * */
  mt?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container margin right
   * */
  mr?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container margin bottom
   * */
  mb?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container margin left
   * */
  ml?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
}

export type FlexContainerProps = {
  display?: FlexDisplay | BreakpointCombo<FlexDisplay>;
  /**
   * Flex align items
   * */
  align?: FlexAlign | BreakpointCombo<FlexAlign>;
  /**
   * Flex align items
   * */
  alignContent?: FlexAlignContent | BreakpointCombo<FlexAlignContent>;
  /**
   * Justify content
   * */
  justify?: FlexJustify | BreakpointCombo<FlexJustify>;
  /**
   * Flex wrap
   * */
  wrap?: FlexWrap | BreakpointCombo<FlexWrap>;
  /**
   * Flex direction
   * */
  direction?: FlexDirection | BreakpointCombo<FlexDirection>;
  /**
   * If the container should max the parent width
   */
  fullWidth?: boolean;
  /**
   * If the container should max the parent height
   */
  fullHeight?: boolean;
  /**
   * Container width
   * */
  width?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container height
   * */
  height?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container max width
   * */
  maxWidth?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container max height
   * */
  maxHeight?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container min width
   * */
  minWidth?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
  /**
   * Container min height
   * */
  minHeight?: BoxSpaceItem | BreakpointCombo<BoxSpaceItem>;
};

export type BreakpointCombo<T> = {
  xs: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};
export type BreakpointsVariants = "xs" | "sm" | "md" | "lg" | "xl";
