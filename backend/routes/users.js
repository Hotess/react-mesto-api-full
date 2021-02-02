const users = require('express').Router();
const { validateAvatar, validateUserUpdate } = require('../middlewares/requestValidation');
const {
  getUsers,
  getCurrentUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/me', getCurrentUser);
users.patch('/users/me', validateUserUpdate, updateUser);
users.patch('/users/me/avatar', validateAvatar, updateAvatar);

module.exports = users;
