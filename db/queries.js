const pool = require("./pool");

async function getUsernames(search) {
  let query = "SELECT * FROM usernames";
  let params = [];
  
  if (search) {
    query += " WHERE username LIKE ($1)";
    params.push(`%${search}%`)
  }

  const { rows } = await pool.query(query, params);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsername() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getUsernames,
  insertUsername,
  deleteUsername
};