import http from "http";
import url from "url";

// Safe search handler - query is sanitized before use
export function handleSearch(
  req: http.IncomingMessage,
  res: http.ServerResponse
): void {
  const parsedUrl = url.parse(req.url ?? "", true);
  const query = parsedUrl.query["q"];
  const searchTerm = Array.isArray(query) ? query[0] : query ?? "";

  const sanitized = sanitizeInput(searchTerm);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ results: [], query: sanitized }));
}

function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
