const myLibrary = [
    {
        id: 1,
        title: 'Personal Normal',
        author: 'Benito Taibo',
        pages: 250,
        read: 'Read'
    },
    {
        id: 2,
        title: 'Brujulas que buscan sonrisas perdidas',
        author: 'Albert Spinoza',
        pages: 178,
        read: 'Read'
    },
    {
        id: 3,
        title: 'La casa de los espíritus',
        author: 'Isabel Allende',
        pages: 453,
        read: 'Not Read'
    },
    {
        id: 4,
        title: 'Trampa mortal',
        author: 'Lee Child',
        pages: 537,
        read: 'Read'
    }
]

let currentID = myLibrary.length

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function showBookForm() {
    const element = document.querySelector('.book-form')
    element.classList.toggle('active')
}

function addBookToWeb(book) {
    myBooks = document.querySelector('.my-books')

    let container = document.createElement('div')
    let title = document.createElement('h1')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    let readStatus = document.createElement('button')
    let buttonContainer = document.createElement('div')
    let deleteButton = document.createElement('button')

    container.classList.add('book-container')
    buttonContainer.classList.add('button-container')
    deleteButton.classList.add('delete-button')
    container.classList.add(`${currentID}`)
    title.classList.add('book-title')
    author.classList.add('book-author')
    pages.classList.add('book-pages')
    readStatus.classList.add(`${book.read == 'Read' ? 'read' : 'not-read'}`)
    readStatus.classList.add('book-read')

    title.textContent = book.title
    author.textContent = `Author: ${book.author}`
    pages.textContent = `Number of pages: ${book.pages}`
    readStatus.textContent = `${book.read}`
    deleteButton.textContent = '×'

    buttonContainer.appendChild(deleteButton)
    container.appendChild(buttonContainer)
    container.appendChild(title)
    container.appendChild(author)
    container.appendChild(pages)
    container.appendChild(readStatus)
    myBooks.appendChild(container)  

    deleteButton.addEventListener('click', deleteBook)
}

function addBookToLibrary(event) { 
    event.preventDefault()
    const bookTitle = document.querySelector('#form-book-title').value
    const bookAuthor = document.querySelector('#form-book-author').value
    const bookPages = document.querySelector('#form-book-pages').value
    const bookRead = document.querySelector('#form-book-read').value
    currentID++

    let newBook = {
        id: currentID,
        title: bookTitle,
        author: bookAuthor,
        pages: bookPages,
        read: bookRead
    }

    myLibrary.push(newBook)
    addBookToWeb(newBook)
}

function findBook(bookId) {
    return myLibrary.findIndex(book => book.id == bookId)
}

function toggleReadStatus(event) {
    bookId = event.target.parentNode.classList[1]
    book = myLibrary.find(book => book.id == bookId)
    book.read = book.read == 'Read' ? 'Not Read' : 'Read'
    myBooks = document.querySelector('.my-books')
    myBooks.innerHTML = ''
    showBooks(myLibrary)
}

function deleteBook(event) {
    bookIndex = findBook(event.target.parentNode.classList[1])
    myLibrary.splice(bookIndex,1)
    let bookToRemove = document.querySelectorAll('.book-container')
    bookToRemove[bookIndex].remove()
    console.log(bookIndex)
}

function showBooks(arrayOfBooks) {
    myBooks = document.querySelector('.my-books')

    arrayOfBooks.forEach((book) => {
        let container = document.createElement('div')
        let title = document.createElement('h1')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let readStatus = document.createElement('button')
        let deleteButton = document.createElement('button')

        container.classList.add('book-container')
        deleteButton.classList.add('delete-button')
        container.classList.add(`${book.id}`)
        title.classList.add('book-title')
        author.classList.add('book-author')
        pages.classList.add('book-pages')
        readStatus.classList.add(`${book.read == 'Read' ? 'read' : 'not-read'}`)
        readStatus.classList.add('book-read')
    
        title.textContent = book.title
        author.textContent = `Author: ${book.author}`
        pages.textContent = `Number of pages: ${book.pages}`
        readStatus.textContent = `${book.read}`
        deleteButton.textContent = '×'
    
        container.appendChild(deleteButton)
        container.appendChild(title)
        container.appendChild(author)
        container.appendChild(pages)
        container.appendChild(readStatus)
        myBooks.appendChild(container)  

        deleteButton.addEventListener('click', deleteBook)
        readStatus.addEventListener('click', toggleReadStatus)
    });
}

showBooks(myLibrary)

let formButton = document.querySelector('.add-book-button')
let submitButton = document.querySelector('.submit-form')

submitButton.addEventListener('click', addBookToLibrary)
formButton.addEventListener('click', showBookForm)

