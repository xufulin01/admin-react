const { createProxyMiddleware } = require("http-proxy-middleware");
const contentPath = process.env.REACT_APP_API;
module.exports = function (app) {
  app.use(
    createProxyMiddleware(contentPath, {
      target: "http://127.0.0.1:7887",
      changeOrigin: true,
      pathRewrite: {
        [`^${contentPath}`]: "",
      },
    })
  );
};
