// Generated with util/create-component.js
import { Modify } from "../../types/modify";

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
  | "rotate"
  | "scale"
  | "fadeIn"
  | "fadeInScale"
  | "fadeInTop"
  | "fadeInBottom"
  | "fadeInLeft"
  | "fadeInRight"
  | "slideInTop"
  | "slideInBottom"
  | "slideInLeft"
  | "slideInRight";
export type AnimationTransitions =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear";
