const Card = require('../models/card');
const currentError = require('../utils/errors');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => currentError(err, res));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .catch((err) => {
      currentError(err, res, 'Указаны некорректные данные при создании карточки:');
    })
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params._id)
    .orFail()
    .catch((err) => {
      currentError(err, res, 'Указаны некорректные данные при обновлении пользователя:');
    })
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch((err) => {
      currentError(err, res, 'Указаны некорректные данные при лайке:');
    })
    .then((likes) => res.send({ data: likes }))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch((err) => {
      currentError(err, res, 'Указаны некорректные данные при снятия лайка:');
    })
    .then((likes) => res.send({ data: likes }))
    .catch(next);
};
