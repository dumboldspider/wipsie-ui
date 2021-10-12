// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { ContainerProps } from "./Container.types";

const Container: React.FC<ContainerProps> = ({ foo }) => (
  <div data-testid="Container" className={classnames("Container")}>
    <style jsx>{`
      .Container {
        color: black;
      }
    `}</style>
    {foo}
  </div>
);

export default Container;
