import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ub14210murgas",
  database: "crud_component",
});

export default connection;
