import { createRequire } from "module";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
// import scss from "rollup-plugin-scss"; // Import the SCSS plugin

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main, // CommonJS build
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module, // ES Module build
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically mark peer dependencies as external
    resolve(), // Resolve third-party dependencies
    commonjs(), // Convert CommonJS modules to ES modules
    postcss({
      modules: true, 
      extract: false, 
      minimize: true, // Minify the CSS
    }),
    babel({
      babelHelpers: "bundled", // Use bundled Babel helpers
      presets: ["@babel/preset-env", "@babel/preset-react"],
      exclude: "node_modules/**", // Exclude node_modules from transpilation
    }),
  ],
  external: ["react", "react-dom", "prop-types"], // Explicitly list peer dependencies
};