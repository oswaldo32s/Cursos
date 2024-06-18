const myLibrary = [
    {
        title: 'Personal Normal',
        author: 'Benito Taibo',
        pages: 250,
        read: 'Yes'
    },
    {
        title: 'Brujulas que buscan sonrisas perdidas',
        author: 'Albert Spinoza',
        pages: 178,
        read: 'Yes'
    }
]

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function showBooks(arrayOfBooks) {
    myBooks = document.querySelector('.my-books')

    arrayOfBooks.forEach(book => {
        let container = document.createElement('div')
        let title = document.createElement('h1')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let readStatus = document.createElement('p')

        container.classList.add('book-container')
        title.classList.add('book-title')
        author.classList.add('book-author')
        pages.classList.add('book-pages')
        readStatus.classList.add('book-read')
    
        title.textContent = book.title
        author.textContent = `Author: ${book.author}`
        pages.textContent = `Number of pages: ${book.pages}`
        readStatus.textContent = `Have I read this book?: ${book.read}`
    
        container.appendChild(title)
        container.appendChild(author)
        container.appendChild(pages)
        container.appendChild(readStatus)
        myBooks.appendChild(container)  
    });
}

showBooks(myLibrary)