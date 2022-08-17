// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type SliderProps = Modify<
  React.HTMLProps<HTMLInputElement>,
  {
    /**
     * Min value of the slider.
     * @default 1
     */
    min?: number;

    /**
     * Max value of the slider.
     * @default 100
     */
    max?: number;

    /**
     * Value of the slider.
     * @default 0
     */
    value: number;

    /**
     * Props to pass to the wrapper element.
     * @default {}
     */
    wrapperProps?: React.HTMLProps<HTMLDivElement>;

    /**
     * What main color to use
     */
    color?: SimpleColors | string;

    /**
     * Slider shape radius
     */
    shape?: "round" | "rounded" | "square";

    /**
     * Slider size variants
     */
    size?: NormalSizes;

    /**
     * Width of the slider
     */
    width?: number | string;

    /**
     * Adds full width style to the slider
     */
    fullWidth?: boolean;
  }
>;
