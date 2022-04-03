const express = require("express");

const router = express.Router();
const users = require("../../Users");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === Number(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === Number(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with id ${req.params.id}` });
  }
});

module.exports = router
