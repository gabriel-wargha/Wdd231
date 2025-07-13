document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search);

	const title = params.get('title') || 'No title found';
	const author = params.get('author') || 'Unknown author';
	const desc = params.get('desc') || 'No description available';
	const img = params.get('img') || './images/book-placeholder.png'; // default image if none

	const bookTitle = document.getElementById('bookTitle');
	const bookAuthor = document.getElementById('bookAuthor');
	const bookDescription = document.getElementById('bookDescription');
	const bookImage = document.getElementById('bookImage');

	bookTitle.textContent = title;
	bookAuthor.textContent = `By: ${author}`;
	bookDescription.textContent = desc;
	bookImage.src = img;
});
