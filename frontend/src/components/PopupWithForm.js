import {Link} from "react-router-dom";
import React from "react";

/** Создать компонент попап с общей разметки */
function PopupWithForm(props) { 
	const {
		elementName,
		children,
		title,
		buttonSubmitText,
		buttonSubmitTextIsLoading,
		noConfirm,
		isOpen, 
		onClose, 
		isLoading, 
		disabled, 
		onSubmit,
		isPopup = true,
		isForm = true,
		path,
		entranceText,
		entranceLinkText,
	} = props; 
	 
	return ( 
		<div className={ isPopup ? (`popup popup_type_${elementName} ${isOpen ? 'popup_is-opened' : ''}`) : (elementName)}>
			{ isPopup &&
				(<button
					type="button"
					aria-label="закрыть попап"
					className={`popup__close popup__close_type_${elementName}`}
					onClick={onClose}
				/>)
			}
			{ isForm ?
				(<form
					className={isPopup ? (`popup__form popup__form_type_${elementName}`) : (`form`)}
					name={elementName}
					onSubmit={onSubmit}
				>
					<h2 className={(isPopup ? 'popup__heading' : 'form__heading')}>{title}</h2>
					{children}

						{ !isPopup ?
							(!noConfirm
						&& (<div className="form__button-overlay">
								<button
									type='submit'
									className={`form__button ${disabled ? 'form__button_disabled' : 'form__button_disabled'}`}
									disabled={disabled}
								>{buttonSubmitText}
								</button>
									<div className="form__subtext">{entranceText} <Link to={path} className='form__link'>{entranceLinkText}</Link></div>
						</div>)) :
							(<button
								type='submit'
								className={`popup__button ${disabled ? 'popup__button_disabled' : ''}`}
								disabled={disabled}
							>{isLoading ? buttonSubmitTextIsLoading : buttonSubmitText}
							</button>)
						}
				</form>) :
				(<div className={`popup__container popup__container_type_${elementName}`}>
					{children}
				</div>)
			}
		</div> 
	); 
} 
 
export default PopupWithForm; 