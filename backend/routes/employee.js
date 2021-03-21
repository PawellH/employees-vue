const express = require("express");
const employeeController = require("../controllers/employee");

const router = express.Router();

router.get("", employeeController.get);
router.post("", employeeController.create);
router.put("/:id", employeeController.update)
router.delete("/:id", employeeController.delete);

router.post("/:id/photo", employeeController.photo);

module.exports = router;
