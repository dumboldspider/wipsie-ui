import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type BadgeProps = Modify<
  React.HTMLProps<HTMLSpanElement>,
  {
    /**
     * Badge content
     */
    content?: any;
    /**
     * What background color to use
     */
    color?: SimpleColors | string;
    /**
     * What text color to use
     */
    textColor?: SimpleColors | string | null;
    /**
     * Wrapper div element props
     */
    wrapperProps?: React.HTMLProps<HTMLDivElement>;
    /**
     * Badge alignment followed by VERTICAL HORIZONTAL
     * possible values:
     * VERTICAL: (top, center, bottom)
     * HORIZONTAL: (left, right)
     */
    position?:
      | "top"
      | "bottom"
      | "center"
      | "left"
      | "right"
      | "top left"
      | "top right"
      | "center left"
      | "center right"
      | "bottom left"
      | "bottom right";
  }
>;
