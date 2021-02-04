import BadRequestError from '../errors/BadRequestError';
import UnauthorizedError from '../errors/UnauthorizedError';
import { apiOptions } from './utils';

/** Отправлять запрос на регистрацию */
export const register = (password, email) => fetch(`${apiOptions.baseUrl}signup`, {
	method: 'POST',
	headers: apiOptions.headers,
	body: JSON.stringify({ password, email }),
})
.then((res) => {
	return res.ok ? res.json() : Promise.reject(new Error('Что-то пошло не так!\n' +
		'Попробуйте ещё раз.'));
})
.catch((err) => {
	throw new BadRequestError(err.message);
});

/** Отправлять запрос на авторизацию */
export const authorize = (password, email) => fetch(`${apiOptions.baseUrl}signin`, {
	method: 'POST',
	headers: apiOptions.headers,
	credentials: apiOptions.credentials,
	body: JSON.stringify({ password, email }),
})
.then((res) => {
	return res.ok ? res.json() : Promise.reject(res);
})
.catch(err => {
	if (err.status === 400) {
		throw new BadRequestError('Не передано одно из полей');
	} else if (err.status === 401) {
		throw new UnauthorizedError('Пользователь с таким email не найден');
	}

	throw Error(`Произошла ошибка: ${err.status}`);
});

export const logOut = () => fetch(`${apiOptions.baseUrl}logout`,
	{
		method: 'DELETE'
	})
	.then((res) => {
		return res.ok ? res.json() : Promise.reject(new Error('Что-то пошло не так!'));
	})
	.catch((err) => {
		console.log(err);
	});

/** Отправлять запрос на получения токена */
export const getContent = () => fetch(`${apiOptions.baseUrl}users/me`, {
	method: 'GET',
	headers: apiOptions.headers,
	credentials: apiOptions.credentials
})
.then((res) => {
	return res.ok ? res.json() : Promise.reject(new Error(`Произошла ошибка: ${res.status}`))
})
.catch((err) => {
	throw new UnauthorizedError(err.message)
});