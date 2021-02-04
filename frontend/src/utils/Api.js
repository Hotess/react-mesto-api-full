import { apiOptions } from './utils';

/** 
	* Класс Api
	* @constructor
	* @param {string} url - основная ссылка.
	* @param {string} headers - авторизация.
*/
class Api {
	constructor(options) {
    	this._url = options.baseUrl;
    	this._headers = options.headers;
    	this._credentials = options.credentials;
  	}

  	/** Отправить запроса */
  	_sendRequest(path, parameters) {
		return fetch(`${this._url}${path}`, parameters).then((res) => {
      		if (res.ok) {
        		return res.json();
      		}

      		return Promise.reject(res.status);
    	});
  	}

  	/** Получение данные пользователя */
  	getUserInfo() {
    	return this._sendRequest(`users/me`, {
      		headers: this._headers,
			credentials: this._credentials
    	});
	}

  	/** Получить карточки из сервера */
	getInitialCards() {
		return this._sendRequest(`cards`, {
			headers: this._headers,
			credentials: this._credentials
		});
	}

	/** Обновить данные пользователя */
	updateUserInfo(newUserInfo) {
		return this._sendRequest(`users/me`, {
			method: 'PATCH',
			headers: this._headers,
			credentials: this._credentials,
			body: JSON.stringify({
				name: newUserInfo.name,
				about: newUserInfo.about,
			}),
		});
	}

	/** Добавить карточку */
	addNewCard(newCard) {
		return this._sendRequest(`cards`, {
			method: 'POST',
			headers: this._headers,
			credentials: this._credentials,
			body: JSON.stringify({
				name: newCard.name,
				link: newCard.link
			}),
		});
	}
	
	/** Поставить/убрать лайк */
	changeLikeCardStatus(id, isLiked) {
		return this._sendRequest(`cards/${id}/likes`, {
			method: `${isLiked ? 'PUT' : 'DELETE'}`,
			headers: this._headers,
			credentials: this._credentials
		});
	}

	/** Удалить карточку */
	deleteCard(id) {
		return this._sendRequest(`cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
			credentials: this._credentials
		});
	}

	/** Обновить аватар */
	updateUserAvatar(avatar) {
		return this._sendRequest(`users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			credentials: this._credentials,
			body: JSON.stringify({ avatar: avatar })
		});
	}
}

export const api = new Api(apiOptions);