// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type AvatarGroupProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Max items in avatar group
     */
    max?: number;
    /**
     * What background color to use
     */
    backgroundColor?: SimpleColors | string;
    /**
     * Default size (in default sizes or css width) for the grid item.
     */
    xs?: number | boolean | string;
    /**
     * Size (in default sizes or css width) small breakpoint.
     */
    sm?: number | boolean | string;
    /**
     * Size (in default sizes or css width) medium breakpoint.
     */
    md?: number | boolean | string;
    /**
     * Size (in default sizes or css width) large breakpoint.
     */
    lg?: number | boolean | string;
    /**
     * Size (in default sizes or css width) extra large breakpoint.
     */
    xl?: number | boolean | string;
  }
>;
