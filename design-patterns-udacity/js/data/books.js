const data = [{
  id: 1,
  title: "Choke",
  author: "Chuck Palahniuk",
  year: 2002,
  description: "Victor Mancini, a medical-school dropout, is an antihero for our deranged times. Needing to pay elder care for his mother, Victor has devised an ingenious scam: he pretends to choke on pieces of food while dining in upscale restaurants. He then allows himself to be “saved” by fellow patrons who, feeling responsible for Victor’s life, go on to send checks to support him. When he’s not pulling this stunt, Victor cruises sexual addiction recovery workshops for action, visits his addled mom, and spends his days working at a colonial theme park. His creator, Chuck Palahniuk, is the visionary we need and the satirist we deserve.",
  cover: "https://d.gr-assets.com/books/1403186013l/29059.jpg",
  srcLink: "https://www.goodreads.com/book/show/29059.Choke?from_search=true",
  likeCount: 0
}, {
  id: 2,
  title: "The Wind-Up Bird Chronicle",
  author: "Haruki Murakami",
  year: 1997,
  description: "In a Tokyo suburb a young man named Toru Okada searches for his wife's missing cat. Soon he finds himself looking for his wife as well in a netherworld that lies beneath the placid surface of Tokyo. As these searches intersect, Okada encounters a bizarre group of allies and antagonists: a psychic prostitute a malevolent yet mediagenic politician a cheerfully morbid sixteen-year-old-girl and an aging war veteran who has been permanently changed by the hideous things he witnessed during Japan's forgotten campaign in Manchuria.",
  cover: "https://d.gr-assets.com/books/1327872639l/11275.jpg",
  srcLink: "https://www.goodreads.com/book/show/11275.The_Wind_Up_Bird_Chronicle?from_search=true",
  likeCount: 0
}, {
  id: 3,
  title: "The Little Prince",
  author: "Antoine de Saint-Exupery",
  year: 1943,
  description: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
  cover: "https://d.gr-assets.com/books/1367545443l/157993.jpg",
  srcLink: "https://www.goodreads.com/book/show/157993.The_Little_Prince?from_search=true",
  likeCount: 0
}, {
  id: 4,
  title: "Out",
  author: "Natsuo Kirino",
  year: 2005,
  description: "Natsuo Kirino's novel tells a story of random violence in the staid Tokyo suburbs, as a young mother who works a night shift making boxed lunches brutally strangles her deadbeat husband and then seeks the help of her co-workers to dispose of the body and cover up her crime.",
  cover: "https://d.gr-assets.com/books/1386749063l/25365.jpg",
  srcLink: "https://www.goodreads.com/book/show/25365.Out?from_search=true",
  likeCount: 0
}, {
  id: 5,
  title: "The Fountainhead",
  author: "Ayn Rand",
  year: 1943,
  description: "This instant classic is the story of an intransigent young architect, his violent battle against conventional standards, and his explosive love affair with a beautiful woman who struggles to defeat him.",
  cover: "https://d.gr-assets.com/books/1439666712l/2122.jpg",
  srcLink: "https://www.goodreads.com/book/show/2122.The_Fountainhead?from_search=true",
  likeCount: 0
}]


const books = data.map((book)=> {
  return new Book(book)
})
