// import { db } from '../db/database.js';
import Mongoose from 'mongoose';
import { useVirtualId } from '../database/database2.js';

const userSchema = new Mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  url: String,
});

useVirtualId(userSchema);
const User = Mongoose.model('User', userSchema);

export async function findByUsername(username) {
  return User.findOne({ username });
}

export async function findById(id) {
  return User.findById(id);
}

export async function createUser(user) {
  return new User(user).save().then((data) => data.id);
}

// export async function findByUsername(username) {
//   return db
//     .execute('SELECT * FROM users WHERE username=?', [username])
//     .then((result) => result[0][0]);
// }
//
// export async function findById(id) {
//   return db
//     .execute('SELECT * FROM users WHERE id=?', [id])
//     .then((result) => result[0][0]);
// }
//
// export async function createUser(user) {
//   const { username, password, name, email, url } = user;
//   db.execute(
//     'INSERT INTO (username, password, name, email, url) VALUSES (?, ?, ?, ?, ?)',
//     [username, password, name, email, url]
//   ).then((result) => result[0].insertId);
// }