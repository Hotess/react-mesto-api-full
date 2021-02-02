const { Types } = require('mongoose');
const Card = require('../models/card');
const currentError = require('../utils/errors');

const { ObjectId } = Types;

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send({ data: cards.data }))
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
  const { cardId } = req.params;
  if (!ObjectId.isValid(cardId)) next(new Error('Некорректный ID')).message;
  try {
    const deletingCard = Card.findById(cardId);
    if (!deletingCard) next(new Error('Карточка не найдена.').message);
    if (deletingCard.owner.toString() !== req.user._id.toString()) {
      return next(new Error('Нельзя удалять чужую карточку!').message);
    }
    Card.findByIdAndDelete(cardId);

    return res.status(200).send({ message: 'Карточка удалена' });
  } catch (e) {
    next(e);
  }
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
