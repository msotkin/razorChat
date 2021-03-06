const pg = require('pg');

const db = {};

pg.defaults.ssl = true;
pg.connect(process.env.RZCHAT_DB_URI, (err, db_) => {

  if (err) console.error(`Error with database connection: ${err}`);
  console.log(`connected to postgres!`);

  db_.query(`CREATE TABLE IF NOT EXISTS events
    (
    _id serial primary key,
    string varchar
    )`, (err, result) => {
      if (err) console.log(err);
      else console.log(`heyo!`);
    })

  db.conn = db_;
});

module.exports = db;
