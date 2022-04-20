import React from "react";

export const BaseMenu = React.forwardRef(
  (
    { className, ...props }: React.PropsWithChildren<any>,
    ref: React.Ref<any>
  ) => <div {...props} ref={ref} />
);
