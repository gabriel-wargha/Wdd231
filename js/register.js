import { registerUser } from './authUtils.js';
window.addEventListener('DOMContentLoaded', function () {
	const registerForm = document.getElementById('registerForm');

	registerForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const username = document.getElementById('username').value.trim();
		const password = document.getElementById('password').value;

		const result = registerUser(username, password);

		if (result.success) {
			alert(result.message);
			window.location.href = 'login.html';
		} else {
			alert(result.message);
		}
	});
});
