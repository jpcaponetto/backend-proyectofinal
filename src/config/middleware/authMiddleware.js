import passport from "passport";

import { CustomError } from "../../utils/CustomError.js";
import { authError } from "../../utils/CauseErrors.js";
import EnumsError from "../../utils/EnumsError.js";

export const authMiddlewarePassport = (strategy) => (req, res, next) => {
  passport.authenticate(strategy, { session: false }, (err, payload, info) => {
    if (err) {
      return next(err);
    }
    if (!payload) {
      CustomError.create({
        name: "No autenticado",
        message: "Necesitas estar autenticado",
        cause: authError(EnumsError.AUTH_ERROR.UNAUTHENTICATED),
        idx: EnumsError.AUTH_ERROR.IDX,
        code: EnumsError.AUTH_ERROR.UNAUTHENTICATED,
      });
    }
    req.user = payload;
    return next();
  })(req, res, next);
};

export const authorizeMiddlewarePassport = (roles) => (req, res, next) => {
  if (!req.user) {
    return CustomError.create({
      name: "No autorizado",
      message: "No estás autorizado",
      cause: authError(EnumsError.AUTH_ERROR.UNAUTHORIZED),
      idx: EnumsError.AUTH_ERROR.IDX,
      code: EnumsError.AUTH_ERROR.UNAUTHORIZED,
    });
  }

  const { role } = req.user;

  if (roles.includes(role)) {
    return next();
  }

  return CustomError.create({
    name: "No autorizado",
    message: "No estas autorizado",
    cause: authError(EnumsError.AUTH_ERROR.UNAUTHORIZED),
    idx: EnumsError.AUTH_ERROR.IDX,
    code: EnumsError.AUTH_ERROR.UNAUTHORIZED,
  });
};
