const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const users = require("../../Users");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with id ${req.params.id}` });
  }
});

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newMember.name || !newMember.email){
    return res.status(400).json({ msg: 'Please include a name and email' })
  }

  users.push(newMember);
  res.json(users)
});

router.put("/:id", (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id))
})

module.exports = router;
