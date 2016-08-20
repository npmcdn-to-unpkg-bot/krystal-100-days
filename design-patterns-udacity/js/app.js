var horrorBooks = [{
    title: "Choke",
    author: "Chuck Palahniuk",
    year: 2002,
    description: "Victor Mancini, a medical-school dropout, is an antihero for our deranged times. Needing to pay elder care for his mother, Victor has devised an ingenious scam: he pretends to choke on pieces of food while dining in upscale restaurants. He then allows himself to be “saved” by fellow patrons who, feeling responsible for Victor’s life, go on to send checks to support him. When he’s not pulling this stunt, Victor cruises sexual addiction recovery workshops for action, visits his addled mom, and spends his days working at a colonial theme park. His creator, Chuck Palahniuk, is the visionary we need and the satirist we deserve.",
    imgUrl: "https://d.gr-assets.com/books/1403186013l/29059.jpg",
    srcLink: "https://www.goodreads.com/book/show/29059.Choke?from_search=true",
    likeCount: 0
  }, {
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    year: 1997,
    description: "In a Tokyo suburb a young man named Toru Okada searches for his wife's missing cat. Soon he finds himself looking for his wife as well in a netherworld that lies beneath the placid surface of Tokyo. As these searches intersect, Okada encounters a bizarre group of allies and antagonists: a psychic prostitute a malevolent yet mediagenic politician a cheerfully morbid sixteen-year-old-girl and an aging war veteran who has been permanently changed by the hideous things he witnessed during Japan's forgotten campaign in Manchuria.",
    imgUrl: "https://d.gr-assets.com/books/1327872639l/11275.jpg",
    srcLink: "https://www.goodreads.com/book/show/11275.The_Wind_Up_Bird_Chronicle?from_search=true",
    likeCount: 0
  }]

var comicBooks = [{
  title: "The Little Prince",
  author: "Antoine de Saint-Exupery",
  year: 1943,
  description: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
  imgUrl: "https://d.gr-assets.com/books/1367545443l/157993.jpg",
  srcLink: "https://www.goodreads.com/book/show/157993.The_Little_Prince?from_search=true",
  likeCount: 0
}, {
  title: "Out",
  author: "Natsuo Kirino",
  year: 2005,
  description: "Natsuo Kirino's novel tells a story of random violence in the staid Tokyo suburbs, as a young mother who works a night shift making boxed lunches brutally strangles her deadbeat husband and then seeks the help of her co-workers to dispose of the body and cover up her crime.",
  imgUrl: "https://d.gr-assets.com/books/1386749063l/25365.jpg",
  srcLink: "https://www.goodreads.com/book/show/25365.Out?from_search=true",
  likeCount: 0
}, {
  title: "The Fountainhead",
  author: "Ayn Rand",
  year: 1943,
  description: "This instant classic is the story of an intransigent young architect, his violent battle against conventional standards, and his explosive love affair with a beautiful woman who struggles to defeat him.",
  imgUrl: "https://d.gr-assets.com/books/1439666712l/2122.jpg",
  srcLink: "https://www.goodreads.com/book/show/2122.The_Fountainhead?from_search=true",
  likeCount: 0
}]

function createBookController(context, books) {
  var BookController = {
    init: function() {
      this.contex = context
      this.books = books
      this.currentBook = books[0]
      this.likeCount = 0

      this.bookList = createBookList(context)
      this.bookDetail = createBookDetail(context)

      this.bookList.init()
      this.bookDetail.init()

      this.afterInit()
      this.attachEvents()
    },

    afterInit: function() {
      this.bookList.render(this.getBooks())
      this.renderDetail()
    },

    attachEvents: function() {
      this.bookDetail.onLike(this.incrementCounter.bind(this))
    },

    getCurrentBook: function() {
      return this.currentBook
    },

    setCurrentBook: function(book) {
      this.currentBook = book

      return this
    },

    getBooks: function() {
      return this.books
    },

    getLikes: function() {
      return this.likeCount
    },

    incrementCounter: function() {
      this.likeCount++
      this.renderDetail()

      return this
    },

    renderDetail: function() {
      this.bookDetail.render(this.currentBook, this.getLikes())
    }
  }

  return BookController
}

function createBookList(context) {
  var BookList = {
    init: function(config) {
      config = Object.assign({
        selector: '.book-list'
      }, config)

      this.bookList = document.querySelector(context + ' ' + config.selector)
    },

    render: function(books) {
      var book, i

      this.bookList.innerHTML = ''

      for(i = 0; i < books.length; i++) {
        book = books[i]

        this.bookList.appendChild(this.createListItem(book))
      }
    },

    createListItem: function (book) {
      var listItem

      listItem = document.createElement('li')
      listItem.textContent = book.title
      listItem.addEventListener('click', this.onItemClick(book))

      return listItem
    },

    onItemClick: function (book) {
      return function() {
        BookController.setCurrentBook(book)
        BookDetail.render()
      }
    }
  }

  return BookList
}

function createBookDetail(context) {
  var BookDetail = {
    init: function(config) {
      config = Object.assign({
        selectors: {
          book: '.book',
          title: '.title',
          year: '.year',
          description: '.description',
          cover: '.cover',
          likeButton: '.like-button',
          countNumber: '.count-number'
        }
      }, config)

      this.elem = document.querySelector(context + ' ' + config.selectors.book)
      this.title = document.querySelector(context + ' ' + config.selectors.title)
      this.year = document.querySelector(context + ' ' + config.selectors.year)
      this.description = document.querySelector(context + ' ' + config.selectors.description)
      this.cover = document.querySelector(context + ' ' + config.selectors.cover)
      this.likeButton = document.querySelector(context + ' ' + config.selectors.likeButton)
      this.countNumber = document.querySelector(context + ' ' + config.selectors.countNumber)
    },

    render: function(currentBook, likeCount) {
      this.title.textContent = currentBook.title
      this.year.textContent = currentBook.year
      this.description.textContent = currentBook.description
      this.cover.src = currentBook.imgUrl
      this.countNumber.textContent = likeCount + ' likes'
    },

    onLike: function(callback) {
      return this.likeButton.addEventListener('click', callback)
    }
  }

  return BookDetail
}

var HorrorController = createBookController('.horror-books', horrorBooks)
var ComicsController = createBookController('.comics-books', comicBooks)

HorrorController.init()
ComicsController.init()
