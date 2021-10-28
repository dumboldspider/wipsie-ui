import { Modify } from "../../types/modify";

export type SpacingProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * What background color to use
     */
    height: string | number;
  }
>;
