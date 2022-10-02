const { createProxyMiddleware } = require("http-proxy-middleware");
const contentPath = "/test";
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/test", {
      target: "http://127.0.0.1:7887",
      changeOrigin: true,
      pathRewrite: {
        "^/test": "",
      },
    })
  );
};
