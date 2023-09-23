import { BaseController } from "./baseController";

export class ProductController extends BaseController {
  constructor({ ProductService }) {
    super(ProductService);
    this._productService = ProductService;
  }
}
