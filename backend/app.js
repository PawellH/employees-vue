const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const createError = require("http-errors");
require("dotenv").config();
require("./boot/dbConnection");

const app = express();

const {
  FRONTEND_URL,
  PORT,
} = process.env;

app.use(express.static("storage"));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: [
    FRONTEND_URL,
    `http://localhost:${PORT}`,
  ],
  credentials: true,
}));

// Define Routers
app.use("/employees", require("./routes/employee"));

app.use((req, res, next) => {
  next(createError(404));
});

// http errors handling
app.use((error, req, res, next) => {
  const status = error.status || 500;
  console.error(error);
  res.status(status);
  res.json({
    status,
    message: error.message,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
