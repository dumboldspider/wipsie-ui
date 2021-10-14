import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
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
     * How large should the button be?
     */
    size?: NormalSizes;
    /**
     * Button variant
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * Button contents
     */
    label?: string;
    /**
     * Button type
     */
    type?: "button" | "submit" | "reset" | undefined;
    /**
     * Button shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    /**
     * Button Icon
     */
    icon?: any | undefined;
    /**
     * Button Icon to add on left
     */
    startIcon?: any | undefined;
    /**
     * Button Icon to add on right
     */
    endIcon?: any | undefined;
  }
>;
