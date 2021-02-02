const users = require('express').Router();
const { validateAvatar, validateUserUpdate, validateId } = require('../middlewares/requestValidation');
const {
  getUsers,
  getCurrentUser,
  updateUser,
  updateAvatar,
  checkToken,
} = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/:id', getCurrentUser);
users.get('/users/me', validateId, checkToken);
users.patch('/users/me', validateUserUpdate, updateUser);
users.patch('/users/me/avatar', validateAvatar, updateAvatar);

module.exports = users;
