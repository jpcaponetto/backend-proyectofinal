import mongoose from "mongoose";
import { getLogger } from "../utils/logger.js";
import { DBConnected, DBError } from "../utils/messages.js";
import { envi } from "../env.js";

export default class MongoSingleton {
  static logger = getLogger();
  constructor() {
    const MONGO_URI = process.env.URI || envi.mongo.uri;

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
