import React from 'react';

/** Создать компонент singOut */
function AuthInfo({ email, signOut }) {
	return (
		<div className='header__auth-info'>
			<span className="header__mail">{email}</span>
			<button className='header__button' onClick={signOut}>Выйти</button>
		</div>
	);
}

export default AuthInfo;