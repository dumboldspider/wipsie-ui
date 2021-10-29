// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { Avatar } from "../Avatar";
import { AvatarGroupProps } from "./AvatarGroup.types";

export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const theme = useTheme();
  const {
    max = 10,
    xs = "medium",
    sm = null,
    md = null,
    lg = null,
    xl = null,
    children,
    backgroundColor = null,
    className,
    ...otherProps
  } = props;

  const childrenWithProps = React.Children.map(children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      if (index + 1 === max) {
        return (
          <Avatar
            alt={"+" + (React.Children.count(children) - max).toString()}
            xs={xs as any}
            sm={sm as any}
            md={md as any}
            lg={lg as any}
            xl={xl as any}
            bordered
            backgroundColor={backgroundColor as any}
          />
        );
      } else if (index < max) {
        return React.cloneElement(child, {
          groupXS: xs,
          groupSM: sm,
          groupMD: md,
          groupLG: lg,
          groupXL: xl,
          bordered: true,
          groupBackgroundColor: backgroundColor,
        });
      }
    }
  });

  return (
    <div
      data-testid="Wps-AvatarGroup"
      className={classnames("Wps-AvatarGroup", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-AvatarGroup {
          display: flex;
          align-items: center;
          justify-content: center;
          width: min-content;
        }
        .Wps-AvatarGroup :global(div),
        .Wps-AvatarGroup :global(a) {
          margin-left: -8%;
        }

        .Wps-AvatarGroup :global(div:first-child),
        .Wps-AvatarGroup :global(a:first-child) {
          margin-left: 0;
        }
        .Wps-AvatarGroup :global(button:last-child) {
        }
      `}</style>
      {childrenWithProps}
    </div>
  );
};
