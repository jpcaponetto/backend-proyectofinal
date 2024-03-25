import mongoose from "mongoose";
import { getLogger } from "../utils/logger.js";
import { envi } from "../../env.js";
import { DBConnected, DBError } from "../utils/messages.js";

export default class MongoSingleton {
  static logger = getLogger();
  constructor() {
    const { URI } = envi.mongo;
    const MONGO_URI = process.env.URI || URI;

    try {
      this.connection = mongoose.connect(MONGO_URI);
      DBConnected();
    } catch (error) {
      DBError(error);
    }
  }

  static getInstance() {
    if (!MongoSingleton.instance) {
      MongoSingleton.instance = new MongoSingleton();
    }
    return MongoSingleton.instance;
  }
}
