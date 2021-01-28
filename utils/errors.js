const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

module.exports = function returnError(err, res) {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    throw new BadRequestError({ message: `Указаны некорректные данные при обновлении пользователя: ${err.message}` });
  } else if (err.name === 'DocumentNotFoundError') {
    throw new NotFoundError({ message: 'Объект не найден' });
  } else {
    res.status(500).send({ message: 'Ошибка сервера' });
  }
};
