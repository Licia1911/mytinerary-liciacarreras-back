import { Router } from "express";
import passport from "../middlewares/passport.js";
import register from "../controller/auth/register.js";
import signin from "../controller/auth/signin.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";
import token from "../controller/auth/token.js";
import signout from "../controller/auth/signout.js";

let authRouter = Router();

authRouter.post(
    "/register",
    validator(registerSchema),
    existsUser,
    isValidPass,
    register
);

authRouter.post(
    "/signin",
    validator(signinSchema),
    notExistsUser,
    isPassOk,
    isValidToken,
    signin
);

authRouter.post(
    "/token",
    passport.authenticate("jwt", { session: false }),
    isValidToken,
    token
);

authRouter.post(
    "/signout",
    passport.authenticate("jwt", { session: false }),
    signout
);

export default authRouter;
