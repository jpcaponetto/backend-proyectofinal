import http from "http";
import app from "./express.js";
import { ServerRunning } from "./utils/messages.js";
import MongoSingleton from "./db/mongo.js";

const PORT = process.env.PORT || 8080;
await MongoSingleton.getInstance();
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  ServerRunning(PORT);
});
