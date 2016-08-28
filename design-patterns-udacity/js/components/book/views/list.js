class BookList {
  constructor(context) {
    this.element = document.querySelector(`${context} .book-list`)
  }

  render(books) {
    this.element.innerHTML = ''
    books.forEach(this.createListItem.bind(this))

    return this
  }

  createListItem(book) {
    const item = document.createElement('li')
    const cover = document.createElement('img')
    const title = document.createElement('p')
    const author = document.createElement('span')


    author.classList.add('book-list--item--author')
    author.textContent = `by ${book.author} book`

    title.classList.add('book-list--item--title')
    title.textContent = book.title
    title.appendChild(author)


    cover.src = book.cover
    cover.alt = `${book.title} by ${book.author} book`
    cover.classList.add('book-list--item--cover')

    item.appendChild(cover)
    item.appendChild(title)

    item.classList.add('book-list--item')
    item.addEventListener('click', ()=> this.onItemClick(book) )

    this.element.appendChild(item)
  }

  onItemClick(book) {
    const detail = { book }
    const SelectBookEvent = new CustomEvent('select-book', { detail })

    this.element.dispatchEvent(SelectBookEvent)
  }
}
