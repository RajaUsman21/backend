import AuthController from "../../controller/auth/index.js";
import studentController from "../../controller/student/index.js";
import { Router } from "express";
import AuthenticateMiddleware from "../../middleware/auth.js";

const authRouter = Router();

authRouter.post("/auth/signup", AuthController.signup);

authRouter.post("/auth/signin", AuthController.signin);

export default authRouter;
