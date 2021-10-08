module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import styles from "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <div data-testid="${componentName}" className={styles.sample}>{foo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`,
  main: false
});
