import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type BoxProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * What background color to use
     */
    backgroundColor?:
      | SimpleColors
      | "highlight"
      | "background"
      | "shade"
      | string;
    /**
     * What background color to use on hover
     */
    hoverBackgroundColor?: SimpleColors | string | null;
    /**
     * If component has click/touch interations
     */
    clickable?: boolean;
  }
>;
