import React from 'react';

/** Создать компонент Hamburger */
function Hamburger({ isAuthInfoOpened, onHamburgerClick }) {
	const hamburgerClassName =
	`hamburger
	${isAuthInfoOpened
	  ? 'hamburger_opened'
	  : 'hamburger_closed'}`;

	return (
		<button
		  className={hamburgerClassName}
		  onClick={onHamburgerClick}>
		  <span></span>
		</button>
	)
}

export default Hamburger;