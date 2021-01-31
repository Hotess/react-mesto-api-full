import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

/** Создать компонент формы  */
function AuthForm({ title, buttonSubmitText, path, entranceText, entranceLinkText, onSubmit, autoCompleteEmail, autoCompletePassword }) {
	const [values, setValues] = useState({ email: '', password: ''});
	const [isError, setIsError] = useState({});
	const [isValid, setIsValid] = useState({ email: true, password: true });
	const [isDirty, setIsDirty] = useState({ email: false, password: false });
	const [disabled, setDisabled] = useState(true);
	const [inputType, setInputType] = useState('password');
	const [isEye, setEye] = useState('hidden');

	/** Получить данные с полей ввода */
	function handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setValues({ ...values, [name]: value });
		validate(target);
	}

	/** Активация кнопки при валидации формы  */
	React.useEffect(() => {
		isDirty.email && isDirty.password ? setDisabled(false) : setDisabled(true);
	}, [isDirty.email, isDirty.password]);

	function validate(currentInput) {
		setIsValid({ ...isValid, [currentInput.name]: currentInput.validity.valid });
		setIsError({ ...isError, [currentInput.name]: currentInput.validationMessage });
		setIsDirty({ ...isDirty, [currentInput.name]: currentInput.validity.valid });

		isDirty.email && isDirty.password ? setDisabled(false) : setDisabled(true);
	}

	/** Отправить запрос данные на сервер */
	function handleSubmit(event) {
		event.preventDefault();
		
		if (!values.email && !values.password) return;
		
		onSubmit(values.password, values.email);
		setValues({ email: '', password: ''});
	}

	/** Показать/скрыть пароль */
	function handleShowPassword() {
		if (inputType === 'password') {
			setInputType('text');
			setEye('hidden');
		} else {
			setInputType('password');
			setEye('showed');
		}
	}

  	return (
		  <PopupWithForm
		  	elementName='entrance'
			title={title}
			buttonSubmitText={buttonSubmitText}
			isPopup={false}
			path={path}
			entranceText={entranceText}
			entranceLinkText={entranceLinkText}
			onSubmit={handleSubmit}
			disabled={disabled}
		  >
			<label htmlFor='email' className='form__field'>
			  <input
				type='email'
				className='form__input'
				id='email'
				name='email'
				value={values.email || ''}
				placeholder='Email'
				minLength='6'
				maxLength='40'
				autoComplete={autoCompleteEmail}
				required
				onChange={handleChange}
			  />
			  <span
				className={`form__error ${!isValid.email && 'form__error_visible'}`}
				id='email-error'
			  >
				{isError.email}
			  </span>
			</label>
			<label htmlFor='password' className='form__field'>
			  <input
				type={inputType}
				className='form__input'
				id='password'
				name='password'
				value={values.password || ''}
				placeholder='Пароль'
				minLength='8'
				maxLength='30'
				autoComplete={autoCompletePassword}
				required
				onChange={handleChange}
			  />
			  <button
				type='button'
				className={`form__button_type_password-${isEye}`}
				onClick={handleShowPassword}
				onKeyDown={(evt) => evt.preventDefault}/>
			  <span
				className={`form__error ${!isValid.password && 'form__error_visible'}`}
				id='password-error'
			  >
				{isError.password}
			  </span>
			</label>
		  </PopupWithForm>
  );
}

export default AuthForm;