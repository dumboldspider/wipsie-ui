import { PopoverProps } from "../Popover";
import { InputProps } from "../Input";

export type DateElement = {
  year: number;
  month: number;
  day: number;
};

export type DatePickerProps = {
  /**
   * Fixed positioning
   */
  position?: PopoverProps["position"];
  inputSize?: InputProps["size"];
  size?: InputProps["size"];
  leftIcon?: any;
  rightIcon?: any;
  gridSpacing?: number;
  color?: string;
  backgroundColor?: string;
  inputColor?: string;
  onSelectADate?: (date: DateElement) => void;
  onCancel?: () => void;
  maxYears?: number;
  width?: number | string;
  inputProps?: InputProps;
  wrapperProps?: PopoverProps;
  startAdornment?: InputProps["startAdornment"];
  endAdornment?: InputProps["endAdornment"];
  error?: InputProps["error"];
  helperText?: InputProps["helperText"];
  label?: InputProps["label"];
  placeholder?: InputProps["placeholder"];
  name?: InputProps["name"];
  fullWidth?: InputProps["fullWidth"];
  disabled?: InputProps["disabled"];
  required?: InputProps["required"];
  value?: any;
  onChange?: InputProps["onChange"];
  onBlur?: InputProps["onBlur"];
};
