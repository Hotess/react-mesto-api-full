import React from 'react';
import AuthForm from './AuthForm';

/** Создать компонент логин */
function Login({ onLogin }) {
	function submitForm(password, email) {
		onLogin(password, email);
	}

	return (
		<AuthForm
			title='Вход'
			buttonSubmitText='Войти'
			path='/sign-up'
			onSubmit={submitForm}
			autoCompleteEmail='email'
			autoCompletePassword='current-password'
		/>
	)
}

export default Login;