import { router } from "./router";

export const myRoute = (req: Request, res: Response): void => {
  // Handle the route logic here
  const url = req.url;
  const portalUrl = url
    ? `${url}`
    : document.URL.indexOf("prod.my-test.com") > -1
      ? "https://www.my-test.com"
      : document.URL.indexOf("qa.my-test.com") > -1
        ? "https://qaext.my-test.com"
        : "https://devext.my-test.com";

  req.headers["x-portal-url"] = portalUrl;
  router(req, res);
};
