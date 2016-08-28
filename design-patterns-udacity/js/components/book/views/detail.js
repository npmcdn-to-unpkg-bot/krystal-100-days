class BookDetail {
  constructor(context) {
    this.title = document.querySelector(`${context} .title`)
    this.year = document.querySelector(`${context} .year`)
    this.description = document.querySelector(`${context} .description`)
    this.cover = document.querySelector(`${context} .cover`)
    this.likes = document.querySelector(`${context} .likes`)
    this.likeButton = document.querySelector(`${context} .like-button`)
  }

  render(book) {
    this.title.textContent = book.title
    this.year.textContent = book.year
    this.description.textContent = book.description
    this.cover.src = book.cover
    this.likes.textContent = `${book.likes} likes`

    return this
  }
}
