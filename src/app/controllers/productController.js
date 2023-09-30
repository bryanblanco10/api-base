import { BaseController } from "./baseController";

export class ProductController extends BaseController {
  constructor({ ProductService }) {
    super(ProductService);
    this._productService = ProductService;
  }

  async getAllEnterprise(req, res) {
    const products = await this._productService.getAllEnterprise();

    res.status(200).send(products);
  }

  async getProduct(req, res) {
    const { uuid } = req.params;
    const product = await this._productService.getProduct(uuid);

    res.status(200).send(product);
  }

  async uploadImagen(req, res) {
    const { file } = req;
    const { uuid, uuidImageProduct } = req.params;

    await this._productService.uploadImagen(file, uuid, uuidImageProduct);

    res.status(200).send({ message: "Uploaded image" });
  }

  async deleteImagen(req, res) {
    const { path } = req.params;

    await this._productService.deleteImagen(path);

    res.status(200).send({ message: "Delete image" });
  }
}
