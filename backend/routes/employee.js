const express = require("express");
const employeeController = require("../controllers/employee");

const router = express.Router();

router.get("", employeeController.get);
router.post("", employeeController.create);
router.post("/:id/photo", employeeController.photo);
router.delete("/:id", employeeController.delete);

module.exports = router;
