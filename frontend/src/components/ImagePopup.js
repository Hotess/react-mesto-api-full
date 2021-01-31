/** Создать компонент Модальное изображение */
function ImagePopup(props) {
	const { link, name, isOpen, onClose } = props;
	
	return (
		<div className={`popup popup_type_modalImage ${isOpen ? 'popup_is-opened' : ''}`}> 
			<figure className="popup__figure"> 
				<button 
					type="button" 
					aria-label="закрыть изображение" 
					className="popup__close popup__close_type_modalImage"
					onClick={onClose}
				/> 
				<img 
					src={link} 
					alt={name} 
					className="popup__img popup__img_type_modalImage" /> 
				<figcaption className="popup__text popup__text_type_modalImage">{name}</figcaption> 
			</figure>
		</div>
	);
}

export default ImagePopup;