// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type AnimatedProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Prop description
     */
    animation: AnimationVariants;
    duration?: number;
    visible: boolean;
    transition?: AnimationTransitions;
  }
>;
export type AnimationVariants =
  | "opacity"
  | "fadeIn"
  | "fadeInScale"
  | "fadeInTop"
  | "fadeInBottom"
  | "fadeInLeft"
  | "fadeInRight";
export type AnimationTransitions =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear";
