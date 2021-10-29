// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type ButtonGroupProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Button group shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    /**
     * Button group orientation
     */
    orientation?: "vertical" | "horizontal" | undefined;
  }
>;
