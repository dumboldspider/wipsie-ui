import { Modify } from "../../types/modify";
import {
  TypographyVariants,
  SimpleColors,
  NormalWeights,
} from "../../config/propTypes";

export type TypographyProps = Modify<
  React.HTMLProps<HTMLHeadingElement | HTMLParagraphElement>,
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
    /**
     * Font weight
     */
    weight?: NormalWeights | null;
    /**
     * Text align
     */
    align?: "left" | "center" | "right" | "justify";
  }
>;
