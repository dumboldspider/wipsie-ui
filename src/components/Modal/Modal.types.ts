// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { AnimationVariants, AnimationTransitions } from "../Animated";

export type ModalProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    id: string;
    open: boolean;
    duration?: number;
    animation?: AnimationVariants;
    onCloseEnd?: () => void;
    onCloseStart?: () => void;
    onOpenEnd?: () => void;
    onOpenStart?: () => void;
    onBackdropClick?: () => void;
    onEscapeKeyDown?: () => void;
    backdropColor?: SimpleColors;
    disableEscapeKeyDown?: boolean;
    disableBackdropClick?: boolean;
    disableScrollLock?: boolean;
    closeKey?: string;
  }
>;
