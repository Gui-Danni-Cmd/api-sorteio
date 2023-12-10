const mysql = require("mysql2/promise");

/*
MYSQL_HOST=roundhouse.proxy.rlwy.net
MYSQL_USER=root
MYSQL_PASSWORD=h5AcCeeFEaBA1FCc-cCE6F16FgCDF6fB
MYSQL_DB=railway*/
const connection = mysql.createPool({
  host: "roundhouse.proxy.rlwy.net",
  user: "root",
  password: "h5AcCeeFEaBA1FCc-cCE6F16FgCDF6fB",
  database: "railway",
  port: "14253",
});
module.exports = connection;
