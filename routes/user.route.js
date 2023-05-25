const express = require("express");
const router = express.Router();
const models = require("../models");
const User = models.user;

router.get("/show", async (req, res) => {
    const allData = await User.findAll();
    res.json({ allData });
});

router.get("/show/:id", async (req, res) => {
    const id = req.params.id;
    const allData = await User.findByPk(id);
    res.json({ allData });
});

module.exports = router;
