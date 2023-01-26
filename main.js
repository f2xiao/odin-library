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


// TODO: addBookToLibrary
function addBookToLibrary(e) {
  // process the book information from the form inputs and create a new book object
  e.preventDefault();
  // get all the user inputs
  const arr = Array.from(inputs).map(input => input.value);
 // create a new book obj and push it to the `myLibrary` array
  console.log(arr)
  // convert the read value
  if (arr[3] == "on") {
    arr[3] = true;
  } else {
    arr[3] = false;
  }
  myLibrary.push(new Book(...arr));
  // render the books
  renderBooks();
}

// renders all book objects in the 'myLibrary' array to the webpage
function renderBooks() {
  // loop through 'myLibrary' array to perform the following operations:
  // create a 'li' element
  // add textContent to it
  // append the 'li' element to the container ele
  myLibrary.forEach(book => {
    const node = document.createElement('li');
    node.textContent = book.info();
    container.appendChild(node);
  })
}


submit.addEventListener('click', addBookToLibrary)

renderBooks();

