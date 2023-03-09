const addBookButton = document.querySelector("#add-book-button");
const addBookSection = document.querySelector(".add-book-section");
const bookCardContainer = document.querySelector("#book-cards");
const form = document.querySelector("#add-book-form");

addBookButton.addEventListener("click", () => {
  addBookSection.classList.toggle("active");
});

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

  const bookCard = createBookCard(title, author, pages, read);
  bookCardContainer.appendChild(bookCard);

  // Clear the form inputs
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;

  addBookSection.classList.toggle("active");
});

function createBookCard(title, author, pages, read) {
  const card = document.createElement("div");
  card.classList.add("book-card");
  card.read = read;

  card.innerHTML = `
    <h2>${title}</h2>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p>
    <p>Read: ${read ? "Yes" : "No"}</p>
    <button class="delete-button">Delete</button>
    <button class="read-button">${read ? "Change to unread" : "Change to read"}</button>
  `;

  card.querySelector(".delete-button").addEventListener("click", () => {
    card.remove();
  });

  card.querySelector(".read-button").addEventListener("click", () => {
    card.read = !card.read;
    card.querySelector("p:last-of-type").textContent = `Read: ${card.read ? "Yes" : "No"}`;
    card.querySelector(".read-button").textContent = card.read ? "Change to unread" : "Change to read";
  });

  return card;
}
