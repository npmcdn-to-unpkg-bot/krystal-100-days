class BookDetail {
  constructor(context) {
    this.title = document.querySelector(`${context} .book--title`)
    this.year = document.querySelector(`${context} .book--year`)
    this.description = document.querySelector(`${context} .book--description`)
    this.cover = document.querySelector(`${context} .book-detail--cover`)
    this.likes = document.querySelector(`${context} .book--likes`)
    this.likeButton = document.querySelector(`${context} .book--like-button`)
  }

  render(book) {
    this.title.textContent = book.title
    this.year.textContent = book.year
    this.description.textContent = book.description
    this.cover.src = book.cover
    this.cover.alt = `${book.title} by ${book.author} book`
    this.likes.textContent = book.likes

    return this
  }
}
