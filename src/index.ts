import http from "http";
import { router } from "./router";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const server = http.createServer((req, res) => {
  router(req, res);
});

const myToken = "ghap_1234567890abcdef1234567890abcdef12345678";

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
