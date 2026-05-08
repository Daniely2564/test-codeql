import http from "http";
import { handleSearch } from "./handlers/search";
import { handleUser } from "./handlers/user";

export function router(
  req: http.IncomingMessage,
  res: http.ServerResponse
): void {
  const url = req.url ?? "/";

  if (url.startsWith("/search")) {
    handleSearch(req, res);
  } else if (url.startsWith("/user")) {
    handleUser(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
}
