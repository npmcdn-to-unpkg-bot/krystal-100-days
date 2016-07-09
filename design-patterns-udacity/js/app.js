var model = {
  currentBook: null,
  bookData: [
    {
      title: "Choke",
      author: "Chuck Palahniuk",
      year: 2002,
      description: "Victor Mancini, a medical-school dropout, is an antihero for our deranged times. Needing to pay elder care for his mother, Victor has devised an ingenious scam: he pretends to choke on pieces of food while dining in upscale restaurants. He then allows himself to be “saved” by fellow patrons who, feeling responsible for Victor’s life, go on to send checks to support him. When he’s not pulling this stunt, Victor cruises sexual addiction recovery workshops for action, visits his addled mom, and spends his days working at a colonial theme park. His creator, Chuck Palahniuk, is the visionary we need and the satirist we deserve.",
      imgUrl: "https://d.gr-assets.com/books/1403186013l/29059.jpg",
      srcLink: "https://www.goodreads.com/book/show/29059.Choke?from_search=true",
      likeCount: 0
    },
    {
      title: "The Wind-Up Bird Chronicle",
      author: "Haruki Murakami",
      year: 1997,
      description: "In a Tokyo suburb a young man named Toru Okada searches for his wife's missing cat. Soon he finds himself looking for his wife as well in a netherworld that lies beneath the placid surface of Tokyo. As these searches intersect, Okada encounters a bizarre group of allies and antagonists: a psychic prostitute; a malevolent yet mediagenic politician; a cheerfully morbid sixteen-year-old-girl; and an aging war veteran who has been permanently changed by the hideous things he witnessed during Japan's forgotten campaign in Manchuria.",
      imgUrl: "https://d.gr-assets.com/books/1327872639l/11275.jpg",
      srcLink: "https://www.goodreads.com/book/show/11275.The_Wind_Up_Bird_Chronicle?from_search=true",
      likeCount: 0
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupery",
      year: 1943,
      description: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
      imgUrl: "https://d.gr-assets.com/books/1367545443l/157993.jpg",
      srcLink: "https://www.goodreads.com/book/show/157993.The_Little_Prince?from_search=true",
      likeCount: 0
   },
    {
      title: "Out",
      author: "Natsuo Kirino",
      year: 2005,
      description: "Natsuo Kirino's novel tells a story of random violence in the staid Tokyo suburbs, as a young mother who works a night shift making boxed lunches brutally strangles her deadbeat husband and then seeks the help of her co-workers to dispose of the body and cover up her crime.",
      imgUrl: "https://d.gr-assets.com/books/1386749063l/25365.jpg",
      srcLink: "https://www.goodreads.com/book/show/25365.Out?from_search=true",
      likeCount: 0
   },
    {
      title: "The Fountainhead",
      author: "Ayn Rand",
      year: 1943,
      description: "This instant classic is the story of an intransigent young architect, his violent battle against conventional standards, and his explosive love affair with a beautiful woman who struggles to defeat him.",
      imgUrl: "https://d.gr-assets.com/books/1439666712l/2122.jpg",
      srcLink: "https://www.goodreads.com/book/show/2122.The_Fountainhead?from_search=true",
      likeCount: 0
   }
  ]
};

var bookController = {
  init: function() {
    //Have the first book in the list show on page load
    model.currentBook = model.bookData[0];
    
    //Initialize views
    bookList.init();
    bookDetails.init();
  },
  
  getCurrentBook: function() {
    return model.currentBook;
  },
  
  getBooks: function() {
    return model.bookData;
  },
  
  //Use the object that's passed in to show new book info when a list item is clicked
  setCurrentBook: function(book) {
    model.currentBook = book;
  },
  
  //Increments the like counter for the current book
  incrementCounter: function() {
    model.currentBook.likeCount++;
    bookDetails.render();
  }
};

var bookList = {
  init: function() {
    this.bookList = document.getElementById("bookList");
    
    //Render to update the DOM
    this.render();
  },
  
  render: function() {
    var book, listItem, i;
    
    //Ask the controller to get the list of books from the model
    var books = bookController.getBooks();
    
    //Clear out the list
    this.bookList.innerHTML = '';
    
    //loop over the book list array
    for(i = 0; i < books.length; i++) {
      book = books[i];
      
      //Create a new list item and add the title
      listItem = document.createElement('li');
      listItem.textContent = book.title;
      
      //On click, set the current book
      //Render bookDetails view
      listItem.addEventListener('click', (function(bookCopy) {
         return function() {
            bookController.setCurrentBook(bookCopy);
            bookDetails.render();
          };
      })(book));
      
      //Add the new list item to the list
      this.bookList.appendChild(listItem);   
    }
  }
};

var bookDetails = {
  init: function() {
    this.bookElem = document.getElementById("book");
    this.bookTitle = document.getElementById("title");
    this.bookYear = document.getElementById("year");
    this.bookDescription = document.getElementById("description");
    this.bookCover = document.getElementById("coverImage");
    this.likeBtn = document.getElementById("likeBtn");
    
    //Increment book's like button
    this.likeBtn.addEventListener("click", function(){
      bookController.incrementCounter();
    });
    
    //Update the DOM with new the book information
    this.render();
  },

  render: function() {
    var currentBook = bookController.getCurrentBook();
    
    this.bookTitle.textContent = currentBook.title;
    this.bookYear.textContent = currentBook.year;
    this.bookDescription.textContent = currentBook.description;
    this.bookCover.src = currentBook.imgUrl;
    this.countNum = currentBook.likeCount;  
  }
};

//Initialize everything
bookController.init();



















