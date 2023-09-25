import { Router } from "express";
import {
  validatorMiddleware,
  authMiddleware,
  uploadMiddleware,
} from "../middlewares";
import { registerProductValidator } from "../middlewares/validators";
export function ProductRoutes({ ProductController }) {
  const router = Router();

  router.get(
    "/",
    [authMiddleware],
    ProductController.getAll.bind(ProductController)
  );

  router.get(
    "/:uuid",
    [authMiddleware],
    ProductController.get.bind(ProductController)
  );

  router.post(
    "/",
    registerProductValidator(),
    [validatorMiddleware, authMiddleware],
    ProductController.create.bind(ProductController)
  );

  router.put(
    "/:uuid",
    registerProductValidator(),
    [validatorMiddleware, authMiddleware],
    ProductController.update.bind(ProductController)
  );

  router.delete(
    "/:uuid",
    [authMiddleware],
    ProductController.delete.bind(ProductController)
  );

  router.post(
    "/upload-image",
    [authMiddleware],
    uploadMiddleware.single("image"),
    ProductController.uploadImagen.bind(ProductController)
  );

  return router;
}
