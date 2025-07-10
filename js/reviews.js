document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('reviewForm');
	const reviewsList = document.getElementById('reviewsList');

	let reviews = JSON.parse(localStorage.getItem('bookReviews') || '[]');

	function renderReviews() {
		reviewsList.innerHTML = '';

		reviews.forEach((review) => {
			const li = document.createElement('li');
			li.innerHTML = `
        <strong>${review.book}</strong> - ⭐ ${review.rating}/5<br>
        <em>${review.text}</em>
      `;
			reviewsList.appendChild(li);
		});
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const book = document.getElementById('bookTitle').value.trim();
		const rating = document.getElementById('rating').value.trim();
		const text = document.getElementById('reviewText').value.trim();

		if (!book || !rating || !text) {
			alert('Fill in all fields!');
			return;
		}

		const newReview = { book, rating, text };
		reviews.push(newReview);

		localStorage.setItem('bookReviews', JSON.stringify(reviews));

		renderReviews();

		form.reset();
	});
	renderReviews();
});
