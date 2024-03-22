import http from "http";
import app from "./express.js";
import { envi } from "../env.js";

const { port, host } = envi.api;
const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`);
});
