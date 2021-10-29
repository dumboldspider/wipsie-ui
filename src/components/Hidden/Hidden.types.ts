// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type HiddenProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Default hidden state
     */
    xs?: boolean;
    /**
     * hidden state for small breakpoint.
     */
    sm?: boolean;
    /**
     * hidden state for medium breakpoint.
     */
    md?: boolean;
    /**
     * hidden state for large breakpoint.
     */
    lg?: boolean;
    /**
     * hidden state for extra large breakpoint.
     */
    xl?: boolean;
  }
>;
