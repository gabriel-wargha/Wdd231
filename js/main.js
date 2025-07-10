window.addEventListener('DOMContentLoaded', function () {
	const loginBtn = document.querySelector('.login');
	const signupBtn = document.querySelector('.signup');

	if (loginBtn) {
		loginBtn.addEventListener('click', function () {
			window.location.href = 'login.html'; // make sure this file exists
		});
	}

	if (signupBtn) {
		signupBtn.addEventListener('click', function () {
			window.location.href = 'register.html'; // make sure this file exists
		});
	}
});
