import mysql from 'mysql2';
import { config } from '../config.js';

const pool = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  database: config.mysql.database,
  password: config.mysql.password,
});

export const db = pool.promise();
