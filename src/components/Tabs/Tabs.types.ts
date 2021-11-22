// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";
import { HorizontalListProps } from "../HorizontalList";

export type TabsProps = Modify<
  HorizontalListProps,
  {
    items: TabItems[];
    value: number;
    onChange: (value: number) => void;

    /**
     * Button group shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    /**
     * Button variant to pass to children
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * What background color to use
     */
    backgroundColor?: SimpleColors | string;
    /**
     * What background color to use on hover
     */
    hoverBackgroundColor?: SimpleColors | string | null;
    /**
     * What text color to use
     */
    tabColor?: SimpleColors | string | null;
    /**
     * How large should the button be
     */
    size?: NormalSizes;
    /**
     * The content alignment
     */
    align?: "left" | "center" | "right" | "spaced";
    /**
     * What text color to use on hover
     */
    hoverTabColor?: SimpleColors | string | null;
  }
>;

export type TabItems = {
  label: string;
  icon: any;
};

export type TabPanelProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    value: number;
    index: number;
  }
>;
