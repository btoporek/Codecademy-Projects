class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let sum = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return sum / this.ratings.length;
  }
  addRating(rate) {
    this._ratings.push(rate);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
  addCast(cast) {
    this._movieCast = cast;
  }
}

let historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everthing",
  544
);
historyOfEverything.toggleCheckoutStatus();
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//console.log(historyOfEverything.getAverageRating());

let anotherBook = new Book("Author Name", "Book Title", 300);
anotherBook.toggleCheckoutStatus();
anotherBook.addRating(3);
//console.log(anotherBook);

let speed = new Movie("Steven Spielberg", "Jurassic Park", 127);
speed.toggleCheckoutStatus();
//console.log(speed.isCheckedOut);
speed.addRating(5);
speed.addRating(4);
speed.addRating(5);
console.log(speed.getAverageRating());
speed.addCast(["Sam Neill", "Laura Dern", "Jeff Goldblum"]);
//console.log(speed.movieCast);

class CD extends Media {
  constructor(artist, title) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  addSongs(arr) {
    this._songs = arr;
  }
  shuffleSongs(songs) {
    this._songs.sort(() => 0.5 - Math.random());
  }
}

let myCD = new CD("Cat Power", "Jukebox");
myCD.toggleCheckoutStatus();
myCD.addRating(5);
myCD.addSongs([
  "New York",
  "Ramblin' (Wo)man",
  "Metal Heart",
  "Silver Stallion",
  "Aretha, Sing One for Me",
]);
//console.log(myCD);
myCD.shuffleSongs(myCD.songs);
//console.log(myCD.songs);

class Catalog {
  constructor(book, movie, CD) {
    this._books = book;
    this._movies = movie;
    this._CDs = CD;
  }
  get book() {
    return this._book;
  }
  get movie() {
    return this._movie;
  }
  get CD() {
    return this._CD;
  }
}

let myCatalog = new Catalog([historyOfEverything, anotherBook], speed, myCD);
console.log(myCatalog);
