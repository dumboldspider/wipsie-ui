const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "");
const READ_DIR = path.join(__dirname, "svg");
const OUT_DIR = path.join(__dirname, "icons");

const files = fs.readdirSync(READ_DIR);

// Replaces start
const COMPONENT_START = (componentName) => `
import React from "react";
import { IconProps } from "../Icon.types";

export const ${componentName} = ({
  size = "1em", 
  stroke = "inherit", 
  fill, 
  align = "bottom",
  strokeWidth = 2, 
  strokeLinecap = "round", 
  strokeLinejoin = "round"
}: IconProps) => {

  return (
`;

const COMPONENT_END = () => `
  );
};
`;

const SVG_PROPS = `width="24" height="24" viewBox="0 0 24 24" fill="none"`;
const SVG_PROPS_REPLACE = `
viewBox="0 0 24 24" 
width={size} 
height={size} 
fill={fill || "none"} 
style={{ 
  stroke: stroke,
  display: "inline-block",
  verticalAlign: align,
  transition: "all 0.3s ease-in-out", 
}}`;

const PATH_PROPS = `stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
const PATH_PROPS_REPLACE = `
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}`;
// Replaces end

// Get file data start
const fileNames = files
  .filter((file) => file.endsWith(".svg"))
  .map((file) => {
    return {
      name:
        file
          .replace(".svg", "")
          .split("-")
          .map((s) => s[0].toUpperCase() + s.slice(1))
          .join("") + "Icon",
      file,
    };
  });
// get file data end

// clean folder
execSync("rm -rf " + OUT_DIR);
execSync("mkdir -p " + OUT_DIR);
execSync("rm -rf " + path.join(ROOT_DIR, "index.ts"));
console.log("Cleaned");

fileNames.forEach(({ name, file }) => {
  // read the file content as string
  const fileContent = fs.readFileSync(READ_DIR + "/" + file, "utf8");

  const FileFinal =
    COMPONENT_START(name) +
    fileContent
      .replaceAll(SVG_PROPS, SVG_PROPS_REPLACE)
      .replaceAll(PATH_PROPS, PATH_PROPS_REPLACE) +
    COMPONENT_END();

  // write the file
  fs.writeFileSync(OUT_DIR + "/" + name + ".tsx", FileFinal, (err) => {
    console.log(err);
  });
});

console.log("Created components");

const FinalIndex =
  fileNames
    .map(({ name }) => `export { ${name} } from "./icons/${name}";`)
    .join("\n") +
  "\n" +
  `export type { IconProps } from "./Icon.types";`;

fs.writeFileSync(ROOT_DIR + "/index.ts", FinalIndex, (err) => {
  console.log(err);
});

console.log("Created index");
