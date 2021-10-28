// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { LinkProps } from "./Link.types";


export const Link: React.FC<LinkProps> = ({ foo }) => {
  return (
    <div data-testid="Wps-Link" className={classnames('Wps-Link')}>
    <style jsx>{`
    .Wps-Link{
      color: black;
    }
    `}</style>
    {foo}
    </div>
);
}

 

