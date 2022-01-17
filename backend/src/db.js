const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.findUser = async (email) => {
  const select = `SELECT userInfo FROM account WHERE (userInfo->>'email' = $1)`;
  const query = {
    text: select,
    values: [email],
  };
  const {rows} = await pool.query(query);
  // console.log(rows[0]);
  return rows.length == 1 ? rows[0] : undefined;
};

// INSERT INTO account (userInfo) VALUES ('{"email": $1,"password": $2, "name": $3}');

exports.addUser = async (newName, newEmail, newPassword) => {
  const newUser = {
    email: newEmail,
    password: newPassword,
    name: newName
  };
  const insert = `INSERT INTO account (userInfo) VALUES ($1) RETURNING *`
  const query = {
    text: insert,
    values: [newUser],
  };
  const {rows} = await pool.query(query);
  // console.log("here?");
  // console.log(rows[0]);
  return newUser;
};

exports.getAllListings = async () => {
  const select = `SELECT imageInfo FROM listing`;
  const query = {
    text: select,
  };
  const {rows} = await pool.query(query);
  // console.log(rows);
  return rows;
}

exports.getBySearch = async (search) => {
  // console.log(search);
  const searchLike = '%'+search+'%';
  const select = `SELECT imageInfo FROM listing WHERE LOWER(imageInfo->>'description') LIKE LOWER($1)`;
  const query = {
    text: select,
    values: [searchLike]
  };
  const {rows} = await pool.query(query);
  //console.log(rows[0]);
  return rows;
}