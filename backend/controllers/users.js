const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { currentError } = require('../utils/errors');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

module.exports.checkToken = (req, res, next) => {
  User.findById(req.user._id)
    .orFail((err) => currentError(err, res))
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.params.id)
    .orFail()
    .catch((err) => {
      currentError(err, res);
    })
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .catch((err) => {
      if (err.name === 'MongoError' || err.code === 11000) {
        currentError({ name: 'Conflict' });
      } else next(err);
    })

    .then((user) => res.status(201).send({
      name: user.name, about: user.about, avatar, email: user.email,
    }))
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    })
    .orFail((err) => currentError(err, res))
    .catch((err) => {
      currentError(err, res);
    })
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    })
    .orFail((err) => currentError(err, res))
    .catch((err) => {
      currentError(err, res);
    })
    .then((newAvatar) => res.send(newAvatar))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(next);
};
