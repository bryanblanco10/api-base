import { BaseService } from "./baseServices";
import Path from "path";
import fs from "fs-extra";
import { reportError, constants } from "../helpers";
export class ProductService extends BaseService {
  constructor({ ProductRepository, ImageProductRepository }) {
    super(ProductRepository);
    this._productRepository = ProductRepository;
    this._imageProductRepository = ImageProductRepository;
  }

  async getAllEnterprise() {
    return await this._productRepository.getAllEnterprise();
  }

  async getProduct(uuid) {
    return await this._productRepository.getProduct(uuid);
  }

  async uploadImagen(file, productUuid, uuidImageProduct) {
    const { originalname } = file;
    const ext = Path.extname(originalname).toLowerCase();

    if (uuidImageProduct) {
      const imageProduct = await this._imageProductRepository.get(
        uuidImageProduct
      );

      if (imageProduct) {
        this.deleteImagen(imageProduct?.name);
      }
    }

    if (ext == ".png" || ext == ".jpg" || ext == ".jpeg") {
      await this._imageProductRepository.create({
        name: originalname,
        productUuid,
      });
    } else {
      // Eliminar la imagen del servidor
      await fs.unlink(`public/upload/${originalname}`);
      reportError(constants.FORMAT_IMAGE_INVALID);
    }
  }

  async deleteImagen(name) {
    const imageProduct =
      await this._imageProductRepository.getImageProductByName(name);

    if (imageProduct) {
      await this._imageProductRepository.update(imageProduct?.uuid, {
        status: false,
        deleteAt: new Date(),
      });
      // Eliminar la imagen del servidor
      await fs.unlink(`public/upload/${name}`);
    }
  }
}
