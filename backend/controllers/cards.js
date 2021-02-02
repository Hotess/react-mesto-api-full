const { Types } = require('mongoose');
const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const { ObjectId } = Types;

const getCards = async function (req, res, next) {
  try {
    const cards = await Card.find({}).populate(['owner', 'likes']);
    return res.status(200).send(cards);
  } catch (e) {
    next(e);
  }
};

const createCard = async function (req, res, next) {
  try {
    const { name, link } = req.body;
    const { user } = req;
    const card = await Card.create({ name, link, owner: user._id });
    const populatedCard = await Card.populate(card, { path: 'owner' });
    res.status(201).send(populatedCard);
  } catch (e) {
    next(e);
  }
};

const deleteCard = async function (req, res, next) {
  const cardId = req.params.id;
  if (!ObjectId.isValid(cardId)) next(new NotFoundError('Неправильное значение ID'));
  try {
    const deletingCard = await Card.findById(cardId);
    if (!deletingCard) next(new NotFoundError('Карточка не найдена.'));
    if (deletingCard.owner.toString() !== req.user._id.toString()) {
      return next(new ForbiddenError('Нельзя удалять чужую карточку'));
    }
    await Card.findByIdAndDelete(cardId);
    return res.status(200).send({ message: 'Карточка удалена' });
  } catch (e) {
    next(e);
  }
};

const likeCard = async function (req, res, next) {
  const userId = req.user._id;
  const cardId = req.params.id;
  if (!ObjectId.isValid(cardId)) next(new NotFoundError('Неправильное значение ID'));
  try {
    const card = await Card
      .findByIdAndUpdate(
        cardId,
        { $addToSet: { likes: userId } },
        { new: true, runValidators: true },
      ).populate(['owner', 'likes']);
    if (!card) next(new NotFoundError('Карточка не найдена'));
    return res.status(200).send(card);
  } catch (e) {
    next(e);
  }
};

const dislikeCard = async function (req, res, next) {
  const userId = req.user._id;
  const cardId = req.params.id;
  if (!ObjectId.isValid(cardId)) next(new NotFoundError('Неправильное значение ID'));
  try {
    const card = await Card
      .findByIdAndUpdate(cardId,
        { $pull: { likes: userId } },
        { new: true, runValidators: true }).populate(['owner', 'likes']);
    if (!card) {
      next(new NotFoundError('Карточка не найдена'));
    } else {
      return res.status(200).send(card);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
