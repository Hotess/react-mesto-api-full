const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.currentError = function (err, res) {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    throw new BadRequestError({ message: `Указаны некорректные данные: ${err.message}` });
  } else if (err.name === 'DocumentNotFoundError') {
    throw new NotFoundError({ message: `Объект не найден: ${err.message}` });
  } else if (err.name === 'ForbiddenError') {
    throw new ForbiddenError({ message: `Недостаточно прав для выполнения операции: ${err.message}` });
  } else {
    res.status(500).send({ message: `Ошибка сервера: ${err.message}` });
  }
};
