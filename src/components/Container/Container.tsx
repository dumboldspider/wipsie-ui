// Generated with util/create-component.js
import React from "react";
import clsx from "clsx";

import { ContainerProps } from "./Container.types";


const Container: React.FC<ContainerProps> = ({ foo }) => (
    <div data-testid="Container" className={clsx('Container')}>
    <style jsx>{`
    .Container{
      color: black;
    }
    `}</style>
    {foo}
    </div>
);

export default Container;

