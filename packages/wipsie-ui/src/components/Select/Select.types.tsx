// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { SimpleColors, NormalSizes } from "../../config/propTypes";

export type SelectProps = Modify<
  React.HTMLProps<HTMLSelectElement>,
  {
    /**
     * Select change
     */
    maxHeight?: number | string;
    /**
     * Select change
     */
    onChange?: (value: any) => void;
    /**
     * Select value
     */
    value?: any;
    /**
     * Select placeholder text
     */
    placeholder?: string;
    /**
     * Input Adornment to add on left
     */
    startAdornment?: any | undefined;
    /**
     * Input Adornment to add on right
     */
    endAdornment?: any | undefined;
    /**
     * If the input should max the container width
     */
    fullWidth?: boolean;
    /**
     * What background color to use
     */
    color?: SimpleColors | string;
    /**
     * What text color to use
     */
    textColor?: SimpleColors | string | null;
    /**
     * What text color to use
     */
    borderColor?: SimpleColors | string | null;
    /**
     * How large should the button be
     */
    size?: NormalSizes;
    /**
     * input variant
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * If the input is required
     */
    required?: boolean;
    /**
     * If the input is disabled
     */
    disabled?: boolean;
    /**
     * If error is displayed
     */
    error?: boolean;
    /**
     * If success is displayed
     */
    success?: boolean;
    /**
     * Text to show on error or text
     */
    helperText?: string;
    /**
     * Button shape
     */
    shape?: "round" | "rounded" | "square" | undefined;
    /**
     * The content alignment
     */
    align?: "left" | "center" | "right" | "spaced";
    /**
     * Props for the wrapper
     */
    wrapperProps?: React.HTMLProps<HTMLDivElement>;
    /**
     * Props for the wrapper
     */
    inputProps?: React.HTMLProps<HTMLSelectElement>;
  }
>;
