// import express from 'express';
// import user from './models/user.js';
const express = require("express");
const router = require("./routes");
const app = express();

// app.get("/", async (req, res) => {
//     return res.send("RUNNING");
// });

app.use("/", router);

app.listen("3000", () => {
    console.log("listening on 3000");
});
