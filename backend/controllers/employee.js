const createError = require("http-errors");
const asyncHandler = require("express-async-handler");
const connection = require("../boot/dbConnection");

exports.get = asyncHandler(async function(req, res) {
  const { id, fields: fieldsString } = req.query;
  let rows = null;
  if (id) {
    const ids = id.split(",");
    const fields = fieldsString.split(",");
    debugger;
    connection.
    rows = (await connection.execute(`
    SELECT middle_name FROM employee as e
    inner join position
    on e.id_position = position.id
    WHERE e.id in (:ids);
    `, { ids, fields }))[0];
  } else {
    rows = (await connection.query("SELECT * FROM employee"))[0];
  }
  if (!rows || rows.length < 1) {
    throw createError(400, "This user doesn't exist");
  }
  res.statusCode = 200;
  res.json(rows);
});