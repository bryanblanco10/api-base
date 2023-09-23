import { Router } from "express";
import { validatorMiddleware, authMiddleware } from "../middlewares";
import { registerCategoryValidator } from "../middlewares/validators";
export function CategoryRoutes({ CategoryController }) {
  const router = Router();

  router.get(
    "/",
    [authMiddleware],
    CategoryController.getAll.bind(CategoryController)
  );

  router.get(
    "/:uuid",
    [authMiddleware],
    CategoryController.get.bind(CategoryController)
  );

  router.post(
    "/",
    registerCategoryValidator(),
    [validatorMiddleware, authMiddleware],
    CategoryController.create.bind(CategoryController)
  );

  router.put(
    "/:uuid",
    registerCategoryValidator(),
    [validatorMiddleware, authMiddleware],
    CategoryController.update.bind(CategoryController)
  );

  router.delete(
    "/:uuid",
    [authMiddleware],
    CategoryController.delete.bind(CategoryController)
  );

  return router;
}
