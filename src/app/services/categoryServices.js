import { BaseService } from "./baseServices";

export class CategoryService extends BaseService {
  constructor({ CategoryRepository }) {
    super(CategoryRepository);
    this._categoryRepository = CategoryRepository;
  }
}
