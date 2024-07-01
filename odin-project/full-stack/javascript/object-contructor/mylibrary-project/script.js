const myLibrary = []

function Book(name, year, author, pages, description, read) {
    this.bookName = name
    this.bookAuthor = author
    this.bookYear = year
    this.bookPages = pages
    this.bookRead = read
    this.bookDescription = description
}

const addBookBtn = document.querySelector('.add-book-btn')
const showFormBtn = document.querySelector('.btn-add-book')

showFormBtn.addEventListener('click', () => {
    const formSection = document.querySelector('.add-book')
    formSection.classList.toggle('active')
})

addBookBtn.addEventListener('click', addNewBook)

function addNewBook() {
    const bookName = document.querySelector('#book-name').value
    const bookAuthor = document.querySelector('#book-author').value
    const bookYear = document.querySelector('#book-year').value
    const bookPages = document.querySelector('#book-pages').value
    const bookRead = document.querySelector('#book-read').value
    const bookDescription = document.querySelector('#book-description').value

    const newBook = new Book(bookName, bookAuthor, bookYear, bookPages, bookRead, bookDescription)

    myLibrary.push(newBook)

    const inputs = document.querySelectorAll('.form-input')
    inputs.forEach(element => element.value = '')
}