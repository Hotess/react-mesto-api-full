import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPath from './../images/header/logo.svg';
import AuthInfo from './AuthInfo';
import Hamburger from './ui/Hamburger';

/** Создать компонент шапка*/
function Header({ loggedIn, email, signOut, isAuthInfoOpened, onHamburgerClick }) {
	const { pathname } = useLocation();
	const linkText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
	const linkPath = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

	  return (
		<header className='header'>
		  <img src={logoPath} alt='Логотип сайта' className='logo' />
		  {loggedIn
			? (<>
			  <AuthInfo email={email} signOut={signOut} />
			  <Hamburger
				isAuthInfoOpened={isAuthInfoOpened}
				onHamburgerClick={onHamburgerClick} />
			</>)
			: (<Link to={linkPath} className="header__link">{linkText}</Link>)
		  }
		</header >
	  );
}

export default Header;