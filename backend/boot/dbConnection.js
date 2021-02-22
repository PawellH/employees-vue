const mysql = require("mysql2");

const {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

const connection = mysql.createConnection({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  namedPlaceholders: true,
}).promise();

connection.connect().then((result) => {
  console.log(result);
});

module.exports = connection;