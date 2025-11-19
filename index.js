// index.js
import { logout, onAuthStateChanged } from './auth.js';

// EXPLAIN: We import only what we need from auth.js.
// logout() ends the session, onAuthStateChanged() lets us react to login/logout.

document.addEventListener('DOMContentLoaded', () => {
	// Handle logout button
	const btn = document.getElementById('logoutBtn');
	if (btn) {
		btn.addEventListener('click', async () => {
			await logout();
			window.location.href = 'login.html';
		});
		// EXPLAIN: When the logout button is clicked, we call Firebase logout
		// and then redirect to the login page.
	}

	// Show current user’s email
	onAuthStateChanged((user) => {
		const el = document.getElementById('userEmail');
		if (el) {
			el.textContent = user ? user.email : 'Not signed in';
		}
		// EXPLAIN: Whenever auth state changes, we update the UI.
		// If a user is logged in, show their email. Otherwise show "Not signed in".
	});
});
