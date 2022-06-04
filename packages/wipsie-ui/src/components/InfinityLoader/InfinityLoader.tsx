import React from "react";
import { useEffect, useState } from "react";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";
import { InfinityLoaderProps } from "./InfinityLoader.types";

type ActionVariants = "add" | "set";

export function InfinityLoader(props: InfinityLoaderProps) {
  var initialObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const {
    totalPages = -1,
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
    renderParent = "div",
    dependencies = [],
  } = props;

  const { containerRef, isVisible } = useElementOnScreen(
    observerOptions || initialObserverOptions
  );

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  // Data fetch effect
  useEffect(() => {
    loadData(page, "add");
  }, [isVisible]);

  // Reload dependencies Effect
  useEffect(() => {
    setData([]);
    setPage(0);
    loadData(0, "set");
  }, [...dependencies]);

  function loadData(newPage: number, action: ActionVariants = "add") {
    // if the new page to load is bigger than the total pages, do nothing
    // ignore when total pages is infinite
    if (newPage > totalPages && totalPages !== -1) return;

    setLoading(true);

    onLoadMore && onLoadMore(newPage);

    getData(newPage)
      .then((res) => {
        switch (action) {
          case "add":
            setData([...data, ...res]);
            break;
          default:
          case "set":
            setData(res);
            break;
        }

        setLoading(false);
        setPage(newPage + 1);
        onSuccess && onSuccess(res);
      })
      .catch((error) => {
        setLoading(false);
        onError && onError(error);
      });
  }

  const baseParentStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const ParentComponent = renderParent || "div";

  return (
    <div style={wrapperStyles}>
      <ParentComponent
        style={
          renderParent === "div" ? { ...baseParentStyles, ...listStyles } : {}
        }
      >
        {children}
        {data.map((value, index) => {
          return renderItem ? (
            renderItem(value, index)
          ) : (
            <div>{JSON.stringify(value)}</div>
          );
        })}

        {!loading && (
          <div
            ref={containerRef}
            style={{ width: "100%", ...loadingStyles }}
          ></div>
        )}
        {loading && showLoading && loadingComponent}
      </ParentComponent>
    </div>
  );
}
