// Select elements from the HTML document
const addBookButton = document.querySelector("#add-book-button");
const addBookSection = document.querySelector(".add-book-section");
const bookCardContainer = document.querySelector("#book-cards");
const form = document.querySelector("#add-book-form");

// Add a click event listener to the "Add Book" button
addBookButton.addEventListener("click", () => {
  // Toggle the "active" class on the addBookSection to show/hide it
  addBookSection.classList.toggle("active");
});

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get references to form input elements
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector('input[name="read-radio"]:checked');

  // Check if any of the form inputs are empty or if "readInput" is not selected
  if (!titleInput.value || !authorInput.value || !pagesInput.value || !readInput) {
    // Log an error message and exit the function
    console.error("Missing form data");
    return;
  }

  // Retrieve values from the form inputs
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.value === "yes";

 // Define a BookCard class
class BookCard {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.element = this.createBookCard();
  }

  createBookCard() {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.read = this.read;

    card.innerHTML = `
      <h2>${this.title}</h2>
      <p>Author: ${this.author}</p>
      <p>Pages: ${this.pages}</p>
      <p>Read: ${this.read ? "Yes" : "No"}</p>
      <button class="delete-button">Delete</button>
      <button class="read-button">${this.read ? "Change to unread" : "Change to read"}</button>
    `;

    card.querySelector(".delete-button").addEventListener("click", () => {
      card.remove();
    });

    card.querySelector(".read-button").addEventListener("click", () => {
      this.read = !this.read;
      card.querySelector("p:last-of-type").textContent = `Read: ${this.read ? "Yes" : "No"}`;
      card.querySelector(".read-button").textContent = this.read ? "Change to unread" : "Change to read";
    });

    return card;
  }
}

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector('input[name="read-radio"]:checked');

  if (!titleInput.value || !authorInput.value || !pagesInput.value || !readInput) {
    console.error("Missing form data");
    return;
  }

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.value === "yes";

  // Create a new book card instance and append it to the bookCardContainer
  const bookCard = new BookCard(title, author, pages, read);
  bookCardContainer.appendChild(bookCard.element);

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;

  addBookSection.classList.toggle("active");
});

// Define a function to create a book card element with the given title, author, pages, and read values
function createBookCard(title, author, pages, read) {
  // Create a new div element for the book card
  const card = document.createElement("div");

  // Add the "book-card" class to the card
  card.classList.add("book-card");

  // Set the "read" property of the card to the provided "read" value
  card.read = read;

  // Set the inner HTML of the card to display book information and buttons
  card.innerHTML = `
    <h2>${title}</h2>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p>
    <p>Read: ${read ? "Yes" : "No"}</p>
    <button class="delete-button">Delete</button>
    <button class="read-button">${read ? "Change to unread" : "Change to read"}</button>
  `;

  // Add click event listeners to the "delete" and "read" buttons within the card
  card.querySelector(".delete-button").addEventListener("click", () => {
    // Remove the card when the "delete" button is clicked
    card.remove();
  });

  card.querySelector(".read-button").addEventListener("click", () => {
    // Toggle the "read" property and update the display text when the "read" button is clicked
    card.read = !card.read;
    card.querySelector("p:last-of-type").textContent = `Read: ${card.read ? "Yes" : "No"}`;
    card.querySelector(".read-button").textContent = card.read ? "Change to unread" : "Change to read";
  });

  // Return the created card element
  return card;
}})
