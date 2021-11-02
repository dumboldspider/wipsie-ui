// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { SkeletonProps } from "./Skeleton.types";


export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-Skeleton" className={classnames('Wps-Skeleton', className)}>
    <style jsx>{`
    .Wps-Skeleton{
      color: black;
    }
    `}</style>
    {children}
    </div>
);
}

 

