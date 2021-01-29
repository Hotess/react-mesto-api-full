const cardsRouter = require('express').Router();
const { validateCard, validateId } = require('../middlewares/requestValidation');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

cardsRouter.get('/api/cards', getCards);
cardsRouter.post('/api/cards', validateCard, createCard);
cardsRouter.delete('/api/cards/:_id', validateId, deleteCard);
cardsRouter.put('/api/cards/:_id/likes', validateId, likeCard);
cardsRouter.delete('/api/cards/:_id/likes', validateId, dislikeCard);

module.exports = cardsRouter;
