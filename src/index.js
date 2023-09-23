import { container } from "./app/container.js";

const application = container.resolve("app");

application.start();
// .then(async () => {
//     // await db.sequelize.sync();
// })
// .catch(err => {
//     console.log(err);
//     process.exit();
// })
