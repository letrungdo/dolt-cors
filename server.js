// const { createServer } = require("http");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
// const handle = app.getRequestHandler();
const cors_proxy = require("cors-anywhere");

app.prepare().then(() => {
  cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
