import { InputProps } from "../Input";

export type DatePickerProps = {
  /**
   * Fixed positioning
   */
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right"
    | "left top"
    | "left bottom"
    | "right top"
    | "right bottom";

  inputSize?: "mini" | "small" | "medium" | "large" | "xlarge";
  size?: "mini" | "small" | "medium" | "large" | "xlarge";
  leftIcon?: any;
  rightIcon?: any;
  gridSpacing?: number;
  color?: string;
  backgroundColor?: string;
  inputColor?: string;
  onSelectADate?: (...props: any) => void;
  onCancel?: () => void;
  maxYears?: number;
  width?: number | string;
  inputProps?: InputProps;
};
