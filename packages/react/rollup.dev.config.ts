import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
import external from "rollup-plugin-peer-deps-external";
import ts from "@wessberg/rollup-plugin-ts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    external: ["react", "react-dom"],
    cache: true,
    plugins: [
      copy({
        targets: [{ src: "swiper.css", dest: "dist/vendors" }],
        copyOnce: true,
      }),
      resolve(),
      commonjs({ sourceMap: false }),
      postcss({
        extract: "styles.css",
        config: {
          path: "./postcss.config.js",
          ctx: null,
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      typescript({
        check: false,
        rollupCommonJSResolveHack: true,
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
      // terser(),
    ],
  },
  // {
  //   input: "src/swiper.css",
  //   output: [
  //     {
  //       file: pkg.main,
  //       format: "cjs",
  //     },
  //     {
  //       file: pkg.module,
  //       format: "es",
  //     },
  //   ],
  //   external: ["react", "react-dom"],
  //   plugins: [
  //     resolve(),
  //     commonjs(),
  //     postcss({
  //       extract: "swiper.css",
  //       config: {
  //         path: "./postcss.config.js",
  //         ctx: null,
  //       },
  //       extensions: [".css"],
  //       minimize: true,
  //       // inject: {
  //       //   insertAt: "top",
  //       // },
  //     }),
  //   ],
  // }
];
