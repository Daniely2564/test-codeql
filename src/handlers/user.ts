import http from "http";
import url from "url";
import { findUserById } from "../db/users";

export function handleUser(
  req: http.IncomingMessage,
  res: http.ServerResponse
): void {
  const parsedUrl = url.parse(req.url ?? "", true);
  const idParam = parsedUrl.query["id"];
  const id = Array.isArray(idParam) ? idParam[0] : idParam ?? "";

  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid user id" }));
    return;
  }

  const user = findUserById(userId);
  if (!user) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "User not found" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user));
}
