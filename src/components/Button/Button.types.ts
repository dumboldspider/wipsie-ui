import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    /**
     * What background color to use
     */
    backgroundColor?: SimpleColors | string;
    /**
     * What background color to use on hover
     */
    hoverBackgroundColor?: string | null;
    /**
     * What text color to use
     */
    color?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
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
  }
>;

export default ButtonProps;
