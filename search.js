document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('searchForm');
	const input = document.getElementById('searchInput');
	const resultsContainer = document.getElementById('results');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const query = input.value.trim();
		if (query != '') {
			searchBooks(query);
		}
	});

	function searchBooks(query) {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
			query
		)}&maxResults=20`;

		resultsContainer.innerHTML = '';

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.items) {
					displayBooks(data.items);
				} else {
					resultsContainer.innerHTML = '<p>No results found</p>';
				}
			})
			.catch((error) => {
				console.log('Error Fetching data', error);

				resultsContainer.innerHTML =
					'<p> Error loading results. Try again later.</p>';
			});
	}

	function displayBooks(books) {
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
			card.classList.add('bookCard');
			card.classList.add('fade-in');

			card.innerHTML = `
      <img src="${thumbnail}" alt="Book cover">
      <strong><h3>${title}</h3></strong>
      <p><strong>By: ${authors}</p></strong>
      <p>${description}</p>
    `;
			resultsContainer.appendChild(card);

			card.addEventListener('click', () => {
				alert('You clicked: ' + title);
			});

			card.style.cursor = 'pointer';
		});
	}
});
