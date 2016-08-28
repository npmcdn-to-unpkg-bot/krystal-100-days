class BookPreviewController {
  get currentBook() {
    return this._currentBook
  }

  set currentBook(book) {
    this._currentBook = book
    return this.renderBookDetail()
  }

  get books() {
    return this._books
  }

  constructor(context, config) {
    this.context = context
    this._books = config.books
    this._currentBook = config.currentBook

    this.bookList = new BookList(this.context)
    this.bookDetail = new BookDetail(this.context)

    this.renderBookDetail()
    this.renderBookList()
    this.attachEvents()
  }

  attachEvents() {
    this.bookDetail.likeButton.addEventListener('click', this.likeCurrentBook.bind(this))
    this.bookList.element.addEventListener('select-book', this.changeCurrentBook.bind(this))
  }

  renderBookList() {
    this.bookList.render(this.books)
    return this
  }

  renderBookDetail() {
    this.bookDetail.render(this.currentBook)
    return this
  }

  likeCurrentBook() {
    this.currentBook.like()
    this.renderBookDetail()

    return this
  }

  changeCurrentBook(event) {
    const book = event.detail.book

    this.currentBook = book
  }
}
