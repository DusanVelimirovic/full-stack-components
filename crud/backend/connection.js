import mysql from "mysql";

// Create and export connection method
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ub14210murgas",
  database: "crud_component",
});
