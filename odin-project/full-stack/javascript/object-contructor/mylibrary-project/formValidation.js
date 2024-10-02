const form = document.querySelector('.add-book-form')
const bookName = document.getElementById('book-name')
const bookNameError = document.querySelector('#book-name + span.error')
const authorName = document.getElementById('book-author')
const authorNameError = document.querySelector('#book-author + span.error')
const bookYear = document.getElementById('book-year')
const bookYearError = document.querySelector('#book-year + span.error')
const bookPages = document.getElementById('book-pages')
const bookPagesError = document.querySelector('#book-pages + span.error')
const bookDescription = document.getElementById('book-description')
const bookDescriptionError = document.querySelector('#book-description + span.error')

bookName.addEventListener('input', (event) => {
  if (bookName.validity.valid) {
    bookNameError.textContent = ''
    bookNameError.className = 'error'
  } else {
    showError(bookName, bookNameError)
  }
})

authorName.addEventListener('input', (event) => {
  if (authorName.validity.valid) {
    authorNameError.textContent = ''
    authorNameError.className = 'error'
  } else {
    showError(authorName, authorNameError)
  }
})

bookYear.addEventListener('input', (event) => {
  if (bookYear.validity.valid) {
    bookYearError.textContent = ''
    bookYearError.className = 'error'
  } else {
    showError(bookYear, bookYearError)
  }
})

bookPages.addEventListener('input', (event) => {
  if (bookPages.validity.valid) {
    bookPagesError.textContent = ''
    bookPagesError.className = 'error'
  } else {
    showError(bookPages, bookPagesError)
  }
})

bookDescription.addEventListener('input', (event) => {
  if (bookDescription.validity.valid) {
    bookDescriptionError.textContent = ''
    bookDescriptionError.className = 'error'
  } else {
    showError(bookDescription, bookDescriptionError)
  }
})



form.addEventListener('submit', (event) => {
  if (!bookName.validity.valid && !authorName.validity.valid) {
    event.preventDefault()
  }
  
})

function showError(inputElement, errorSpan) {
  if (inputElement.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    errorSpan.textContent = "You need to enter a value";
  } else if (inputElement.validity.typeMismatch || inputElement.validity.badInput) {
    // If the field doesn't contain an email address,
    // display the following error message.
    errorSpan.textContent = `Entered value needs to be a ${inputElement.type}.`;
  }  else if (inputElement.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    errorSpan.textContent = `book Name should be at least ${inputElement.minLength} characters; you entered ${inputElement.value.length}.`;
  }

  // Set the styling appropriately
  errorSpan.className = "error active";
}