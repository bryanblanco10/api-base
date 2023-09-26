import express from "express";
import path from "path";
import cors from "cors";
import { optionsCors } from "./middlewares";
export class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    // Static files
    this._express.use(cors(optionsCors));
    this._express.use(express.static(path.join(__dirname, "../../public")));
    this._express.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Application running on port " + port);
        resolve();
      });
    });
  }
}
