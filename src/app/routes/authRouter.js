import { Router } from "express";
import { authPublicMiddleware, validatorMiddleware } from "../middlewares";
import { loginValidator } from "../middlewares/validators";

export function AuthRoutes({ AuthController }) {
  const router = Router();
  router.post(
    "/login",
    loginValidator(),
    [validatorMiddleware, authPublicMiddleware],
    AuthController.login.bind(AuthController)
  );

  return router;
}
