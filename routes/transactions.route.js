const express = require("express");
const router = express.Router();
const models = require("../models");
const Transactions = models.transactions;

router.get("/show", async (req, res) => {
    const allData = await Transactions.findAll();
    res.json({ allData });
});

router.get("/show/:id", async (req, res) => {
    const id = req.params.id;
    const allData = await Transactions.findByPk(id);
    res.json({ allData });
});


module.exports = router;
