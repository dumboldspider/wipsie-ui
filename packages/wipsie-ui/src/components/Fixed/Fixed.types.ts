// Generated with util/create-component.js
import { Modify } from "../../types/modify";

export type FixedProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Use 'absolute', 'fixed' or 'sticky' to position the component.
     */
    type: FixedTypes;
    /**
     * margin spacing
     */
    spacing?: number;
    /**
     * Fixed positioning
     */
    position?: FixedPositions;
  }
>;

export type FixedTypes = "fixed" | "absolute" | "sticky";

export type FixedPositions =
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
