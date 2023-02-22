let myLibrary = [];

// Function that creates the constructor as well as a function within it to display the information of a book
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return [this.title, this.author, this.pages, this.read];
    };
  }
}

function addBookToLibrary() {
  // Get the input values for the book
  let title = prompt("Enter the title of the book:");
  let author = prompt("Enter the author of the book:");
  let pages = prompt("Enter the number of pages of the book:");
  let read = prompt("Has the book been read (yes/no)?") === "yes";

  // Create a new Book instance with the input values
  let newBook = new Book(title, author, pages, read);

  // Add the new book to the library
  myLibrary.push(newBook);
}

const addBookButton = document.getElementById('add-book-button')