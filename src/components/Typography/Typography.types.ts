import { Modify } from "../../types/modify";
import { TypographyVariants, SimpleColors } from "../../config/propTypes";

type TypographyProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    /**
     * Component to render the Typography
     */
    component?: any;
    /**
     * Which theme variant to use
     */
    variant?: TypographyVariants;
    /**
     * Text color to use
     */
    color?: SimpleColors | string;
  }
>;

export default TypographyProps;
