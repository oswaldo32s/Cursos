const myLocalLibrary = [
    {
        bookName: 'Persona Normal',
        bookAuthor: 'Benito Taibo',
        bookYear: 2010,
        bookPages: 210,
        bookRead: 'I already read it',
        bookDescription: 'Sebastian lost his parents and now lives with his uncle the black sheep of the family and with him learns the real meaning of life.'
    },
    {
        bookName: 'Troya',
        bookAuthor: 'Gisbert Haefs',
        bookYear: 2002,
        bookPages: 573,
        bookRead: 'No, I have not read it',
        bookDescription: "It's about Troya history"
    },
    {
        bookName: 'Trampa Mortal',
        bookAuthor: 'Lee Child',
        bookYear: 2017,
        bookPages: 537,
        bookRead: 'I already read it',
        bookDescription: 'El expolicia militar Jack Reacher esta disfrutando de su anonimato en Florida cuando un desconocido con mucas preguntas empieza a huspear a su alrededor. Reacher tambien tiene muchas preguntas, especialemente cuando el tipo aparece muerto. Las respuestas le conducen hasta Nueva Your, hasta una seductora mujer y hasta los rincones oscuros de su propio pasado.'
    }
]

let currentID = 0
const myLibrary = []

function Book(name, year, author, pages, description, read) {
    this.bookID = currentID
    this.bookName = name
    this.bookAuthor = author
    this.bookYear = year
    this.bookPages = pages
    this.bookRead = read
    this.bookDescription = description

    currentID++
}

Book.prototype.toggleBookRead = function() {
    this.bookRead = this.bookRead == 'I already read it' ? 'No, I have not read it' : 'I already read it'
}

myLocalLibrary.forEach(book => {
    const newBook = new Book(book.bookName, book.bookYear, book.bookAuthor, book.bookPages, book.bookDescription, book.bookRead)
    myLibrary.push(newBook)
})


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

    const newBook = new Book(bookName, bookYear, bookAuthor, bookPages, bookDescription, bookRead)

    myLibrary.push(newBook)

    const inputs = document.querySelectorAll('.form-input')
    inputs.forEach(element => element.value = '')

    loadBook()
}

function loadBook () {
    const bookSection = document.querySelector('.book-section')
    bookSection.innerHTML = ''
    myLibrary.forEach(book => {
        // CREATE ELEMENTS
        const bookContainer = document.createElement('div')
        const titleContainer = document.createElement('div')
        const bookTitle = document.createElement('h3')
        const bookAuthor = document.createElement('p')
        const bookYear = document.createElement('p')
        const bookPages = document.createElement('p')
        const bookRead = document.createElement('button')
        const bookDescription = document.createElement('p')
        const bookDelete = document.createElement('button')

        // ADD CLASSES TO ELEMENTS
        bookContainer.classList.add('book-container')
        titleContainer.classList.add('title-container')
        bookDelete.classList.add(book.bookID)
        bookDelete.classList.add('book-delete')
        bookRead.classList.add(book.bookID)
        bookRead.classList.add(book.bookRead == 'I already read it' ? 'book-read' : 'book-not-read')
        // ASSIGN VALUES TO ELEMENTS
        bookTitle.textContent = book.bookName
        bookAuthor.textContent = `Author: ${book.bookAuthor}`
        bookYear.textContent = `Year: ${book.bookYear}`
        bookPages.textContent = `Total Pages: ${book.bookPages}`
        bookRead.textContent = book.bookRead
        bookDescription.textContent = book.bookDescription
        bookDelete.textContent = '×'

        // ADD FUNCTIONS TO BUTTONS
        bookDelete.addEventListener('click', (e) => {
            const bookID = e.target.classList[0]
            const bookIndex = myLibrary.findIndex(element => element.bookID == bookID)
            myLibrary.splice(bookIndex, 1)
            loadBook()
        })

        bookRead.addEventListener('click', (e) => {
            const bookID = e.target.classList[0]
            const bookIndex = myLibrary.findIndex(element => element.bookID == bookID)
            myLibrary[bookIndex].toggleBookRead()
            loadBook()
        })

        // ADD ELEMENTS TO WEBSITE
        bookSection.appendChild(bookContainer)
        bookContainer.appendChild(titleContainer)
        titleContainer.appendChild(bookTitle)
        titleContainer.appendChild(bookDelete)
        bookContainer.appendChild(bookAuthor)
        bookContainer.appendChild(bookYear)
        bookContainer.appendChild(bookPages)
        bookContainer.appendChild(bookRead)
        bookContainer.appendChild(bookDescription)
    })
}

loadBook()