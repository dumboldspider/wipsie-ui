// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type DividerProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Container shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    direction?: "horizontal" | "vertical";
    spacing?: number | string;
    gap?: number | string;
    volume?: number;
    color?: SimpleColors | string;
  }
>;
