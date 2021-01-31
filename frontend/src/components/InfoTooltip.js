import React from 'react';
import PopupWithForm from './PopupWithForm';

/** Создать попап ошибка/успешно */
function InfoTooltip(props) {
	const { isOpen, onClose, loggedIn, message } = props;

	return (
		<PopupWithForm
	  		elementName='infoTooltip'
			isForm={false}
	  		noConfirm={true}
	  		isOpen={isOpen}
	  		onClose={onClose}
	  		loggedIn={loggedIn}
		>
	  		<img src={message.iconPath} alt='Иконка авторизации' className='popup__icon' />
			<h2 className='popup__heading popup__heading_type_infoTooltip'>{message.text}</h2>
		</PopupWithForm>
	);
}

export default InfoTooltip;