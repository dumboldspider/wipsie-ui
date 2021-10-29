export type GridProps = React.HTMLProps<HTMLDivElement> &
  DefaultGridProps &
  (DefaultGridContainerProps | DefaultGridItemProps);

export interface DefaultGridProps {}

export interface DefaultGridContainerProps {
  /**
   * Grid item must be child of a grid container.
   */
  item?: never;
  /**
   * Grid item must be inside a grid container.
   */
  container: true;
  /**
   * Spacing between grid items.
   */
  spacing?: number;
  /**
   * Disable grid items wrapping.
   */
  noWrap?: boolean;
}

export interface DefaultGridItemProps {
  /**
   * Grid item must be child of a grid container.
   */
  item: true;
  /**
   * Grid item must be inside a grid container.
   */
  container?: never;

  /**
   * Default size (in grid units) for the grid item.
   */
  xs: number | boolean | string;
  /**
   * Size (in grid units) small breakpoint.
   */
  sm?: number | boolean | string;
  /**
   * Size (in grid units) medium breakpoint.
   */
  md?: number | boolean | string;
  /**
   * Size (in grid units) large breakpoint.
   */
  lg?: number | boolean | string;
  /**
   * Size (in grid units) extra large breakpoint.
   */
  xl?: number | boolean | string;
}

export type GridContainerProps = React.HTMLProps<HTMLDivElement> &
  DefaultGridProps &
  DefaultGridContainerProps;

export type GridItemProps = React.HTMLProps<HTMLDivElement> &
  DefaultGridProps &
  DefaultGridItemProps;
