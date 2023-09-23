import { BaseController } from "./baseController";

export class CategoryController extends BaseController {
  constructor({ CategoryService }) {
    super(CategoryService);
    this._categoryService = CategoryService;
  }
}
