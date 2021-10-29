// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type IconButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    /**
     * Icon Button variant
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * What background color to use
     */
    backgroundColor?: SimpleColors | string;
    /**
     * What background color to use on hover
     */
    hoverBackgroundColor?: SimpleColors | string | null;
    /**
     * What icon color to use
     */
    color?: SimpleColors | string | null;
    /**
     * How large should the button be?
     */
    size?: NormalSizes;
    /**
     * Button Icon
     */
    icon?: any | undefined;
    /**
     * Button type
     */
    type?: "button" | "submit" | "reset" | undefined;
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
     * How large should the button be if inside a button group
     */
    groupSize?: NormalSizes;
    /**
     * What background color to use on hover if inside a button group
     */
    groupHoverBackgroundColor?: SimpleColors | string | null;
    /**
     * What text color to use if inside a button group
     */
    groupColor?: SimpleColors | string | null;
  }
>;
