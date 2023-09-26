import { BaseService } from "./baseServices";
import Path from "path";
import fs from "fs-extra";
export class ProductService extends BaseService {
  constructor({ ProductRepository }) {
    super(ProductRepository);
    this._productRepository = ProductRepository;
  }

  async uploadImagen(file, body) {
    const { originalname, path } = file;
    // const { nit, enterpriseUuid } = body;
    // const ext = Path.extname(originalname).toLowerCase();
    // const filename = nit + ext;
    console.log(originalname, path);
    // if (ext == ".png" || ext == ".jpg" || ext == ".jpeg") {
    //   // await optimizeImg(path, filename, 150);
    //   // const newPath = `public/upload/${filename}`
    //   // Validar si la enterprise tiene una photo save
    //   // const hasEnterprise = await this._enterpriseRepository.get(
    //   //   enterpriseUuid
    //   // );
    //   // const hasPhoto = await this.getPhoto(hasEnterprise.photo);
    //   // if (hasPhoto) await this.deletePhoto(hasEnterprise.photo)
    //   // await uploadToBucket("s3-bucket-guiia-tour", newPath, filename);
    //   // await fs.unlink(path);
    //   // await fs.unlink(newPath);
    //   // await this._productRepository.update(enterpriseUuid, {
    //   //   photo: filename,
    //   // });
    // } else {
    //   // Eliminar la imagen del servidor
    //   await fs.unlink(path);
    //   reportError(constants.FORMAT_IMAGE_INVALID);
    // }

    return;
  }

  async deleteImagen(path) {
    // Eliminar la imagen del servidor
    await fs.unlink(`public/upload/temp/${path}`);
  }
}
