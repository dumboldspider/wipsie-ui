// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { AnimationVariants, AnimationTransitions } from "../Animated";

export type BackdropProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    duration?: number;
    visible: boolean;
    transition?: AnimationTransitions;
  }
>;
