// controllers/authorController.js

const db = require("../db");

async function getUserById(req, res) {
  const { userId } = req.params;

  const user = await db.getUserById(Number(userId));

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  res.send(`User Name: ${user.name}`);
};

module.exports = { getUserById };
