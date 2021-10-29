import { Modify } from "../../types/modify";
import { TypographyVariants, SimpleColors } from "../../config/propTypes";

export type TypographyProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    /**
     * Component to render the Typography
     */
    component?: any;
    /**
     * Text color to use
     */
    color?: SimpleColors | "text" | "subtext" | string;
    /**
     * Which theme variant to use
     */
    variant?: TypographyVariants;
  }
>;
