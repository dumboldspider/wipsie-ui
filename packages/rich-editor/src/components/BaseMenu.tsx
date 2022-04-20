import React from "react";
import { OrNull } from "../../types/or-null";

export const BaseMenu = React.forwardRef(
  (
    { className, ...props }: React.PropsWithChildren<any>,
    ref: React.Ref<OrNull<HTMLDivElement>>
  ) => <div {...props} ref={ref} />
);
