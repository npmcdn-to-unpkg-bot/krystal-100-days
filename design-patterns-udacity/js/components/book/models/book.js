class Book {
  get likes() {
    return this._likes
  }

  constructor(config) {
    this.id = config.id
    this.title = config.title
    this.description = config.description
    this.author = config.author
    this.year = config.year
    this.cover = config.cover
    this.link = config.link
    this._likes = config.likes || 0
  }

  like() {
    this._likes++

    return this
  }
}
