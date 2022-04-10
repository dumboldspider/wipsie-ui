module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
  import { Modify } from "../../types/modify";
import { SimpleColors } from "../../config/propTypes";

export type ${componentName}Props =  Modify<
React.HTMLProps<HTMLDivElement>, {
  /**
   * Prop description
   */
    foo: string;
}
>;
`,
  extension: `.types.ts`,
  main: false,
});
