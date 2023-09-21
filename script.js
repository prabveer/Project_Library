// Selectors //
const bookshelf = document.querySelector(".bookshelf .content");
const Name	 = document.querySelector(".bookName");
const Author = document.querySelector(".bookAuthor");
const Pages = document.querySelector(".bookPages");
const Status = document.querySelector(".bookStatus");

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmButton = document.getElementById("confirmBtn");

const formName	 = document.querySelector("#formBookName");
const formAuthor = document.querySelector("#formAuthorName");
const formPages = document.querySelector("#formPageTotal");
const formStatus = document.querySelector("#readstatus");
//let i = 0;
let count = 2;
let myLibrary = [
  {
    name: "Frankenstein",
    author: "Mary Shelley",
    pages: 240,
    status: true
  },
  {
    name: "Why",
    author: "do i Suffer",
    pages: 420,
    status: false
  }
];

function Book (name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
const clearForm = () => {
  formName.value = "";
  formAuthor.value = "";
  formPages.value = "" ;
}
function addBookToLibrary() {
  let N = formName.value;
  let A = formAuthor.value;
  let P = formPages.value;
  let R = formStatus.value;
  let newBook = new Book(N, A, P, R)
  myLibrary.push(newBook)
}
function updateTable()
{
  myLibrary.forEach(function (arrayItem)
  {
    var tr = document.createElement('tr')
    tr.innerHTML = `<td>${arrayItem.name}</td>
    <td>${arrayItem.author}</td> 
    <td>${arrayItem.pages}</td> 
    <td>${arrayItem.status ? 'Read' : 'Not Read'}</td> `;
    bookshelf.appendChild(tr)
  })
}
function clearTable()
{
  for(let l = 0; l < count; l++)
  {
    let child = bookshelf.lastElementChild;
    bookshelf.removeChild(child)
  }

}
// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});
confirmButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearTable();
  count++;
  updateTable();
  clearForm();
  favDialog.close()
});

updateTable();