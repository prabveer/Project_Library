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

let count = 1;

function clearTable()
{
  if(count != 0)
  {
    for(let l = 0; l < count; l++)
    {
      let child = bookshelf.lastElementChild;
      bookshelf.removeChild(child)
    }
  }
}

const createReadStatusTd = (book) => {
  let readStatusTd = document.createElement('td');
  let readStatusButton = document.createElement('button');
  readStatusButton.textContent = 'Change read status';
  readStatusButton.addEventListener('click', (e) => {
    clearTable();
    book.status = !book.status;
    updateTable();
  }); 
  readStatusTd.appendChild(readStatusButton);
  return readStatusTd;
}

const createDeleteTd = (index) => {
  let deleteTd = document.createElement('td');
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    clearTable();
    count--;
    myLibrary.splice(index, 1);
    updateTable();
  });
  deleteTd.appendChild(deleteButton);
  return deleteTd;
}

let myLibrary = [
  {
    name: "Frankenstein",
    author: "Mary Shelley",
    pages: 240,
    status: true
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
  myLibrary.forEach((arrayItem, index) =>
  {
    var tr = document.createElement('tr')
    tr.innerHTML = `<td>${arrayItem.name}</td>
    <td>${arrayItem.author}</td> 
    <td>${arrayItem.pages}</td> 
    <td>${arrayItem.status ? 'Read' : 'Not Read'}</td>`;

    tr.appendChild(createReadStatusTd(arrayItem)); //
    tr.appendChild(createDeleteTd(index)); 

    bookshelf.appendChild(tr)
  })
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