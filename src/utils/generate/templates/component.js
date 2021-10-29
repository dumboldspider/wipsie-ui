module.exports = (componentName) => ({
  content:
    `// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { ${componentName}Props } from "./${componentName}.types";


export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-${componentName}" className={classnames('Wps-${componentName}', className)}>
    <style jsx>{` +
    "`" +
    `
    .Wps-${componentName}{
      color: black;
    }
    ` +
    "`" +
    `}</style>
    {children}
    </div>
);
}

 

`,
  extension: `.tsx`,
  main: false,
});
