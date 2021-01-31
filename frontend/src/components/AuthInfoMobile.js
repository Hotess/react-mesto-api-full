import React from 'react';

/** Создать компонент логин singOut в мобильном разрешении*/
function AuthInfoMobile({ email, signOut, isAuthInfoOpened }) {
	const authInfoMobileClassName =
	`header__auth-info-mobile
	${isAuthInfoOpened
	  ? 'header__auth-info-mobile_opened'
	  : 'header__auth-info-mobile_closed'}`;
	
	return (
		<div className={authInfoMobileClassName}>
		  <span className="header__mail">{email}</span>
		  <button className='header__button' onClick={signOut}>Выйти</button>
		</div>
	);
}

export default AuthInfoMobile;