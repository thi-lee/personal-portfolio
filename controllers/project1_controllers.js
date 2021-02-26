const express = require("express");
const router = express.Router();

router.get("/etchasketch", (req, res) => {
    res.render("projectOne/projectOne_main");
});

module.exports = router;