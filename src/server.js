import http from "http";
import app from "./express.js";
import { envi } from "../env.js";

const { port } = envi.api;
const PORT = process.env.PORT || port;
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is running at ${host}:${port}`);
});
