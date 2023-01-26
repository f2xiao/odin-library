let myLibrary = [
  new Book('Harry Potter','J. K. Rowling', 600, false),
];

const container = document.querySelector('#container');
const submit = document.querySelector('#submit');
const inputs = document.querySelectorAll('form input');

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} pages, and is ${this.read ? 'read' : 'not read yet'}`
}


// addBookToLibrary
function addBookToLibrary(e) {
  // process the book information from the form inputs and create a new book object
  e.preventDefault();
  // get all the user inputs
  const arr = Array.from(inputs).map(input => input.value);
  // convert the read value
  // BUG: input value conversion is not expected
  arr[3] = arr[3] === "on" ? true : false;
  // create a new book obj and push it to the `myLibrary` array
  const book = new Book(...arr);
  myLibrary.push(book);
  // render the new book
  container.innerHTML = '';
  renderBooks();
}

function createBookNode(book) {
  // create a 'li' element
  // add textContent to it
  // append the 'li' element to the container ele
  const node = document.createElement('li');
  node.textContent = book.info();
  return node;
}

// renders all book objects in the 'myLibrary' array to the webpage
function renderBooks() {
  // loop through 'myLibrary' array to render each book
  myLibrary.forEach(book => container.appendChild(createBookNode(book)));
}

submit.addEventListener('click', addBookToLibrary)

renderBooks();

