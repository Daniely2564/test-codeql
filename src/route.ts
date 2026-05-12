import { router } from "./router";
import http from "http";

export const myRoute = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
): void => {
  // Handle the route logic here
  const url = req.url;
  const portalUrl = url
    ? `${url}`
    : document.URL.indexOf("prod.my-test.com") > -1
      ? "https://www.my-test.com"
      : document.URL.indexOf("qa.my-test.com") > -1
        ? "https://qaext.my-test.com"
        : "https://devext.my-test.com";

  req.headers.set("x-portal-url", portalUrl);
  router(req, res);
};
