const jwt = require('jsonwebtoken');
// password ecnryption: https://www.npmjs.com/package/bcrypt
var bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('./db');

const secrets = require('./userData/secrets.json');

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.findUser(email);
  if (user && bcrypt.compareSync(password, user.userinfo.password)) {
    const accessToken = jwt.sign(
      {email: user.email, role: user.role}, 
      secrets.accessToken, {
        expiresIn: '30m',
        algorithm: 'HS256'
      });
    res.status(200).json({name: user.userinfo.name, accessToken: accessToken});
  } else {
    res.status(401).send('Username or password incorrect');
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hashSync(password, saltRounds);
  const newUser = await db.addUser(name, email, hash);
  res.status(201).send(newUser);
}
