let myLibrary = [
  new Book('Alice in Wonder Land','Tim Burton', 123, false),
  {
    title: 'The Three-Body Problem',
    author: 'Yuxi Liu',
    pages: 200,
    read: false
  },
  {
    title: 'Harry Potter',
    author: ' J. K. Rowling',
    pages: 600,
    read: false
  },
];

const container = document.querySelector('#container');


// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author} has ${this.pages} pages, and is ${this.read ? 'read' : 'not read yet'}`
  }
}


// TODO: addBookToLibrary
function addBookToLibrary() {
  
}

// renders all book objects in the 'myLibrary' array to the webpage
function renderBooks() {
  // loop through 'myLibrary' array to perform the following operations:
  // create a 'li' element
  // add textContent to it
  // append the 'li' element to the container ele
  myLibrary.forEach(book => {
    const node = document.createElement('li');
    node.textContent = `${book.title} by ${book.author} has ${book.pages} pages, and is ${book.read ? 'read' : 'not read yet'}`;
    container.appendChild(node);
  })
}

// TODO: process the book information from the form and create a new book object


renderBooks();

