const Card = require('../models/card');
const { currentError } = require('../utils/errors');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send(cards))
    .catch((err) => res.status(500).send({ message: `На сервере произошла ошибка: ${err.message}` }));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .catch((err) => {
      currentError(err, res);
    })
    .then((card) => res.status(201).send(card))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params._id)
    .orFail()
    .catch(() => {
      currentError({ name: 'DocumentNotFoundError' });
    })
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        currentError({ name: 'ForbiddenError' });
      }
      Card.findByIdAndDelete(req.params._id)
        .then((cardData) => {
          res.send({ data: cardData });
        })
        .catch(next);
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch(() => {
      currentError({ name: 'DocumentNotFoundError' });
    })
    .then((likes) => res.send(likes))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch(() => {
      currentError({ name: 'DocumentNotFoundError' });
    })
    .then((likes) => res.send(likes))
    .catch(next);
};
