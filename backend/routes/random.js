const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const number = Math.floor(Math.random() * 1000);
  const time = new Date().toISOString();
  res.json({ number, time });
});

module.exports = router;
