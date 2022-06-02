import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { FlexContainerProps, BoxContainerProps } from "../Flex/Flex.types";

export type BlueprintProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  BoxContainerProps &
    FlexContainerProps & {
      /**
       * What background color to use
       */
      backgroundColor?: SimpleColors | string;
      /**
       * What background color to use on hover
       */
      hoverBackgroundColor?: SimpleColors | string | null;

      /**
       * Container shape
       */
      shape?: "round" | "rounded" | "square" | undefined;
    }
>;
