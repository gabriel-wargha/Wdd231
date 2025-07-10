export function loginUser(username, password) {
	const users = JSON.parse(localStorage.getItem('users') || '[]');
	return users.find(
		(user) => user.username === username && user.password === password
	);
}

export function registerUser(username, password) {
	if (username.length < 3 || password.length < 3) {
		return {
			success: false,
			message: 'Username and password must be at least 3 characters each',
		};
	}

	let users = JSON.parse(localStorage.getItem('users') || '[]');
	const userExists = users.some((user) => user.username === username);

	if (userExists) {
		return { success: false, message: 'That username is already taken' };
	}

	users.push({ username, password });
	localStorage.setItem('users', JSON.stringify(users));

	return { success: true, message: 'User registered successfully' };
}
