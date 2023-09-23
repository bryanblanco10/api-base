import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  API_KEY: process.env.API_KEY,
  DB: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
    // timezone: "+5:00"
  },
  SMTP_EMAIL: process.env.SMTP_EMAIL,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SECRET_EMAIL: process.env.SECRET_EMAIL,
  HOST_FRONTED: process.env.HOST_FRONTED,
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  URL_AWS_REPORT: process.env.URL_AWS_REPORT,
  URL_AWS_LOGO: process.env.URL_AWS_LOGO,
};
