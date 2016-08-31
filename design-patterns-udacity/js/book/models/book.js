class Book {
  constructor(config) {
    this.id = config.id
    this.title = config.title
    this.description = config.description
    this.author = config.author
    this.year = config.year
    this.cover = config.cover
    this.link = config.link
    this.likes = config.likes || 0
  }

  like() {
    this.likes++

    return this
  }
}
