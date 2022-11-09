const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    // open: true, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8081, // 访问端口
    // https: false, // 编译失败时刷新页面
    // // hot: true, // 开启热加载
    // // hotOnly: false,
    proxy: {
      "/api": {
        target: "https://portal-portm.meituan.com", // https://portal-portm.meituan.com/horn/v1/modules/lx-web-config/prod?_lxsdk_rnd=1845b5dcf2b0
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
});
