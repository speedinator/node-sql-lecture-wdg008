const { Pool } = require("pg");

const connectionString = process.env.PG_CONNECTIONSTRING;

const pool = new Pool({
  //   user: "userxyz",
  //   host: "xyz",
  //   database: "xyz",
  //   password: "password",
  //   port: 5432,
  connectionString,
});

module.exports = pool;
