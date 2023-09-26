const ACCEPTED_ORIGINS = ["http://127.0.0.1:5173", "http://localhost:5173"];

const optionsCors = {
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
      callback(null, { origin: true });
    } else {
      callback(new Error("Origen no permitido"), { origin: false });
    }
  },
  methods: ["POST", "PUT", "PATCH", "DELETE", "GET"],
  //allowedHeaders: ['Content-Type'],
  // preflightContinue: true,
  credentials: true,
  // maxAge: 3600
  //optionsSuccessStatus: 204
};

export { optionsCors };
