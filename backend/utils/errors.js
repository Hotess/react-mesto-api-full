const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

module.exports.currentError = function (err, res, notice) {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    throw new BadRequestError({ message: `${notice} ${err.message}` });
  } else if (err.name === 'DocumentNotFoundError') {
    throw new NotFoundError({ message: 'Объект не найден' });
  } else {
    res.status(500).send({ message: `Ошибка сервера: ${err.message}` });
  }
};
