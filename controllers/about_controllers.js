const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
    const main = "about/about_main"
    res.render("index", {main: main});
});

module.exports = router;