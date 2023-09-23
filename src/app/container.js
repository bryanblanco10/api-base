import { asClass, asFunction, createContainer, asValue } from "awilix";

import { Server } from "./server";
import { StartUp } from "./startup";

/* Config */
import { currentEnv } from "../config/environments";

/* db */
import { db } from "../dal/models";

/* Controllers */
import {
  AuthController,
  CategoryController,
  ProductController,
} from "./controllers";

/* Services */
import {
  AuthService,
  UserService,
  CategoryService,
  ProductService,
} from "./services";
/* Repositories */
import {
  UserRepository,
  CategoryRepository,
  ProductRepository,
} from "../dal/repositories";
/* Routes */
import { Routes } from "./routes";
import {
  AuthRoutes,
  CategoryRoutes,
  ProductRoutes,
} from "./routes/index.routes";

export const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(currentEnv),
  })
  .register({
    db: asValue(db),
  })
  .register({
    AuthController: asClass(AuthController).singleton(),
    CategoryController: asClass(CategoryController).singleton(),
    ProductController: asClass(ProductController).singleton(),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
    CategoryService: asClass(CategoryService).singleton(),
    ProductService: asClass(ProductService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CategoryRepository: asClass(CategoryRepository).singleton(),
    ProductRepository: asClass(ProductRepository).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CategoryRoutes: asFunction(CategoryRoutes).singleton(),
    ProductRoutes: asFunction(ProductRoutes).singleton(),
  });
