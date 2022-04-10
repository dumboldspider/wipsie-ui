import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";
import { FlexContainerProps, BoxContainerProps } from "../Flex/Flex.types";

export type ContainerProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  BoxContainerProps &
    FlexContainerProps & {
      /**
       * What background image to use
       */
      backgroundImage?: string;
      /**
       * Background image properties
       */
      backgroundProps?: {
        repeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
        position?: "center" | "top" | "bottom" | "left" | "right";
        size?: "cover" | "contain" | "auto";
      };
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
       * If component has hover interations
       */
      hoverable?: boolean;
      /**
       * Container shape
       */
      shape?: "round" | "rounded" | "square" | undefined;
    } & (
      | ContainerBlurProps
      | ContainerDefaultVariants
      | ContainerNeumorphicProps
    )
>;

type ContainerDefaultVariants = {
  /**
   * Container shape
   */
  variant?: "flat" | "outlined" | "ghost" | undefined;
};

type ContainerBlurProps = {
  variant?: "frosted" | "glassmorphic";
  blur?: number;
  elevation?: number;
  elevationHover?: number;
};

type ContainerNeumorphicProps = {
  variant?: "neumorphic";
  elevation?: number;
  elevationHover?: number;
};
