import React from 'react'; 
import PopupWithForm from './PopupWithForm.js'; 
 
/** Создать компонент попап обновления аватара */ 
function EditAvatarPopup(props) {
	const urlRef = React.useRef('');
	const { isOpen, onClose, isLoading, onUpdateAvatar } = props; 
  	const [isError, setIsError] = React.useState(''); 
  	const [isValid, setIsValid] = React.useState(true); 
  	const [disabled, setDisabled] = React.useState(true); 
	 
	/** Отправить запрос обновления аватара на сервер */ 
	function handleSubmit(event) { 
		event.preventDefault(); 
		 
		onUpdateAvatar(urlRef.current.value); 
	} 
		 
	/** Начальное состояния формы при открытии */ 
	React.useEffect(() => { 
		setDisabled(true); 
		urlRef.current.value = ''; 
		setIsValid(true); 
		setIsError(''); 
  	}, [isOpen]); 
 
	/** Активация кнопки при валидации формы  */ 
	React.useEffect(() => {
    	isValid ? setDisabled(false) : setDisabled(true);
  	}, [isValid]);

	/** Валидация формы */
  	function validate() {
		setIsValid(urlRef.current.validity.valid);
		setIsError(urlRef.current.validationMessage);
    	
		isValid ? setDisabled(false) : setDisabled(true); 
  	}
	 
	return ( 
		<PopupWithForm
			elementName='editAvatar'
			title='Обновить аватар' 
			buttonSubmitText='Сохранить'
			buttonSubmitTextIsLoading='Сохранение...'
			isOpen={isOpen} 
			onClose={onClose}
			isLoading={isLoading}
			disabled={disabled} 
			onSubmit={handleSubmit} 
		>
			<input
				ref={urlRef}
				type="url" 
				name="url" 
				placeholder="Ссылка на картину" 
				className="popup__input" 
				required
				onChange={validate}
			/>  
			<span  
				className={`popup__error ${isValid ? '' : 'popup__error_visible'}`} 
			> 
				{isError} 
			</span>  
		</PopupWithForm> 
	); 
} 
 
export default EditAvatarPopup; 