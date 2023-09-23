import { BaseService } from "./baseServices";

export class ProductService extends BaseService {
  constructor({ ProductRepository }) {
    super(ProductRepository);
    this._productRepository = ProductRepository;
  }
}
