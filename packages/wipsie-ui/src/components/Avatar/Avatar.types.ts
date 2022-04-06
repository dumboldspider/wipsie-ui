// Generated with util/create-component.js
import { SimpleColors } from "../../config/propTypes";

export type AvatarProps = DefaultAvatarProps &
  (AvatarDivProps | AvatarLinkProps);

type AvatarLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  /**
   * Link to forwards to
   */
  href: string;

  /**
   * What background color to use
   */
  wrapperProps?: React.HTMLProps<HTMLAnchorElement>;
};

type AvatarDivProps = React.HTMLProps<HTMLDivElement> & {
  /**
   * Link to forwards to
   */
  href?: never;

  /**
   * What background color to use
   */
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
};

interface DefaultAvatarProps {
  children?: never;
  /**
   * Avatar image alt text
   */
  alt?: string;
  /**
   * Avatar image source
   */
  src?: string;
  /**
   * Avatar image source to use when data is not available
   */
  brokenSrc?: string;
  /**
   * Default size (in default sizes or css width) for the grid item.
   */
  xs?: number | boolean | string;
  /**
   * Size (in default sizes or css width) small breakpoint.
   */
  sm?: number | boolean | string;
  /**
   * Size (in default sizes or css width) medium breakpoint.
   */
  md?: number | boolean | string;
  /**
   * Size (in default sizes or css width) large breakpoint.
   */
  lg?: number | boolean | string;
  /**
   * Size (in default sizes or css width) extra large breakpoint.
   */
  xl?: number | boolean | string;
  /**
   * Shape of the avatar in a group
   */
  groupShape?: "round" | "rounded" | "square" | undefined;
  /**
   * Default size (in default sizes or css width) for the grid item.
   */
  groupXS?: number | boolean | string;
  /**
   * Size (in default sizes or css width) small breakpoint.
   */
  groupSM?: number | boolean | string;
  /**
   * Size (in default sizes or css width) medium breakpoint.
   */
  groupMD?: number | boolean | string;
  /**
   * Size (in default sizes or css width) large breakpoint.
   */
  groupLG?: number | boolean | string;
  /**
   * Size (in default sizes or css width) extra large breakpoint.
   */
  groupXL?: number | boolean | string;
  /**
   * What background color to use
   */
  backgroundColor?: SimpleColors | string;
  /**
   * What background avatar to use if inside a avatar group
   */
  groupBackgroundColor?: SimpleColors | string;
  /**
   * What text color to use
   */
  textColor?: SimpleColors | string;
  /**
   * What background color to use
   */
  imageProps?: React.HTMLProps<HTMLImageElement>;
  /**
   * Avatar Icon
   */
  icon?: any | undefined;
  /**
   * If should have a border to differ from the background color
   */
  bordered?: boolean;
  /**
   * If is clickable
   */
  clickable?: boolean;
  /**
   * What  color to use on border
   */
  borderColor?: SimpleColors | string;
  /**
   * Shape of the avatar
   */
  shape?: "round" | "rounded" | "square" | undefined;
}
