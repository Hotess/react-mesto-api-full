import React from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext';

/** Создать компонент карточек */ 
function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const { card, index, onCardClick, onCardLike, onCardDelete } = props; 
	const isLiked = card.likes.some(user => user._id === currentUser._id); 
	const buttonCardLikeClassName = isLiked ? 'element__like_active': ''; 
	const buttonCardTrashClassName = (card.owner._id === currentUser._id) ? 'element__trash_active': ''; 
	 
	/** Открыть модальное изображение при клике на карточку */ 
	function handleClickOpenModalImage() { 
		onCardClick(card); 
	} 
	 
	/** Поставить/снять лайк с текущей карточки */ 
	function handleLikeCardClick() { 
		onCardLike(card); 
	} 
	 
	/** Удалить текущую карточку */ 
	function handleDeleteClick() { 
		onCardDelete(card); 
	} 
	 
	return ( 
		<article className="element" key={index}> 
			<img  
				src={card.link}  
				alt={card.name}  
				className="element__img" 
				onClick={handleClickOpenModalImage} 
			/> 
			<button  
				type="button"  
				aria-label="удалить карточку"  
				className={`element__trash ${buttonCardTrashClassName}`} 
				onClick={handleDeleteClick} 
			/> 
			<div className="element__item"> 
				<h2 className="element__text">{card.name}</h2> 
				<div className='element__like-block'> 
					<button  
						type="button"  
						aria-label="лайк"  
						className={`element__like ${buttonCardLikeClassName}`} 
						onClick={handleLikeCardClick} 
					/> 
					<span className="element__count">{card.likes.length}</span> 
				</div> 
			</div> 
		</article> 
	); 
} 
 
export default Card; 