import React from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import Card from './Card.js';

/** Создать компонент Меню */
function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const {
		cards,
		onEditProfile,
		onAddPlace,
		onEditAvatar,
		onCardClick,
        onCardLike,
        onCardDelete,
	} = props;
	console.log(!!(cards));
	return (
		<main>
			<section className="profile">
				<div className="profile__avatar">
					<img src={currentUser.avatar} alt="Аватар" className="profile__img" />
					<button 
						className="profile__button profile__button_open_editAvatarPopup" 
						onClick={onEditAvatar} 
					/>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{currentUser.name}</h1>
					<button 
						type="button"
						aria-label="кнопка-редактирования" 
						className="profile__button profile__button_open_editProfilePopup"
						onClick={onEditProfile} 
					/>
					<p className="profile__working">{currentUser.about}</p>
				</div>
				<button 
					type="button" 
					aria-label="кнопка-добавления" 
					className="profile__button profile__button_open_addPlacePopup"
					onClick={onAddPlace}
				/>
			</section>
			<section className="elements">
				{ cards? cards.map((card) => (
					<Card
						key={card._id}
						card={card}
						onCardClick={onCardClick}
            			onCardLike={onCardLike}
            			onCardDelete={onCardDelete}
					/>
				)): null}
			</section>
		</main>
	);
}

export default Main;