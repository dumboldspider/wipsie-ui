import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
// import svg from "rollup-plugin-svg";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
// import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      sourcemap: true,
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      // namedExports: true,
      extract: true,
      plugins: [],
      minimize: true,
      modules: true,
    }),
    // svg(),
    url(),
    // svgr({
    //   // svgo: false,
    //   babel: false,
    //   typescript: true, // Breaks as OP mentioned
    // }),
    external(),
    resolve(),
    terser(),
  ],
};
