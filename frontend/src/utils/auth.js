import BadRequestError from '../errors/BadRequestError';
import UnauthorizedError from '../errors/UnauthorizedError';
export const BASE_URL = 'http://api.leon.students.nomoreparties.xyz';

/** Отправлять запрос на регистрацию */
export const register = (password, email) => fetch(`${BASE_URL}/signup`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
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
export const authorize = (password, email) => fetch(`${BASE_URL}/signin`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({ password, email }),
})
.then((res) => {
	return res.ok ? res.json() : Promise.reject(res);
})
.then((data) => {
	if (data.token) {
		localStorage.setItem('jwt', data.token);

		return data.token;
	}
})
.catch(err => {
	if (err.status === 400) {
		throw new BadRequestError('Не передано одно из полей');
	} else if (err.status === 401) {
		throw new UnauthorizedError('Пользователь с таким email не найден');
	}

	throw Error(`Произошла ошибка: ${err.status}`);
});

/** Отправлять запрос на получения токена */
export const getContent = (token) => fetch(`${BASE_URL}/users/me`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${token}`,
	},
})
.then((res) => {
	return res.ok ? res.json() : Promise.reject(new Error(`Произошла ошибка: ${res.status}`))
})
.catch((err) => {
	throw new UnauthorizedError(err.message)
});