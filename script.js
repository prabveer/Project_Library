// Selectors //
const bookshelf = document.querySelector(".bookshelf")
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
  console.log(arrayItem.name)
  console.log(arrayItem.author)
  console.log(arrayItem.pages)
  console.log(arrayItem.status)
})