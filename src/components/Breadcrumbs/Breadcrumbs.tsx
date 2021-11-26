// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { Typography } from "../Typography";
import { Link } from "../Link";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const theme = useTheme();
  const {
    items = [],
    divider = "/",
    activeColor = "primary",
    inactiveColor = "subtext",
    weight = null,
    dividerWeight = "500",
    variant = "body1",
    dividerVariant = "body1",
    linkComponent = null,
    spacing = 1,
    children,
    className,
    ...otherProps
  } = props;

  const Component = linkComponent || Link;

  function handleValue(value) {
    return value
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "0px";
  }

  return (
    <div
      data-testid="Wps-Breadcrumbs"
      className={classnames("Wps-Breadcrumbs", className)}
      {...otherProps}
    >
      {items.map((item, index) => {
        return (
          <Typography
            key={item.label}
            color={activeColor}
            weight={weight}
            variant={variant}
          >
            {item.inactive ? (
              <Typography
                component="span"
                color={inactiveColor}
                weight={weight}
                variant={variant}
                style={
                  index === items.length - 1
                    ? { paddingRight: 0 }
                    : {
                        paddingRight: handleValue(spacing),
                      }
                }
              >
                {item.icon && (
                  <span style={{ paddingRight: 5 }}>{item.icon}</span>
                )}
                {item.label}
              </Typography>
            ) : (
              <Component
                href={item.href}
                color={activeColor}
                style={{
                  paddingRight: handleValue(spacing),
                }}
              >
                {item.icon && (
                  <span style={{ paddingRight: 5 }}>{item.icon}</span>
                )}
                {item.label}
              </Component>
            )}
            {index !== items.length - 1 && (
              <Typography
                component="span"
                color={inactiveColor}
                weight={dividerWeight}
                variant={dividerVariant}
                style={{
                  paddingRight: handleValue(spacing),
                }}
              >
                {divider}
              </Typography>
            )}
          </Typography>
        );
      })}
      <style jsx>{`
        .Wps-Breadcrumbs {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
      {children}
    </div>
  );
};
