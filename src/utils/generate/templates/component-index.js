module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js

export * from './${componentName}'; 
export * from './${componentName}.types'; 
`,
  extension: `.ts`,
  main: true,
});
