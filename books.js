const currentBooks = [
  {
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    status: "Finished",
    genre: "✨",
    image: "images/books/the-fifth-season.jpg",
    url: "https://www.goodreads.com/book/show/19161852-the-fifth-season"
  },
  {
    title: "The Obelisk Gate",
    author: "N.K. Jemisin",
    status: "Reading",
    genre: "✨",
    image: "images/books/the-obelisk-gate.jpg",
    url: "https://www.goodreads.com/book/show/26228034-the-obelisk-gate"
  },
  {
    title: "Bad Astronomy",
    author: "Philip Plait",
    status: "Reading",
    genre: "🔍",
    image: "images/books/bad-astronomy.jpg",
    url: "https://www.goodreads.com/book/show/23518.Bad_Astronomy"
  },
  {
    title: "Wyrd Sisters",
    author: "Terry Pratchett",
    status: "Rereading",
    genre: "✨",
    image: "images/books/wyrd-sisters.jpg",
    url: "https://www.goodreads.com/book/show/34504.Wyrd_Sisters"
  },
  {
    title: "The Power of Geography",
    author: "Tim Marshall",
    status: "To Read",
    genre: "🔍",
    image: "images/books/the-power-of-geography.jpg",
    url: "https://www.goodreads.com/book/show/56696339-the-power-of-geography"
  }
];
const fantasyBooks = [
  {
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    image: "images/books/lies-of-locke-lamora.jpg",
    url: "https://www.goodreads.com/book/show/29588376-the-lies-of-locke-lamora"
  },
  {
    title: "The Name of<br>the Wind",
    author: "Patrick Rothfuss",
    image: "images/books/name-of-the-wind.jpg",
    url: "https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind"
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    image: "images/books/way-of-kings.jpg",
    url: "https://www.goodreads.com/book/show/7235533-the-way-of-kings"
  },  
  {
    title: "A Deadly Education",
    author: "Naomi Novik",
    image: "images/books/deadly-education.jpg",
    url: "https://www.goodreads.com/book/show/50548197-a-deadly-education"
  },
  {
    title: "Super Powereds:<br>Year 1",
    author: "Drew Hayes",
    image: "images/books/super-powereds.jpg",
    url: "https://www.goodreads.com/book/show/17879100-super-powereds"
  }
];
const nonFictionBooks = [
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    image: "images/books/sapiens.jpg",
    url: "https://www.goodreads.com/book/show/23692271-sapiens"
  },
  {
    title: "The Silk Roads: A New History of the World",
    author: "Peter Frankopan",
    image: "images/books/silk-roads.jpg",
    url: "https://www.goodreads.com/book/show/25812847-the-silk-roads"
  },
  {
    title: "Humankind: A Hopeful History",
    author: "Rutger Bregman",
    image: "images/books/humankind.jpg",
    url: "https://www.goodreads.com/book/show/52879286-humankind"
  },
  {
    title: "Rich Dad,<br>Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "images/books/rich-dad-poor-dad.jpg",
    url: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad"
  },
  {
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    image: "images/books/teach-you-to-be-rich.jpg",
    url: "https://www.goodreads.com/book/show/40591670-i-will-teach-you-to-be-rich"
  },
];
const nostalgiaBooks = [
  {
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    image: "images/books/artemis-fowl.jpg",
    url: "https://www.goodreads.com/book/show/249747.Artemis_Fowl"
  },
  {
    title: "Alanna: The First Adventure",
    author: "Tamora Pierce",
    image: "images/books/alanna.jpg",
    url: "https://www.goodreads.com/book/show/13831.Alanna"
  },
  {
    title: "First Test",
    author: "Tamora Pierce",
    image: "images/books/first-test.jpg",
    url: "https://www.goodreads.com/book/show/153784.First_Test"
  },
  {
    title: "Inkheart",
    author: "Cornelia Funke",
    image: "images/books/inkheart.jpg",
    url: "https://www.goodreads.com/book/show/28194.Inkheart"
  },
  {
    title: "Suth's Story",
    author: "Peter Dickinson",
    image: "images/books/suth-story.jpg",
    url: "https://www.goodreads.com/book/show/1208666.Suth_s_Story"
  },
  {
    title: "Wyrd Sisters",
    author: "Terry Pratchett",
    image: "images/books/wyrd-sisters.jpg",
    url: "https://www.goodreads.com/book/show/34504.Wyrd_Sisters"
  },
];
const bookshelfConfigs = [
  {
    id: "current-bookshelf",
    books: currentBooks
  },
  {
    id: "fantasy-bookshelf",
    books: fantasyBooks
  },
  {
    id: "nonfiction-bookshelf",
    books: nonFictionBooks
  },
  {
    id: "nostalgia-bookshelf",
    books: nostalgiaBooks
  }
];