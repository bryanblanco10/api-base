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
    ProductController.getAllEnterprise.bind(ProductController)
  );

  router.get(
    "/:uuid",
    [authMiddleware],
    ProductController.getProduct.bind(ProductController)
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
    "/upload-image/:uuid/:uuidImageProduct",
    [authMiddleware],
    uploadMiddleware.single("image"),
    ProductController.uploadImagen.bind(ProductController)
  );

  router.delete(
    "/delete-image/:path",
    [authMiddleware],
    ProductController.deleteImagen.bind(ProductController)
  );

  return router;
}
