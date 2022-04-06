// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

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
    /**
     * Button variant to pass to children
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * If the buttons should max the container width
     */
    fullWidth?: boolean;
    /**
     * If the buttons should max the container height
     */
    fullHeight?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: SimpleColors | string;
    /**
     * What background color to use on hover
     */
    hoverBackgroundColor?: SimpleColors | string | null;
    /**
     * What text color to use
     */
    color?: SimpleColors | string | null;
    /**
     * How large should the button be
     */
    size?: NormalSizes;
  }
>;
