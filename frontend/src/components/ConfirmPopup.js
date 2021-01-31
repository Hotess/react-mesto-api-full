import PopupWithForm from './PopupWithForm.js'; 
 
/** Создать компонент попап удаления карточки */ 
function ConfirmPopup(props) { 
	const { isOpen, onClose, isLoading, onConfirmDelete } = props; 
 
	/** Отправить запрос удаления карточки на сервер */ 
	function handleSubmit(event) { 
		event.preventDefault(); 
		 
		onConfirmDelete(); 
	} 
	 
	return ( 
		<PopupWithForm
			elementName='deleteCurrentCard'
			title='Вы уверены?' 
			buttonSubmitText='Да'
			buttonSubmitTextIsLoading='Удаление...'
			isOpen={isOpen} 
			onClose={onClose}
			isLoading={isLoading}
			onSubmit={handleSubmit} 
		/>
	); 
} 
 
export default ConfirmPopup;