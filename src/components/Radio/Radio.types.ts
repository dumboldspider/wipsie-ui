// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type RadioProps = Modify<
  React.HTMLProps<HTMLLabelElement>,
  {
    children?: never;
    /**
     * Checkbox label
     */
    label?: any;
    /**
     * What text color to use
     */
    textColor?: SimpleColors | string | null;
    /**
     * What color to use
     */
    color?: SimpleColors | string | null;
    /**
     * What text color to use
     */
    groupTextColor?: SimpleColors | string | null;
    /**
     * What color to use
     */
    groupColor?: SimpleColors | string | null;
    /**
     * How large should the component be
     */
    size?: NormalSizes;
    /**
     * How large should the component be
     */
    groupSize?: NormalSizes;

    /**
     *  Icon to add on left
     */
    icon?: any | undefined;
    /**
     *  Icon to add on left
     */
    inputProps?: React.HTMLProps<HTMLInputElement>;
  }
>;
