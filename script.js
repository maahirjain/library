const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) { myLibrary.push(book); }
function removeBookFromLibrary(index) { myLibrary.splice(index, 1); }

const addBookBtn = document.querySelector(".addBtn");
const dialog = document.querySelector("dialog");
const div = document.querySelector("body > div:first-child");

addBookBtn.addEventListener("click", () => {
    dialog.show();
    div.style.marginTop = "-20rem";
    addBookBtn.style.display = 'none';
})



