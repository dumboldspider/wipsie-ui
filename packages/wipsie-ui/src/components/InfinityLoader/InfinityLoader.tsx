import React from "react";
import { useEffect, useState } from "react";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";
import { InfinityLoaderProps } from "./InfinityLoader.types";

export function InfinityLoader(props: InfinityLoaderProps) {
  var initialObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const {
    totalPages = 9999,
    observerOptions,
    children,
    loadingComponent,
    showLoading = true,
    getData = () => Promise.resolve({}),
    onLoadMore = null,
    onSuccess = null,
    onError = null,
    wrapperStyles = {},
    loadingStyles = {},
    listStyles = {},
    renderItem = null,
  } = props;

  const { containerRef, isVisible } = useElementOnScreen(
    observerOptions || initialObserverOptions
  );

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadData(page);
  }, [isVisible]);

  function loadData(newPage: number) {
    if (newPage > totalPages) return;

    setLoading(true);

    onLoadMore && onLoadMore(newPage);

    getData(newPage)
      .then((res) => {
        setData([...data, ...res]);
        setLoading(false);
        setPage(newPage + 1);
        onSuccess && onSuccess(res);
      })
      .catch((error) => {
        setLoading(false);
        onError && onError(error);
      });
  }

  return (
    <div style={wrapperStyles}>
      <div style={{ display: "flex", flexDirection: "column", ...listStyles }}>
        {children}
        {data.map((value) => {
          return renderItem ? (
            renderItem(value)
          ) : (
            <div>{JSON.stringify(value)}</div>
          );
        })}
      </div>

      <div ref={containerRef} style={{ width: "100%", ...loadingStyles }}>
        {loading && showLoading && loadingComponent}
      </div>
    </div>
  );
}
