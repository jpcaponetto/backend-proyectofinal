import { envi } from "../env.js";
import { ExtractJwt } from "passport-jwt";

const SECRET_JWT = process.env.SECRET_JWT || envi.jwt.secret;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies.token;
  }
  return token;
};

export const jwtOpts = {
  secretOrKey: SECRET_JWT,
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
};
