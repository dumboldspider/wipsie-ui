import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    /**
     * If buttom component will be a chip
     */
    chip?: boolean;
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
    /**
     * Button variant
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * Button group variant if inside a button group
     */
    groupVariant?: "contained" | "outlined" | "ghost";
    /**
     * Button shape if inside a button group
     */
    groupShape?: "round" | "rounded" | "square" | undefined;
    /**
     * What background color to use if inside a button group
     */
    groupBackgroundColor?: SimpleColors | string;
    /**
     * What background color to use on hover if inside a button group
     */
    groupHoverBackgroundColor?: SimpleColors | string | null;
    /**
     * What text color to use if inside a button group
     */
    groupColor?: SimpleColors | string | null;
    /**
     * How large should the button be if inside a button group
     */
    groupSize?: NormalSizes;
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
    /**
     * If the button should max the container width
     */
    fullWidth?: boolean;
    /**
     * The content alignment
     */
    align?: "left" | "center" | "right";
  }
>;
