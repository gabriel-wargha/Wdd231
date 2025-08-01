import { loginUser } from './authUtils.js';

window.addEventListener('DOMContentLoaded', function () {
	const loginForm = document.getElementById('loginForm');

	loginForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const username = document.getElementById('username').value.trim();
		const password = document.getElementById('password').value;

		// **Here you call your new function `loginUser`**
		const foundUser = loginUser(username, password);

		if (foundUser) {
			alert('Login successful');
			localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
			window.location.href = 'index.html';
		} else {
			alert('Incorrect username or password');
		}
	});
});
