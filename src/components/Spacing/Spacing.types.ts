import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type SpacingProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * What background color to use
     */
    height: string | number;
  }
>;
