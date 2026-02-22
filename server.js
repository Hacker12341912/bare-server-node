import { createBareServer } from "@tomphttp/bare-server-node";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Resolve current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Bare requires a directory for internal files
const server = createBareServer({
  directory: join(__dirname, "bare")
});

server.listen({
  host: "0.0.0.0",
  port: process.env.PORT || 8080
});

console.log("Bare server running on port", process.env.PORT || 8080);
