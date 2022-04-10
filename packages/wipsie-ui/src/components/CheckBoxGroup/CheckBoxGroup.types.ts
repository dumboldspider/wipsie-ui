// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type CheckBoxGroupProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * What background color to use
     */
    color?: SimpleColors | string | null;
    /**
     * What text color to use
     */
    textColor?: SimpleColors | string | null;
    /**
     * How large should the button be
     */
    size?: NormalSizes;
    /**
     * Button group shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    /**
     *  Change event handler, take selected value as argument
     * */
    onChange?: (selectedIndex: number[]) => void;
    /**
     * Flex align items
     * */
    align?: "start" | "center" | "end";
    /**
     * Justify content
     * */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /**
     * Flex wrap
     * */
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    /**
     * Flex direction
     * */
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    /**
     * If the buttons should max the container width
     */
    fullWidth?: boolean;
    /**
     * spacing between elements
     */
    spacing?: number;
    /**
     * max elements to be selected
     */
    max?: number;
  }
>;
