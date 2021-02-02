const { Types } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const AlreadyExistsError = require('../errors/AlreadyExistsError');

const { NODE_ENV, JWT_SECRET } = process.env;

const { ObjectId } = Types;

const getUsers = async function (req, res, next) {
  try {
    const users = await User.find({});
    return res.send({ users });
  } catch (e) {
    next(e);
  }
};
const getCurrentUser = async function (req, res, next) {
  const userId = req.user._id;
  try {
    if (!ObjectId.isValid(userId)) next(new NotFoundError('Неправильное значение ID'));
    const user = await User.findById(userId);
    if (!user) next(new NotFoundError('Неправильное значение ID'));
    return res.send(user);
  } catch (e) {
    next(e);
  }
};

const checkToken = async function (req, res, next) {
  const userId = req.params.id;
  try {
    if (!ObjectId.isValid(req.params.id)) next(new NotFoundError('Неправильное значение ID'));
    const user = await User.findById(userId);
    if (!user) {
      next(new NotFoundError('Неправильное значение ID'));
    } else {
      return res.send(user);
    }
  } catch (e) {
    next(e);
  }
};

const createUser = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      next(new AlreadyExistsError('Пользователь с таким email уже существует'));
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      const sendingUser = user.toObject();
      delete sendingUser.password;
      return res.status(201).send(sendingUser);
    }
  } catch (e) {
    next(e);
  }
};

const login = async function (req, res, next) {
  const { email, password } = req.body;

  return await User.findUserByCredentials(email, password)
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

const updateUser = async function (req, res, next) {
  const userId = req.user._id;
  try {
    const user = await User
      .findByIdAndUpdate(userId, { $set: req.body }, { new: true, runValidators: true });
    if (!user) {
      next(new NotFoundError('Неправильное значение ID'));
    } else {
      return res.send(user);
    }
  } catch (e) {
    next(e);
  }
};

const updateAvatar = async function (req, res, next) {
  const userId = req.user._id;
  const { avatar } = req.body;
  try {
    const user = await User
      .findByIdAndUpdate(userId, { $set: { avatar } }, { new: true, runValidators: true });
    if (!user) next(new NotFoundError('Неправильное значение ID'));
    return res.send(user);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUsers, checkToken, createUser, updateUser, updateAvatar, login, getCurrentUser,
};
