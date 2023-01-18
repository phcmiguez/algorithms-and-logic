//Under construction

function getBookDetails(isbn) {
  // Query the book database by ISBN code.
  isbn = isbn || '9781451648546'; // Steve Jobs book

  var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;

  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

}

getBookDetails('9788575226568');