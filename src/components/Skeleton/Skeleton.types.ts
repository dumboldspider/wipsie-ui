// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { BreakpointCombo, BoxContainerProps } from "../Flex/Flex.types";

export type SkeletonProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  (SkeletonCircleProps | SkeletonRectangleProps) &
    BoxContainerProps & {
      /**
       * Skeleton color
       */
      color?: SimpleColors | "highlight" | "background" | "shade" | string;
      /**
       * Skeleton visibility
       */
      visible?: boolean;
    }
>;

type SkeletonCircleProps = {
  /**
   * Circle Skeleton
   */
  type: "circle";
  /**
   * Skeleton size radius
   */
  radius?: string | number | BreakpointCombo<string | number>;
};

type SkeletonRectangleProps = {
  /**
   * Inflicts border radius
   */
  type: "rounded" | "round" | "square";
};
