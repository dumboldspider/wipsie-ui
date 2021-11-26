// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import {
  SimpleColors,
  NormalWeights,
  TypographyVariants,
} from "../../config/propTypes";
import { BreakpointCombo } from "../Flex/Flex.types";

export type BreadcrumbsProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    items: BreadcrumbsItemProps[];
    divider?: string;
    activeColor?: "text" | "subtext" | "background" | SimpleColors | string;
    inactiveColor?: "text" | "subtext" | "background" | SimpleColors | string;
    weight?: NormalWeights;
    dividerWeight?: NormalWeights;
    variant?: TypographyVariants;
    dividerVariant?: TypographyVariants;
    /**
     * Spacing
     */
    spacing?: string | number | BreakpointCombo<string | number>;
    linkComponent?: React.ElementType | string;
  }
>;

type BreadcrumbsItemProps = {
  label: string;
  href?: string;
  icon?: any;
  inactive?: boolean;
};
