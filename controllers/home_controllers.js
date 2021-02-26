const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const main = "home/home_main"
    res.render("index", {main: main});
});

module.exports = router;