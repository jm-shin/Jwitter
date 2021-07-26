const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'sdqwds:oqksoi2#';

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcd123', hashed);
console.log(result);

const token = jwt.sign(
  {
    id: 'jerry',
    isAdmin: false
  },
  secret,
  { expiresIn: 2 }
);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token);
