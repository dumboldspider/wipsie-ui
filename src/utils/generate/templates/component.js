module.exports = (componentName) => ({
  content:
    `// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { ${componentName}Props } from "./${componentName}.types";


export const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => {
  return (
    <div data-testid="Wps-${componentName}" className={classnames('Wps-${componentName}')}>
    <style jsx>{` +
    "`" +
    `
    .Wps-${componentName}{
      color: black;
    }
    ` +
    "`" +
    `}</style>
    {foo}
    </div>
);
}

 

`,
  extension: `.tsx`,
  main: false,
});
