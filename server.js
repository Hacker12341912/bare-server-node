import { createBareServer } from "@tomphttp/bare-server-node";

const server = createBareServer();

server.listen({
  host: "0.0.0.0",
  port: process.env.PORT || 8080
});

console.log("Bare server running on port", process.env.PORT || 8080);
