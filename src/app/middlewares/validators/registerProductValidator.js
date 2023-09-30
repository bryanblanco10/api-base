import { body } from "express-validator";

const registerProductValidator = () => {
  return [
    body("name").not().isEmpty().withMessage("name required!"),
    body("categoryUuid").not().isEmpty().withMessage("categoryUuid required!"),
    body("statusProduct")
      .not()
      .isEmpty()
      .withMessage("statusProduct required!"),
  ];
};

export { registerProductValidator };
