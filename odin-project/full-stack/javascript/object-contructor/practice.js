function Book(name, year, author, pages, description) {
    this.bookName = name
    this.bookAuthor = author
    this.bookYear = year
    this.bookPages = pages
    this.bookDescription = description
}

Book.prototype.bookInfo = function() {
    return `${this.bookName} was published in ${this.bookYear} by ${this.bookAuthor}. It cosists of ${this.bookPages} and the book is about ${this.bookDescription}`
}

console.log(Book.prototype)