// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type AccordionProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Accordion's content
     */
    panels: {
      label: string;
      content: any;
      icon?: any;
    }[];
    /**
     * Accordion's panel styles
     */
    innerStyle?: React.CSSProperties;
    /**
     * Accordion's panel content styles
     */
    contentStyle?: React.CSSProperties;
    /**
     * Accordion's wrapper styles
     */
    wrapperStyle?: React.CSSProperties;
    /**
     * Accordion's label styles
     */
    labelStyle?: React.CSSProperties;
    /**
     * Accordion shape if inside a button group
     */
    shape?: "round" | "rounded" | "square" | undefined;
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
     * What color to use for the label
     * */
    labelColor?: SimpleColors | "highlight" | "background" | "shade" | string;
    /**
     * What color to use for the label
     * */
    labelBackgroundColor?:
      | SimpleColors
      | "highlight"
      | "background"
      | "shade"
      | string;
    /**
     * What color to use for the label
     * */
    labelActiveColor?:
      | SimpleColors
      | "highlight"
      | "background"
      | "shade"
      | string;
    /**
     * What color to use for the label
     * */
    labelActiveBackgroundColor?:
      | SimpleColors
      | "highlight"
      | "background"
      | "shade"
      | string;
    /**
     * What color to use for the content
     * */
    contentColor?: SimpleColors | "highlight" | "background" | "shade" | string;
    /**
     * Accordion's size
     */
    size?: NormalSizes;
  }
>;
