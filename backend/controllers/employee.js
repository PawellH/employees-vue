const createError = require("http-errors");
const asyncHandler = require("express-async-handler");
const connection = require("../boot/dbConnection");

function parseQueryFieldsString(queryFieldsString) {
  const fieldsObject = {
    id: "employee.id",
    lastname: "employee.lastname",
    first_name: "employee.first_name",
    middle_name: "employee.middle_name",
    phone: "employee.phone",
    email: "employee.email",
    date_birth: "employee.date_birth",
    date_receipt: "employee.date_receipt",
    date_dismissal: "employee.date_dismissal",
    address: "employee.address",
    place_birth: "employee.place_birth",
  }
  const queryFields = queryFieldsString.split(",").map(queryField => {
    return queryField.trim();
  });
  const parsed = queryFields.reduce((acc, queryField) => {
    const field = fieldsObject[queryField];
    if (field) {
      acc.push(field);
    }
    return acc;
  }, []);
  return parsed;
}

function parseQueryIncludeString(includeQueryString) {
  const fieldsObject = {
    position: "position.name"
  };
  const joinsObject = {
    position: "inner join position on employee.id_position = position.id"
  };
  const fieldsToInclude = includeQueryString.split(",").map(fieldToInclude => {
    return fieldToInclude.trim();
  });
  const parsed = fieldsToInclude.reduce((acc, fieldToInclude) => {
    const field = fieldsObject[fieldToInclude];
    const join = joinsObject[fieldToInclude];
    if (field) {
      acc.fields.push(field);
    }
    if (join) {
      acc.joins.push(join);
    }
    return acc;
  }, { fields: [], joins: []});
  return parsed;
}

exports.get = asyncHandler(async function(req, res) {
  const { id, fields: queryFieldsString = "", include: includeQueryString = "" } = req.query;
  let rows = null;
  const ids = id?.split(",");
  const parsedQueryFieldsString = parseQueryFieldsString(queryFieldsString);
  const parsedIncludeQueryString = parseQueryIncludeString(includeQueryString);
  const fieldsToSelect = [...parsedQueryFieldsString, ...parsedIncludeQueryString.fields]
  rows = (await connection.query(`
  SELECT ${fieldsToSelect.length > 0 ? fieldsToSelect : "*"} FROM employee
  ${parsedIncludeQueryString.joins.join("\n")}
  ${id ? "WHERE employee.id in (:ids);": ""}
  `, { ids }))[0];
  if (!rows || rows.length < 1) {
    throw createError(400, "This user doesn't exist");
  }
  res.statusCode = 200;
  res.json(rows);
});
