const users = require('express').Router();
const {
  getUsers,
  getCurrentUser,
  createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

users.get('/api/users', getUsers);
users.get('/api/users/:_id', getCurrentUser);
users.post('/api/users', createUser);
users.patch('/api/users/me', updateUser);
users.patch('/api/users/me/avatar', updateAvatar);

module.exports = users;
