const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "budle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
  devServer: {
    static: "./dist",
  },
  mode: "development",
};
