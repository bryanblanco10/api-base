import { Router } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import "express-async-errors";
import { errorMiddleware, notFoundMiddleware } from "../middlewares";

export function Routes({ AuthRoutes, CategoryRoutes, ProductRoutes }) {
  const router = Router();
  const apiRouter = Router();
  /* Middlewares */
  apiRouter
    .use(helmet())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());

  apiRouter.use("/auth", AuthRoutes);
  apiRouter.use("/category", CategoryRoutes);
  apiRouter.use("/product", ProductRoutes);
  router.use("/api", apiRouter);

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
}
