const myLibrary = []

function Book(name, year, author, pages, description, read) {
    this.bookName = name
    this.bookAuthor = author
    this.bookYear = year
    this.bookPages = pages
    this.bookRead = read
    this.bookDescription = description
}

addBookBtn = document.querySelector('.add-book-btn')