import React from 'react'; 
import PopupWithForm from './PopupWithForm.js'; 
 
/** Создать компонент попап добавления карточки */ 
function AddPlacePopup(props) {
	const { isOpen, onClose, isLoading, onAddPlace } = props; 
	const [values, setValues] = React.useState({ name: '', url: '' }); 
  	const [isError, setIsError] = React.useState({}); 
  	const [isValid, setIsValid] = React.useState({ name: true, url: true });
  	const [isDirty, setIsDirty] = React.useState({ name: false, url: false });
  	const [disabled, setDisabled] = React.useState(true); 
	 
	/** Отправить запрос добавления карточки на сервер */ 
	function handleSubmit(event) { 
		event.preventDefault(); 
		 
		onAddPlace({ 
			name: values.name, 
			link: values.url, 
		}); 
	} 
	 
	/** Получить данные с полей ввода */ 
	function handleChange(event) {
    	const target = event.target;
		const value = target.value;
		const name = target.name;
		
		setValues({ ...values, [name]: value });
    	validate(target);
  	}
		 
	/** Начальное состояния формы при открытии */ 
	React.useEffect(() => { 
		setDisabled(true);
		setValues({ name: '', url: '' }); 
		setIsValid({ name: true, url: true }); 
		setIsDirty({ name: false, url: false });
		setIsError('');  
  	}, [isOpen]); 
 
	/** Активация кнопки при валидации формы  */ 
	React.useEffect(() => {
    	isDirty.name && isDirty.url ? setDisabled(false) : setDisabled(true);
  	}, [isDirty.name, isDirty.url]);
	 
	/** Валидация формы */ 
	function validate(currentInput) {
    	setIsValid({ ...isValid, [currentInput.name]: currentInput.validity.valid });
		setIsError({ ...isError, [currentInput.name]: currentInput.validationMessage });
		setIsDirty({ ...isDirty, [currentInput.name]: currentInput.validity.valid });
		
		isDirty.name && isDirty.url ? setDisabled(false) : setDisabled(true); 
  	}
	 
	return ( 
		<PopupWithForm
			elementName='addPlace'
			isPopup={true}
			title='Новое место'
			buttonSubmitText='Добавить'
			buttonSubmitTextIsLoading='Добавление...'
			isOpen={isOpen} 
			onClose={onClose}
			isLoading={isLoading}
			disabled={disabled} 
			onSubmit={handleSubmit} 
		>
			<input
				type="text" 
				name="name" 
				value={values.name} 
				placeholder="Название" 
				className="popup__input" 
				minLength="2" 
				maxLength="30" 
				required 
				onChange={handleChange} 
			/>  
			<span 
				className={`popup__error ${isValid.name ? '' : 'popup__error_visible'}`} 
			> 
				{isError.name} 
			</span> 
			<input
				type="url" 
				name="url" 
				value={values.url} 
				placeholder="Ссылка на картину" 
				className="popup__input" 
				required 
				onChange={handleChange} 
			/>  
			<span 
				className={`popup__error ${isValid.url ? '' : 'popup__error_visible'}`} 
			> 
				{isError.url} 
			</span>  
		</PopupWithForm> 
	); 
} 
 
export default AddPlacePopup;