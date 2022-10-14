// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { AnimationVariants, AnimationTransitions } from "../Animated";
import { BackdropProps } from "../Backdrop";
import { PortalProps } from "../Portal";
import { FlexProps } from "../Flex";

export type ModalProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    noPortal?: boolean;
    portalProps?: Omit<PortalProps, "children" | "id" | "visible">;

    id: string;
    open: boolean;
    duration?: number;
    animation?: AnimationVariants;
    transition?: AnimationTransitions;
    onCloseEnd?: () => void;
    onCloseStart?: () => void;
    onOpenEnd?: () => void;
    onOpenStart?: () => void;
    onBackdropClick?: () => void;
    onEscapeKeyDown?: () => void;
    backdropColor?: SimpleColors;
    backdropProps?: Omit<BackdropProps, "visible">;
    disableEscapeKeyDown?: boolean;
    disableBackdropClick?: boolean;
    disableScrollLock?: boolean;
    closeKey?: string;
    position?: "fixed" | "absolute" | "sticky" | "relative";
    containerProps?: Omit<FlexProps, "ref">;
  }
>;
