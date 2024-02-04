import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ToDo",
  password: "12345678",
  port: 5432,
});

export { pool };
