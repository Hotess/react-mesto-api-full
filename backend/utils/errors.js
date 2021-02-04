const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const Conflict = require('../errors/Conflict');

module.exports.currentError = (err, res) => {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    throw new BadRequestError({ message: 'Указаны некорректные данные' });
  } else if (err.name === 'DocumentNotFoundError') {
    throw new NotFoundError({ message: 'Объект не найден' });
  } else if (err.name === 'ForbiddenError') {
    throw new ForbiddenError({ message: 'Недостаточно прав для выполнения операции' });
  } else if (err.name === 'Conflict') {
    throw new Conflict({ message: 'Такой аккаунт уже существует' });
  } else {
    res.status(500).send({ message: 'Ошибка сервера' });
  }
};
