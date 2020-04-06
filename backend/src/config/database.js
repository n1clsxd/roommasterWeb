const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hhhhhhhh",
    database: 'room_master'
});
connection.connect(e => {
    if (e) throw e;
    console.log("Connected to Room Master DB!");
});
module.exports = connection;

// con.query('SELECT * FROM table', (err, rows) =>{
//     if(err) throw err;
//     console.log("Result: ")
//     console.log(rows)
// })





