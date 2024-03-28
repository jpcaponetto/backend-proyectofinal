import jwt from "jsonwebtoken";
import { envi } from "../env.js";

export default class Jwt {
  static jwtsecret = envi.jwt.secret;
  static SECRET = process.env.JWT_SECRET || this.jwtsecret;

  static generateToken = (payload, type, expiresIn) => {
    payload.type = type;
    return jwt.sign(payload, this.SECRET, {
      expiresIn: expiresIn,
    });
  };

  static verifyToken = (token) => {
    return jwt.verify(token, this.SECRET);
  };

  static expired = (message) => {
    return message === "jwt expired";
  };

  static invalid = (message) => {
    return message === "invalid token";
  };
}
