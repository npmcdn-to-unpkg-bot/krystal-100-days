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

    item.textContent = book.title
    item.addEventListener('click', ()=> this.onItemClick(book) )

    this.element.appendChild(item)
  }

  onItemClick(book) {
    const detail = { book }
    const SelectBookEvent = new CustomEvent('select-book', { detail })

    this.element.dispatchEvent(SelectBookEvent)
  }
}
