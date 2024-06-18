function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `title: ${this.title}\nAuthor: ${author}\nPages: ${this.pages}\nRead already: ${this.read ? 'Yes' : 'No'}`
    }
}

const firstBook = new Book('Persona Normal', 'Benito Taibo', 250, 1)

console.log(firstBook.valueOf())