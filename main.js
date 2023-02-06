// Data Structures
// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} pages. `
}

Book.prototype.createBookNode = function () {
  // create a 'li' element
  // add textContent to it
  // append the 'li' element to the container ele
  const node = document.createElement('li');

  // create delete button node
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.textContent = 'DELETE';
  deleteButton.addEventListener('click', removeBookFromLibrary);

  // create read toggle-button node
  const readButton = document.createElement('button');
  readButton.className = 'read';
  readButton.textContent = `${this.read ? 'read' : 'not read'}`;
  readButton.addEventListener('click', changeReadStatus);

  node.textContent = this.info();
  node.appendChild(readButton);
  node.appendChild(deleteButton);
  return node;
}
// States
let myLibrary = [
  new Book('Harry Potter','J. K. Rowling', 600, false),
];

// Cache DOM 
const container = document.querySelector('#container');
const newBook = document.querySelector('#newBook');
const inputs = document.querySelectorAll('form input');
const message = document.querySelector('#message');
const deleteButtons = Array.from(document.querySelectorAll('.delete'));

// Bind events
newBook.addEventListener('submit', addBookToLibrary);

renderLibrary();

// Utilities
function bookExists(book) {
  return myLibrary.some(ele => ele.title == book.title && ele.author == book.author);
}

// renders all book objects in the 'myLibrary' array to the webpage
function renderLibrary() {
  message.textContent = '';
  // loop through 'myLibrary' array to render each book
  myLibrary.forEach((book, index) => {
    const bookNode = book.createBookNode();
    bookNode.setAttribute('data-book', index);
    container.appendChild(bookNode);
  });
}

function renderNewLibrary() {
  container.innerHTML = '';
  renderLibrary();
}

// Public apis

//add a book to the library
 function addBookToLibrary(e) {
  e.preventDefault();
  // get all the user inputs and store them in an array
  const inputsArr = Array.from(inputs);
  const checkbox = inputsArr.pop();
  const arr = inputsArr.map(input => input.value);
  // add the read boolean value
  arr.push(checkbox.checked);
  // create a new book obj 
  const book = new Book(...arr);
  // check if it exists in the "myLibrary" array
  if (bookExists(book)) {
    message.textContent = 'Sorry, the book already exists';
  } else {
    // if not, push it to the `myLibrary` array
    myLibrary.push(book);
    // re-render with new library
    renderNewLibrary();
  }
}

function getBookIndex(node) {
  return node.getAttribute('data-book');
}

// delete a book from the library
function removeBookFromLibrary(e) {
  e.preventDefault();
  // get book index
  const bookNode = e.target.parentNode;
  const bookIndex = getBookIndex(bookNode);
  // filter the library array to find the book and remove it
  myLibrary = myLibrary.filter((book, index) => index != bookIndex);
  // re-render with new library
  renderNewLibrary();
}

// change read status of a book
function changeReadStatus(e) {
  e.preventDefault();
  // get book index
  const bookNode = e.target.parentNode;
  const bookIndex = getBookIndex(bookNode);
  // update the read status of book object stored in the library
  myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
  // re-render with new library
  renderNewLibrary();
}

