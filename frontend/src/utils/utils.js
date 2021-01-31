const token = localStorage.getItem('jwt');

export const apiOptions = {
	baseUrl: 'http://api.leon.students.nomoreparties.xyz/',
	headers: {
		'Content-Type': 'application/json',
		'authorization':`Bearer ${token}`
	}
};