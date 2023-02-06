// Data Structures
// Book class
class Book {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info(){
    return `${this.title} by ${this.author} has ${this.pages} pages. `
  }

  template(index){
    return `<li data-book=${index}>
              ${this.info()} 
              <button class="read">${this.read ? 'read' : 'not read'}</button>
              <button class="delete">DELETE</button>
            </li>`
  }
}

// States
let myLibrary = [
  new Book('Harry Potter','J. K. Rowling', 600, false),
];

// Cache DOM 
const element = document.querySelector('#libraryModule')
const template = element.querySelector('#books');
const inputs = element.querySelectorAll('form input');
const message = element.querySelector('#message');

// Bind events
element.addEventListener('submit', addBook);
element.addEventListener('click', removeBook);
element.addEventListener('click', toggleRead);

render();

// Utilities
function bookExists(book) {
  return myLibrary.some(ele => ele.title.trim() == book.title.trim() && ele.author.trim() == book.author.trim());
}

// renders all book objects in the 'myLibrary' array to the webpage
function render() {
  // clear user inputs and message
  template.innerHTML = '';
  message.textContent = '';
  Array.from(inputs).map(input => {
    input.value = '';
    if (input.checked) {
      input.checked = false;
    };
  })
  // loop through 'myLibrary' array to render each book
  myLibrary.forEach((book, index) => {
    const bookNode = book.template(index);
    template.innerHTML += bookNode;
  })
}

// Public apis
//add a book to the library
 function addBook(e) {
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
    render();
  }
}

function getBookIndex(node) {
  return node.getAttribute('data-book');
}

// delete a book from the library
function removeBook(e) {
  if (e.target.className == 'delete') {
    e.preventDefault();
    // get book index
    const bookNode = e.target.parentNode;
    const bookIndex = getBookIndex(bookNode);
    // filter the library array to find the book and remove it
    myLibrary = myLibrary.filter((book, index) => index != bookIndex);
    // re-render with new library
    render();
  }
}

// change read status of a book
function toggleRead(e) {
  if (e.target.className == 'read') {
    e.preventDefault();
    // get book index
    const bookNode = e.target.parentNode;
    const bookIndex = getBookIndex(bookNode);
    // update the read status of book object stored in the library
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    // re-render with new library
    render();
  }
}

