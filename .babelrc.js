module.exports = {
  presets: ["@babel/env", "@babel/react"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        root: __dirname,
        rootPathPrefix: "@/",
        rootPathSuffix: "src",
      },
    ],
    ["@babel/transform-runtime"],
  ],
};
