import { loadReviews, saveReviews, renderReviews } from './reviewUtils.js';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('reviewForm');
	const reviewsList = document.getElementById('reviewsList');

	let reviews = loadReviews();

	renderReviews(reviews, reviewsList);

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

		saveReviews(reviews);

		renderReviews(reviews, reviewsList);

		form.reset();
	});
});
