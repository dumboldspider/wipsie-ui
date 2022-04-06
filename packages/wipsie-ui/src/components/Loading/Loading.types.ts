import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type LoadingProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * What text color to use
     */
    color?: SimpleColors | string;
    /**
     * Loader size
     */
    size?: NormalSizes;
    /**
     * Loader size
     */
    type?: "closer" | "dots" | "circle" | "orbit" | "coin" | "rings";
  }
>;
