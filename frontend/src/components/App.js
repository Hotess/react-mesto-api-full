import React, { useState } from 'react';
import {
  Route, Switch, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/auth';
import AuthInfoMobile from './AuthInfoMobile';
import resolvePath from '../images/infoTooltip/resolve.svg';
import rejectPath from '../images/infoTooltip/reject.svg';
import loader from '../images/infoTooltip/loader.svg';

/** Создать цельный компонент со всеми функционалами */
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({
        isImageOpen: false,
        link: '',
        name: '',
    });
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
    const [cardToDelete, setCardToDelete] = useState({});
    const [isLoading, setLoading] = useState();
    const [isAuthInfoOpened, setAuthInfoOpened] = useState(false);
    const [message, setMessage] = useState({
        iconPath: loader,
        text: ''
    });

    const location = useLocation();
    const history = useHistory();
    const escape = require('escape-html');

    /**  Получить данные пользователя */
    React.useEffect(() => {
        if (loggedIn) {
            api.getUserInfo()
                .then((res) => {
                    setCurrentUser(res);
                })
                .catch((err) => console.log(`Ошибка при загрузке информации о пользователе: ${err}`));
        }
    }, [loggedIn]);

    /** Получить данные карточек из сервера */
    React.useEffect(() => {
        if (loggedIn) {
            api.getInitialCards()
                .then((cardData) => {
                    setCards(cardData);
                })
                .catch((err) => console.log(`Ошибка при загрузке карточек: ${err}`));
        }
    }, [loggedIn]);

    /** Проверить токен на актуальность */
    React.useEffect(() => {
        const token = (localStorage.getItem('jwt'));

        if (token) {
            try {
                auth.getContent(token).then((res) => {
                    setEmail(res.email);
                    setLoggedIn(true);
                    history.push('/');
                });
            } catch (err) {
                console.log(err);
            }
        }
    },[history]);

    /** Зарегистрироваться */
    function handleRegister(password, email) {
        auth.register(escape(password), email)
            .then(() => {
                setMessage({ iconPath: resolvePath, text: 'Вы успешно зарегистрировались!' });
                history.push('/sing-in');
            })
            .catch((err) => setMessage({ iconPath: rejectPath, text: err.message }));

        setInfoTooltipOpen(true);
    }

    /** Авторизироваться */
    async function handleLogin(password, email) {
        await auth.authorize(escape(password), email)
            .then(() => {
                setEmail(email);
                setLoggedIn(true);
                history.push('/');
                setMessage({ iconPath: resolvePath, text: 'Вы успешно авторизовались' });
            })
            .catch((err) => setMessage({ iconPath: rejectPath, text: err.message }));

        setInfoTooltipOpen(true);
    }

    /** Выйти из аккаунта */
    async function handleSignOut() {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        setEmail('');
        history.push('/sign-in');
    }

    /** Поставить/убрать лайк */
    function handleCardLike(card) {
        const isLiked = card.likes.some((user) => user === currentUser._id);

          api.changeLikeCardStatus(card._id, !isLiked)
              .then((newCard) => {
                  const newCards = cards.map((item) => (item._id === card._id ? newCard : item));

                  setCards(newCards);
              })
              .catch((err) => console.log(`Ошибка при попытке поставить/снять лайк: ${err}`));
    }

    /** Удалить карточку */
    function handleConfirm() {
        api.deleteCard(cardToDelete._id)
            .then(() => {
                setCards(cards.filter((item) => item !== cardToDelete));
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));
    }

    /** Подвердить удаления карточки */
    function handleCardDelete(card) {
        setConfirmPopupOpen(true);
        setCardToDelete(card);
    }

    /** Открыть AvatarPopup */
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    /** Открыть EditProfilePopup */
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    /** Открыть AddPlacePopup */
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    /** Открыть увеличенное фото */
    function handleCardClick(card) {
        const { link, name } = card;

        setSelectedCard({ isImageOpen: true, link, name });
    }

    /** Закрыть все попапы */
    function closeAllPopups() {
          setEditProfilePopupOpen(false);
          setEditAvatarPopupOpen(false);
          setAddPlacePopupOpen(false);
          setSelectedCard({
              isImageOpen: false,
              link: '',
              name: '',
          });
          setConfirmPopupOpen(false);
          setInfoTooltipOpen(false);
          setMessage({
              iconPath: loader,
              text: ''
          });
    }

    /** Обновить аватар */
    function handleUpdateAvatar(newAvatar) {
        setLoading(true);

    api.updateUserAvatar(newAvatar)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((err) => console.log(`Ошибка при обновлении аватара: ${err}`))
        .finally(() => setLoading(false));
    }

    /** Обновить данные пользователя */
    function handleUpdateUser(userData) {
        setLoading(true);

        api.updateUserInfo(userData)
            .then((newUser) => {
                setCurrentUser(newUser);
                closeAllPopups();
            })
            .catch((err) => `Ошибка при обновлении информации о пользователе: ${err}`)
            .finally(() => setLoading(false));
    }

    /** Добавить карточку */
    function handleAddPlace(card) {
        setLoading(true);

        api.addNewCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка при добавлении новой карточки: ${err}`))
            .finally(() => setLoading(false));
    }

    /** Открыть/закрыть email пользователя в мобильной версии */
    function openAuthInfo() {
        setAuthInfoOpened(!isAuthInfoOpened);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
          <div className='page'>
            {(loggedIn && isAuthInfoOpened)
              && (<AuthInfoMobile
                email={email}
                signOut={handleSignOut}
                isAuthInfoOpened={isAuthInfoOpened} />)}
            <Header
              loggedIn={loggedIn}
              locaction={location}
              email={email}
              signOut={handleSignOut}
              isAuthInfoOpened={isAuthInfoOpened}
              onHamburgerClick={openAuthInfo} />
            <Switch>
              <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main}
                cards={cards}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
              />
              <Route path='/sign-in'>
                <Login onLogin={handleLogin} />
              </Route>
              <Route path='/sign-up'>
                <Register onRegister={handleRegister} />
              </Route>
              <Route>
                {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
              </Route>
            </Switch>
            <Footer />
            <InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={closeAllPopups}
              loggedIn={loggedIn}
              message={message}
            />
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading}
            />
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              isLoading={isLoading}
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlace}
            />
            <ConfirmPopup
              isOpen={isConfirmPopupOpen}
              onClose={closeAllPopups}
              onConfirmDelete={handleConfirm}
            />
            <ImagePopup
              name={selectedCard.name}
              link={selectedCard.link}
              onClose={closeAllPopups}
              isOpen={selectedCard.isImageOpen}
            />
          </div>
        </CurrentUserContext.Provider >
      );
}

export default App