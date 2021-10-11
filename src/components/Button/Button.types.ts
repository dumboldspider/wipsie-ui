import { Modify } from "../../types/modify";

type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    /**
     * What background color to use
     */
    backgroundColor?: string;
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
  }
>;

export default ButtonProps;
