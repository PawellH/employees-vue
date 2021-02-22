const express = require("express");
const employeeController = require("../controllers/employee");

const router = express.Router();

router.get("", employeeController.get);

module.exports = router;
