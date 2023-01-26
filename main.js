let myLibrary = [
  {
    title: 'Alice in Wonder Land',
    author: 'Tim Burton',
    pages: 123,
    read: false
  },
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


// TODO: Book constructor
function Book() {
  
}

// TODO: addBookToLibrary
function addBookToLibrary() {
  
}

// renders all book objects in the 'myLibrary' array to the webpage
function displayBooks() {
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


displayBooks();

