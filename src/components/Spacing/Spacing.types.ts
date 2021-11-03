import { Modify } from "../../types/modify";
import { BreakpointCombo } from "../Flex/Flex.types";

export type SpacingProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Spacing Height
     */
    height?: string | number | BreakpointCombo<string | number>;
    /**
     * Spacing Width
     */
    width?: string | number | BreakpointCombo<string | number>;
  }
>;
