import React from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js'; 
 
/** Создать компонент попап редактирования профиля */ 
function EditProfilePopup(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const { isOpen, onClose, isLoading, onUpdateUser } = props; 
	const [values, setValues] = React.useState({}); 
  	const [isError, setIsError] = React.useState({}); 
  	const [isValid, setIsValid] = React.useState({ name: true, description: true }); 
  	const [disabled, setDisabled] = React.useState(true); 
	 
	/** Получить данные с полей ввода */ 
	function handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		setValues({ ...values, [name]: value });
    	validate(target);
  	}
	 
	/** Отправить запрос на обновления профиля на сервер */ 
	function handleSubmit(event) {
    	event.preventDefault();
		
   		onUpdateUser({
      		name: values.name,
      		about: values.description,
    	});
	}
	 
	/** Начальное состояния формы при открытии */ 
	React.useEffect(() => { 
		setDisabled(true);
		setValues({ name: currentUser.name, description: currentUser.about }); 
		setIsValid({ name: true, description: true }); 
		setIsError('');  
  	}, [isOpen, currentUser]); 
 
	/** Активация кнопки при валидации формы */ 
	React.useEffect(() => { 
		isValid.name && isValid.description ? setDisabled(false) : setDisabled(true); 
  	}, [isValid.name, isValid.description]); 
	 
	/** Валидация формы */ 
	function validate(currentInput) {
		setIsValid({ ...isValid, [currentInput.name]: currentInput.validity.valid });
		setIsError({ ...isError, [currentInput.name]: currentInput.validationMessage });
		
		isValid.name && isValid.description ? setDisabled(false) : setDisabled(true); 
  	}
	 
	return ( 
		<PopupWithForm
			elementName='editProfile'
			title='Редактировать' 
			buttonSubmitText='Сохранить' 
			buttonSubmitTextIsLoading='Сохранение...' 
			isOpen={isOpen} 
			onClose={onClose} 
			isLoading={isLoading} 
			disabled={disabled} 
			onSubmit={handleSubmit} 
		>
		<input
			type="text"  
			name="name" 
			value={values.name || ''} 
			placeholder="Ваше имя"  
			className="popup__input"  
			minLength="2" 
			maxLength="40"  
			required 
			onChange={handleChange} 
		/>  
		<span   
			className={`popup__error ${isValid.name ? '' : 'popup__error_visible'}`} 
		> 
			{isError.name} 
		</span>  
		<input
			type="text"  
			name="description" 
			value={values.description || ''} 
			placeholder="Расскажите о себе"  
			className="popup__input"  
			minLength="2"  
			maxLength="200"  
			required 
			onChange={handleChange} 
		/>  
		<span   
			className={`popup__error ${isValid.description ? '' : 'popup__error_visible'}`} 
		> 
			{isError.description} 
		</span>
	</PopupWithForm> 
	); 
} 
 
export default EditProfilePopup; 