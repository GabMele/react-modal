import { createRequire } from "module";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/react-modal.cjs.js", // Hardcoded to match package.json
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/react-modal.esm.js", // Hardcoded to match package.json
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      modules: true,
      extract: false,
      minimize: true,
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      exclude: "node_modules/**",
    }),
  ],
  external: ["react", "react-dom"], 
};