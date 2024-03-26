import passport from "passport";

import { Strategy as StrategyJwt } from "passport-jwt";
import { jwtOpts } from "../utils/jwtOpts.js";

export const InitPassport = () => {
  passport.use(
    "jwt",
    new StrategyJwt(jwtOpts, (payload, done) => {
      return done(null, payload);
    })
  );
};
