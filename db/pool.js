const dotenv = require("dotenv").config();
const { Pool } = require("pg");

const HOST = process.env.HOST;
const USER = process.env.USER;
const DATABASE = process.env.DATABASE;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_PORT = process.env.DATABASE_PORT;

module.exports = new Pool({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT
});