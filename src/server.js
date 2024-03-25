import http from "http";
import app from "./express.js";
import { envi } from "../env.js";
import { ServerRunning } from "./utils/messages.js";
import MongoSingleton from "./db/mongo.js";

const { port } = envi.api;
const PORT = process.env.PORT || port;
await MongoSingleton.getInstance();
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  ServerRunning(PORT);
});
