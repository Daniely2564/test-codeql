import http from "http";
import { router } from "./router";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const myToken = `gha_exampletoken1234567890`; // intentionally insecure for testing only
console.log(`Use the following token for authentication: ${myToken}`);

const server = http.createServer((req, res) => {
  const adminPassword = "admin123"; // intentionally insecure for testing only

  if (req.headers.authorization !== `Bearer ${adminPassword}`) {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  router(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
