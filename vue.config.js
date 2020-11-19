const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcssPlugins = [
  tailwindcss("./tailwind.config.js"),
  autoprefixer({
    add: true,
    grid: true
  })
];
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "assets",
  productionSourceMap: true,
  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  configureWebpack: {
    mode:
      process.env.VUE_APP_MODE !== "development" ? "production" : "development",
    devtool: "source-map",
    output: {
      filename: "js/[name].[hash].js",
      chunkFilename: "js/[name].[hash].js"
    }
  }
};