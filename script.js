const book1 = new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 464, true);
const book2 = new Book("Frankenstein", "Mary Shelley", 216, false);

const myLibrary = [book1, book2];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) { myLibrary.push(book); }
function removeBookFromLibrary(index) { myLibrary.splice(index, 1); }

const addBookBtn = document.querySelector(".addBtn");
const addFormBtn = document.querySelector(".addFormBtn");
const cancelFormBtn = document.querySelector(".cancelFormBtn");
const dialog = document.querySelector("dialog");
const div = document.querySelector("body > div:first-child");
const table = document.querySelector("table");

document.querySelectorAll("img[src$=\"delete.svg\"]").forEach(node => node.addEventListener("click", deleteBook));

addBookBtn.addEventListener("click", () => {
    dialog.show();
    div.style.marginTop = "-20rem";
    addBookBtn.style.visibility = "hidden";
});

addFormBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const tr = document.createElement("tr");

    const td2 = document.createElement("td");
    td2.textContent = document.querySelector("#title").value;
    const td3 = document.createElement("td");
    td3.textContent = document.querySelector("#author").value;
    const td4 = document.createElement("td");
    td4.textContent = document.querySelector("#pages").value;
    const td5 = document.createElement("td");
    if (document.querySelector("#read").checked) {
        td5.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"green\" d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" /></svg>";
    } else {
        td5.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"red\" d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>";
    }
    const td6 = document.createElement("td");
    td6.innerHTML = `<img src=\"./icons/pencil.svg\" alt=\"Edit icon\" data-index=\"${myLibrary.length}\">`;
    const td7 = document.createElement("td");
    td7.innerHTML = `<img src=\"./icons/delete.svg\" alt=\"Delete icon\" data-index=\"${myLibrary.length}\">`;

    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    table.appendChild(tr);

    addBookToLibrary(new Book(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#read").checked));

    document.querySelectorAll("input").forEach((node) => node.value = "");

    document.querySelectorAll("img[src$=\"delete.svg\"]").forEach(node => node.addEventListener("click", deleteBook));
});

cancelFormBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.close();

    div.style.marginTop = "0";
    addBookBtn.style.visibility = "visible";
})

function deleteBook(e) {
    const index = e.target.dataset.index;

    removeBookFromLibrary(index);
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
}

