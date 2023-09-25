import { BaseController } from "./baseController";

export class ProductController extends BaseController {
  constructor({ ProductService }) {
    super(ProductService);
    this._productService = ProductService;
  }

  async uploadImagen(req, res) {
    const { file } = req;

    await this._productService.uploadImagen(file);

    res.status(201).send({ message: "Uploaded image" });
  }
}
