export function searchBooks(query, resultsContainer, onSuccess) {
	const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
		query
	)}&maxResults=20`;
	resultsContainer.innerHTML = '';

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			if (data.items) {
				onSuccess(data.items);
			} else {
				resultsContainer.innerHTML = '<p>No results found</p>';
			}
		})
		.catch((error) => {
			console.log('Error Fetching data', error);
			resultsContainer.innerHTML =
				'<p>Error loading results. Try again later.</p>';
		});
}

export function displayBooks(books, resultsContainer, onCardClick) {
	books.slice(0, 12).forEach((book) => {
		const info = book.volumeInfo;
		const title = info.title || 'No title';
		const authors = info.authors ? info.authors.join(', ') : 'Unknown author';
		const thumbnail =
			info.imageLinks?.thumbnail || './images/book-placeholder.png';
		const description = info.description
			? info.description.slice(0, 150) + '...'
			: 'No description.';

		const card = document.createElement('div');
		card.classList.add('bookCard', 'fade-in');
		card.innerHTML = `
			<img src="${thumbnail}" alt="Book cover">
			<strong><h3>${title}</h3></strong>
			<p><strong>By: ${authors}</p></strong>
			<p>${description}</p>
		`;

		resultsContainer.appendChild(card);

		card.addEventListener('click', () => {
			onCardClick({
				title,
				authors,
				thumbnail,
				description: info.description || 'No description available.',
			});
		});

		card.style.cursor = 'pointer';
	});
}
