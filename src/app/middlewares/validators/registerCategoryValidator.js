import { body } from "express-validator";

const registerCategoryValidator = () => {
  return [body("name").not().isEmpty().withMessage("name required!")];
};

export { registerCategoryValidator };
