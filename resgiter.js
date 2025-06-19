window.addEventListener('DOMContentLoaded', function () {
	const registerForm = document.getElementById('registerForm');

	registerForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const username = document.getElementById('username').value.trim();
		const password = document.getElementById('password').value;

		if (username.length < 3 || password.length < 3) {
			alert('Username and password must be at least 3 characters each');
			return;
		}

		let users = JSON.parse(localStorage.getItem('users') || '[]');

		const userExists = users.some((user) => user.username === username);
		if (userExists) {
			alert('That username is already taken');
			return;
		}

		users.push({ username: username, password: password });

		localStorage.setItem('users', JSON.stringify(users));

		alert('User registered successfully');
		window.location.href = 'login.html';
	});
});
