module.exports = (componentName) => ({
  content:
    `// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { ${componentName}Props } from "./${componentName}.types";


const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <div data-testid="${componentName}" className={classnames('${componentName}')}>
    <style jsx>{` +
    "`" +
    `
    .${componentName}{
      color: black;
    }
    ` +
    "`" +
    `}</style>
    {foo}
    </div>
);

export default ${componentName};

`,
  extension: `.tsx`,
  main: false,
});
