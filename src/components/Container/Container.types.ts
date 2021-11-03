import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { FlexContainerProps, BoxContainerProps } from "../Flex/Flex.types";

export type ContainerProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  BoxContainerProps &
    FlexContainerProps & {
      /**
       * What background color to use
       */
      backgroundColor?:
        | SimpleColors
        | "highlight"
        | "background"
        | "shade"
        | string;
      /**
       * What background color to use on hover
       */
      hoverBackgroundColor?: SimpleColors | string | null;
      /**
       * If component has click/touch interations
       */
      clickable?: boolean;
      /**
       * Container shape
       */
      shape?: "round" | "rounded" | "square" | undefined;
    }
>;
