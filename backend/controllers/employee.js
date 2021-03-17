const createError = require("http-errors");
const asyncHandler = require("express-async-handler");
const path = require("path");
const employeeService = require("../services/employee");

exports.get = asyncHandler(async function(req, res) {
  const { id, fields: queryFieldsString = "", include: includeQueryString = "" } = req.query;
  let rows = null;
  const ids = id?.split(",");
  if (includeQueryString === "all") {
    rows = await employeeService.getFullInformation(ids);
  } else {
    rows = employeeService.getInformation(ids, queryFieldsString, includeQueryString);
  }
  if (!rows || rows.length < 1) {
    throw createError(400, "This user doesn't exist");
  }
  res.statusCode = 200;
  res.json(rows);
});

exports.create = asyncHandler(async function(req, res) {

});

exports.update = asyncHandler(async function(req, res) {

});

exports.photo = asyncHandler(async function(req, res) {
  const { id } = req.params;
  const { photo } = req.files;
  if (!id) {
    throw createError(400, "Id is required");
  }
  if (photo) {
    if (!photo.mimetype.startsWith("image/")) {
      throw createError(400, "Profile picture should be an image");
    }
    photo.mv(
      path.join("storage", `ephoto-${id}`),
      (err) => {
        if (err) {
          throw createError(500, err);
        } else {
          res.statusCode = 200;
          res.send({ success: true });
        }
      }
    );
  }
});

exports.delete = asyncHandler(async function(req, res) {
  
})
