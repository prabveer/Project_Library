// Selectors //
const bookshelf = document.querySelector(".bookshelf .content")
const Name	 = document.querySelector(".bookName")
const Author = document.querySelector(".bookAuthor")
const Pages = document.querySelector(".bookPages")
const Status = document.querySelector(".bookStatus")
const myLibrary = [
  {
    name: "Frankenstein",
    author: "Mary Shelley",
    pages: 240,
    status: true
  }
];

class Book {
    // constructor //
    constructor(name, author, pages, status)
    {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    // getters //
    get name() {
      return this.name
    }
    get author() {
      return this.author
    }
    get pages() {
      return this.pages
    }
    get status() {
      return this.status
    }
}

function addBookToLibrary() {
  // do stuff here
}

myLibrary.forEach(function (arrayItem)
{
  var tr = document.createElement('tr')
  tr.innerHTML = `<td>${arrayItem.name}</td>
  <td>${arrayItem.author}</td> 
  <td>${arrayItem.pages}</td> 
  <td>${arrayItem.status ? 'Read' : 'Not Read'}</td> `;
  bookshelf.appendChild(tr)
}) 

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});