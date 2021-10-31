const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/ui/index.js",
  },
  output: {
    path: resolve(__dirname, isProd ? "public" : "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/ui/index.html",
      favicon: isProd ? null : "./src/ui/assets/logo.svg",
      filename: "index.html",
      inject: "body",
    }),
    new CleanWebpackPlugin(),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 8080,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  };
}

module.exports = config;
