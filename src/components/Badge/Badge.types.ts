import { SimpleColors } from "../../config/propTypes";

export type BadgeProps = React.HTMLProps<HTMLSpanElement> &
  (DotBadgeProps | ContentBadgeProps);

interface DefaultBadgeProps {
  /**
   * Position tolerance number.
   */
  tolerance?: number;
  /**
   * If `true`, the badge will be invisible.
   */
  invisible?: boolean;
  /**
   * What background color to use
   */
  color?: SimpleColors | string;
  /**
   * If should have a border to differ from the background color
   */
  bordered?: boolean;
  /**
   * Badge content, can be a string or a number or a React component
   */
  icon?: any;
  /**
   * What text color to use
   */
  textColor?: SimpleColors | string | null;
  /**
   * If should show the content when it is zero
   */
  showZero?: boolean;
  /**
   * Dot Badge style
   */
  dotSize?: string;
  /**
   * What color to use on border
   */
  borderColor?: SimpleColors | string;
  /**
   * Wrapper div element props
   */
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  /**
   * Badge alignment followed by VERTICAL HORIZONTAL
   * possible values:
   * VERTICAL: (top, center, bottom)
   * HORIZONTAL: (left, right)
   */
  position?:
    | "top"
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top left"
    | "top right"
    | "center left"
    | "center right"
    | "bottom left"
    | "bottom right";
}
interface ContentBadgeProps extends DefaultBadgeProps {
  /**
   * Badge content, can be a string or a number or a React component
   */
  content?: any;
  /**
   * Dot Badge style
   */
  dot?: never;
}
interface DotBadgeProps extends DefaultBadgeProps {
  /**
   * Badge content, can be a string or a number or a React component
   */
  content?: never;
  /**
   * Dot Badge style
   */
  dot: true;
}
