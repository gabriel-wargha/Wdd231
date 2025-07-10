import { searchBooks, displayBooks } from './bookUtils.js';

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('searchForm');
	const input = document.getElementById('searchInput');
	const resultsContainer = document.getElementById('results');
	const modal = document.getElementById('bookModal');
	const modalTitle = document.getElementById('modalTitle');
	const modalAuthor = document.getElementById('modalAuthor');
	const modalImage = document.getElementById('modalImage');
	const modalDescription = document.getElementById('modalDescription');
	const closeButton = document.querySelector('.close-button');

	function showModal(book) {
		modalTitle.textContent = book.title;
		modalAuthor.textContent = `By: ${book.authors}`;
		modalImage.src = book.thumbnail;
		modalDescription.textContent = book.description;
		modal.classList.remove('hidden');
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const query = input.value.trim();
		if (query !== '') {
			searchBooks(query, resultsContainer, (books) =>
				displayBooks(books, resultsContainer, showModal)
			);
		}
	});

	closeButton.addEventListener('click', () => {
		modal.classList.add('hidden');
	});

	window.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.add('hidden');
		}
	});
});
