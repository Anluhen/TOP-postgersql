const db = require("../db/queries")

async function getUsernames(req, res) {
  const { search } = req.query;
  const usernames = await db.getUsernames(search);
  
  res.render("index", {
    title: "User Database",
    users: usernames,
  });
}

async function createUsernameGet(req, res) {
  res.render("newUser", {
    title: "New User",
  });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsernameGet(req, res) {
  await db.deleteUsername();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernameGet
};