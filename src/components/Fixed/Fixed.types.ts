// Generated with util/create-component.js
import { Modify } from "../../types/modify";

export type FixedProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Use 'absolute', 'fixed' or 'sticky' to position the component.
     */
    type: "fixed" | "absolute" | "sticky";
    /**
     * margin spacing
     */
    spacing?: number;
    /**
     * Fixed positioning
     */
    position?:
      | "top"
      | "bottom"
      | "center"
      | "left"
      | "right"
      | "top left"
      | "top center"
      | "top right"
      | "center left"
      | "center center"
      | "center right"
      | "bottom left"
      | "bottom center"
      | "bottom right";
  }
>;
