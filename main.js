// Data Structures
let myLibrary = [
  new Book('Harry Potter','J. K. Rowling', 600, false),
];

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

Book.prototype.createBookNode = function () {
  // create a 'li' element
  // add textContent to it
  // append the 'li' element to the container ele
  const node = document.createElement('li');
  node.textContent = this.info();
  return node;
}

// addBookToLibrary
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
    // render the new book
    container.innerHTML = '';
    renderBooks();
  }
}

function bookExists(book) {
  return myLibrary.some(ele => ele.title == book.title && ele.author == book.author);
}

// renders all book objects in the 'myLibrary' array to the webpage
function renderBooks() {
  message.textContent = '';
  // loop through 'myLibrary' array to render each book
  myLibrary.forEach(book => container.appendChild(book.createBookNode()));
}

// User Interactions
const container = document.querySelector('#container');
const newBook = document.querySelector('#newBook');
const inputs = document.querySelectorAll('form input');
const message = document.querySelector('#message');

newBook.addEventListener('submit', addBookToLibrary);

renderBooks();

