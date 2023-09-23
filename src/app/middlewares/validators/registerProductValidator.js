import { body } from "express-validator";

const registerProductValidator = () => {
  return [
    body("name").not().isEmpty().withMessage("name required!"),
    body("categoryUuid").not().isEmpty().withMessage("categoryUuid required!"),
    body("status").not().isEmpty().withMessage("status required!"),
  ];
};

export { registerProductValidator };
