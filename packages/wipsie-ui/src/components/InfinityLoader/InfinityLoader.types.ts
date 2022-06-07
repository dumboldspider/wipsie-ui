import { Modify } from "../../types/modify";
import { ElementOnScreenOptions } from "../../hooks/useElementOnScreen";

export type InfinityLoaderProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  InfiniteLoaderType
>;

export type InfiniteLoaderType = {
  totalPages?: number;
  observerOptions?: ElementOnScreenOptions;
  getData: (page: number) => Promise<any>;
  children?: React.ReactChildren;
  loadingComponent?: React.ReactElement;
  showLoading?: boolean;
  onLoadMore?: (page: number) => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  wrapperStyles?: React.CSSProperties;
  loadingStyles?: React.CSSProperties;
  listStyles?: React.CSSProperties;
  renderItem?: (item: any, index: number) => JSX.Element;
  renderParent?: (props: any) => JSX.Element;
  dependencies?: React.DependencyList | undefined;
};
