import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type SwitchProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Switch state
     */
    checked: boolean;
    /**
     * Props for the wrapper
     */
    wrapperProps?: SwitchWrapperProps;
    /**
     * Switch start label
     */
    startLabel?: any;
    /**
     * Switch end label
     */
    endLabel?: any;
    /**
     * Icon component
     */
    icon?: any;
    /**
     * What text color to use
     */
    color?: SimpleColors | string;
    /**
     * Switch size
     */
    size?: NormalSizes;
    /**
     * Loader size
     */
    iconColor?: string;
  }
>;

export type SwitchWrapperProps = Modify<React.HTMLProps<HTMLDivElement>, {}>;
