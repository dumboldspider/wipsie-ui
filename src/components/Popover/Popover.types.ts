// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { BackdropProps } from "../Backdrop";

export type PopoverProps = Modify<
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
    backdropProps?: Omit<BackdropProps, "visible">;
    /**
     * Prop description
     */
    content: any;
    /**
     * margin spacing
     */
    spacing?: number | string;
    /**
     * hover margin spacing
     */
    hoverSpacing?: number | string;
    /**
     * Fixed positioning
     */
    position?:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "top left"
      | "top right"
      | "bottom left"
      | "bottom right"
      | "left top"
      | "left bottom"
      | "right top"
      | "right bottom";
    /**
     * handle custom visibility
     * */
    visible?: boolean;
    clickHandler?: () => void;
    /**
     * Popover shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    /**
     * Arrow is enabled
     * */
    arrow?: boolean;
    /**
     * Arrow size
     * */
    arrowSize?: number | string;
    /**
     * Popover background color
     * */
    backgroundColor?: SimpleColors | string;
    /**
     * Popover color
     * */
    textColor?: SimpleColors | string;
    /**
     * Container width
     * */
    width?: number | string;
    /**
     * Container height
     * */
    height?: number | string;
    /**
     * Container max width
     * */
    maxWidth?: number | string;
    /**
     * Container max height
     * */
    maxHeight?: number | string;
    /**
     * Container min width
     * */
    minWidth?: number | string;
    /**
     * Container min height
     * */
    minHeight?: number | string;
  }
>;
