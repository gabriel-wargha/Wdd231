export function renderReviews(reviews, reviewsList) {
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
export function loadReviews() {
	return JSON.parse(localStorage.getItem('bookReviews') || '[]');
}

export function saveReviews(reviews) {
	localStorage.setItem('bookReviews', JSON.stringify(reviews));
}
