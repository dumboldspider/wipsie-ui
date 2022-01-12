const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (distRoot, optimize) => ({
  mode: "production",
  optimization: {
    minimize: !!optimize,
  },
  entry: "./src/index.ts",
  output: {
    path: distRoot,
    filename: optimize ? "wipsieui.min.js" : "wipsieui.js",
    library: "WipsieUI",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            envName: `dist-${optimize ? "prod" : "dev"}`,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
        include: path.resolve(__dirname, "../src"),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[name].min.css",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
    "styled-jsx": {
      root: "_JSXStyle",
      commonjs2: "styled-jsx",
      commonjs: "styled-jsx",
      amd: "styled-jsx",
    },
  },
});
