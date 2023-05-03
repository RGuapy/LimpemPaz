const mysql = require('mysql')


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"limpempaz"

})


module.exports.db = db