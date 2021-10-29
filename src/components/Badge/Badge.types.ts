import { SimpleColors } from "../../config/propTypes";

export type BadgeProps = React.HTMLProps<HTMLSpanElement> &
  (DotBadgeProps | ContentBadgeProps);

interface DefaultBadgeProps {
  /**
   * If `true`, the badge will be invisible.
   */
  invisible?: boolean;
  /**
   * What background color to use
   */
  color?: SimpleColors | string;
  /**
   * What text color to use
   */
  textColor?: SimpleColors | string | null;
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
   * Badge content
   */
  content: any;
  /**
   * Dot Badge style
   */
  dot?: never;
}
interface DotBadgeProps extends DefaultBadgeProps {
  /**
   * Badge content
   */
  content?: never;
  /**
   * Dot Badge style
   */
  dot: true;
}
