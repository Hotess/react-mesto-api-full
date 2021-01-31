import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/** Создать высокого уровня компонент */
const ProtectedRoute = ({ component: Component, ...props }) => (
	<Route>
		{
			() => (props.loggedIn ? <Component {...props} /> : <Redirect to='/sign-in' />)
		}
	</Route>
);

export default ProtectedRoute;