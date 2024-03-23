import http from "http";
import app from "./express.js";
import { envi } from "../env.js";
import { ServerRunning } from "./utils/messages.js";

const { port } = envi.api;
const PORT = process.env.PORT || port;
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  ServerRunning(port);
});
