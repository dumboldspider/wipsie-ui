module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js

export * from './${componentName}'; 
`,
  extension: `.ts`,
  main: true
});
