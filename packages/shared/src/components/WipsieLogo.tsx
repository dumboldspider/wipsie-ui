import React from "react";
import { Link, responsive } from "@wipsie/ui";
import { linkPattern } from "../configs/linkPattern";
import { serviceLinks } from "../configs/serviceLinks";

export type WipsieLogoProps = {
  width?: number | string;
  white?: boolean;
  height?: number | string;
  linkComponent?: any;
};
export const WipsieLogo = ({
  width = responsive(150, 250),
  white = false,
  height = "auto",
  linkComponent = Link,
}: WipsieLogoProps) => {
  const LinkComponent = linkComponent;

  return (
    <LinkComponent
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
      href={linkPattern({ type: "homePage" })}
    >
      <img
        src={
          white
            ? `${serviceLinks.main}/static/images/wipsie-logo-white.svg`
            : `${serviceLinks.main}/static/images/wipsie-logo.svg`
        }
        alt="Wipsie Logo"
        style={{ width: width, height: height }}
      />
    </LinkComponent>
  );
};
