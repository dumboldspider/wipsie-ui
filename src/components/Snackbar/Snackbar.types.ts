// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { AnimationVariants } from "../Animated";
import { FixedTypes, FixedPositions } from "../Fixed";
import { BackdropProps } from "../Backdrop";
import { PortalProps } from "../Portal";

export type SnackbarProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  (
    | {
        backdrop: true;
        onBackdropClick: React.MouseEventHandler<HTMLElement>;
      }
    | {
        backdrop?: false;
        onBackdropClick?: React.MouseEventHandler<HTMLElement>;
      }
  ) & {
    backdropColor?: SimpleColors;
    onBackdropClick?: () => void;
    backdropProps?: Omit<BackdropProps, "visible">;

    portalProps?: PortalProps;

    id: string;
    open: boolean;
    duration?: number;
    animation?: AnimationVariants;
    /**
     * Use 'absolute', 'fixed' or 'sticky' to position the component.
     */
    type?: FixedTypes;
    /**
     * margin spacing
     */
    spacing?: number;
    /**
     * Fixed positioning
     */
    position?: FixedPositions;
    /**
     * Inline Css Styles
     */
    style?: React.CSSProperties;
    /**
     * If the container should max the parent width
     */
    fullWidth?: boolean;
    /**
     * If the container should max the parent height
     */
    fullHeight?: boolean;
  }
>;
