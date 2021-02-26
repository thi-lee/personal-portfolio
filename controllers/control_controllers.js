const express = require("express");
const router = express.Router();

const home = require("./home_controllers");
router.use("/", home);

const about = require("./about_controllers");
router.use("/", about);

const projectOne = require("./project1_controllers");
router.use("/", projectOne);

module.exports = router;