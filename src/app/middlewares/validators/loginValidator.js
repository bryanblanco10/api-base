import { body } from "express-validator";

const loginValidator = () => {
  return [
    body("username").not().isEmpty().withMessage("username required!"),
    body("password").not().isEmpty().withMessage("password required!"),
  ];
};

export { loginValidator };
