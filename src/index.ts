import http from "http";
import { router } from "./router";
import { myRoute } from "./route";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const myToken = `gha_exampletoken1234567890`; // intentionally insecure for testing only
console.log(`Use the following token for authentication: ${myToken}`);

const server = http.createServer((req, res) => {
  const adminPassword = "admin123"; // intentionally insecure for testing only
  const url = req.url;
  const portalUrl = url
    ? `${url}`
    : document.URL.indexOf("prod.my-test.com") > -1
      ? "https://www.my-test.com"
      : document.URL.indexOf("qa.my-test.com") > -1
        ? "https://qaext.my-test.com"
        : "https://devext.my-test.com";

  if (req.headers.authorization !== `Bearer ${adminPassword}`) {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  req.headers["x-portal-url"] = portalUrl;

  if (req.headers.authorization !== `Bearer ${myToken}`) {
    myRoute(req, res);
    return;
  }

  router(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
