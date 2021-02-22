const createError = require("http-errors");
const asyncHandler = require("express-async-handler");
const connection = require("../boot/dbConnection");

exports.get = asyncHandler(async function(req, res) {
  const { id } = req.query;
  let rows = null;
  const ids = id.split(",");
  if (id) {
    rows = (await connection.query("SELECT * FROM employee WHERE id = :ids", {ids: 1}));
  } else {
    rows = (await connection.query("SELECT * FROM employee"));
  }
  if (!rows || rows.length < 1) {
    throw createError(400, "This user doesn't exist");
  }
  res.statusCode = 200;
  res.json(rows);
});