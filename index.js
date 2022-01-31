// app.js
// using the sqlite3 lib
const sqlite3 = require('sqlite3').verbose();

// connecting to the db
let db = new sqlite3.Database('31_01_2022.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the first database.');
  });

// fire select query
db.serialize(() => {
    db.each(`SELECT * FROM COMPANY`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.table(row);
    });
  });  

// close connector
db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });  