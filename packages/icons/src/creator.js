const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "");
const READ_DIR = path.join(__dirname, "svg");
const OUT_DIR = path.join(__dirname, "icons");

const files = fs.readdirSync(READ_DIR);

// Replaces start
const COMPONENT_START = (componentName, viewBox) => `
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
    <svg 
      viewBox="${viewBox}" 
      width={size} 
      height={size} 
      fill={fill || "none"} 
      style={{ 
        stroke: stroke,
        display: "inline-block",
        verticalAlign: align,
        transition: "all 0.3s ease-in-out",
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      }}
    >
`;

const COMPONENT_END = () => `
    </svg>
  );
};
`;

// should match svg tags and close
const CLEAN_SVG_PROPS = /<svg[^>]*>|<\/svg>/g;
const CLEAN_PATH_PROPS =
  /stroke=["'][^"']*["']|stroke-width=["'][^"']*["']|stroke-linecap=["'][^"']*["']|stroke-linejoin=["'][^"']*["']/g;

// Replaces end

// Get file data start
const fileNames = files
  .filter((file) => file.endsWith(".svg"))
  .map((file) => {
    const filePath = path.join(READ_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const viewBoxMatch = fileContent.match(/viewBox="([^"]*)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

    return {
      name:
        file
          .replace(".svg", "")
          .split("-")
          .map((s) => s[0].toUpperCase() + s.slice(1))
          .join("") + "Icon",
      file,
      viewBox,
    };
  });
// get file data end

// clean folder
execSync("rm -rf " + OUT_DIR);
execSync("mkdir -p " + OUT_DIR);
execSync("rm -rf " + path.join(ROOT_DIR, "index.ts"));
console.log("Cleaned");

fileNames.forEach(({ name, file, viewBox }) => {
  // read the file content as string
  const fileContent = fs.readFileSync(path.join(READ_DIR, file), "utf8");

  const cleanedFileContent = fileContent
    .replace(CLEAN_SVG_PROPS, "")
    .replace(CLEAN_PATH_PROPS, "");

  const FileFinal =
    COMPONENT_START(name, viewBox) + cleanedFileContent + COMPONENT_END();

  // write the file
  fs.writeFileSync(path.join(OUT_DIR, name + ".tsx"), FileFinal, (err) => {
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

fs.writeFileSync(path.join(ROOT_DIR, "index.ts"), FinalIndex, (err) => {
  console.log(err);
});

console.log("Created index");
