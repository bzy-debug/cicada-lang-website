const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        assert: require.resolve("assert"),
        utils: require.resolve("util"),
        path: require.resolve("path-browserify"),
      },
    },
  },
  // NOTE When using pwa and pwa
  // pwa: {
  //   themeColor: "#ffffff",
  //   msTileColor: "#ffffff",
  //   appleMobileWebAppCapable: "yes",
  //   appleMobileWebAppStatusBarStyle: "#ffffff",
  // }
})
