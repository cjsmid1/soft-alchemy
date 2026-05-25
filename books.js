const bookclubBook = [
  
]
const currentBooks = [
  {
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    status: "Shared Read",
    featured: true,
    genre: "✨",
    image: "/images/books/the-fifth-season.jpg",
    url: "https://www.goodreads.com/book/show/19161852-the-fifth-season",
    note: "A rare book club miracle: unanimous approval...?"
  },
  {
    title: "The Obelisk Gate",
    author: "N.K. Jemisin",
    status: "Reading",
    genre: "✨",
    image: "/images/books/the-obelisk-gate.jpg",
    url: "https://www.goodreads.com/book/show/26228034-the-obelisk-gate"
  },
  {
    title: "Bad Astronomy",
    author: "Philip Plait",
    status: "Reading",
    genre: "🔍",
    image: "/images/books/bad-astronomy.jpg",
    url: "https://www.goodreads.com/book/show/23518.Bad_Astronomy",
    note: "Fun silly humour but a bit dated, and I may have fallen asleep a couple times while listening"
  },
  {
    title: "Wyrd Sisters",
    author: "Terry Pratchett",
    status: "Rereading",
    genre: "✨",
    image: "/images/books/wyrd-sisters.jpg",
    url: "https://www.goodreads.com/book/show/34504.Wyrd_Sisters"
  },
  {
    title: "The Power of Geography",
    author: "Tim Marshall",
    status: "To Read",
    genre: "🔍",
    image: "/images/books/the-power-of-geography.jpg",
    url: "https://www.goodreads.com/book/show/56696339-the-power-of-geography"
  }
];
const fantasyBooks = [
  {
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    image: "/images/books/lies-of-locke-lamora.jpg",
    url: "https://www.goodreads.com/book/show/29588376-the-lies-of-locke-lamora"
  },
  {
    title: "The Name of<br>the Wind",
    author: "Patrick Rothfuss",
    image: "/images/books/name-of-the-wind.jpg",
    url: "https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind"
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    image: "/images/books/way-of-kings.jpg",
    url: "https://www.goodreads.com/book/show/7235533-the-way-of-kings"
  },  
  {
    title: "A Deadly Education",
    author: "Naomi Novik",
    image: "/images/books/deadly-education.jpg",
    url: "https://www.goodreads.com/book/show/50548197-a-deadly-education"
  },
  {
    title: "Super Powereds:<br>Year 1",
    author: "Drew Hayes",
    image: "/images/books/super-powereds.jpg",
    url: "https://www.goodreads.com/book/show/17879100-super-powereds"
  }
];
const nonFictionBooks = [
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    image: "/images/books/sapiens.jpg",
    url: "https://www.goodreads.com/book/show/23692271-sapiens"
  },
  {
    title: "The Silk Roads: A New History of the World",
    author: "Peter Frankopan",
    image: "/images/books/silk-roads.jpg",
    url: "https://www.goodreads.com/book/show/25812847-the-silk-roads"
  },
  {
    title: "Humankind: A Hopeful History",
    author: "Rutger Bregman",
    image: "/images/books/humankind.jpg",
    url: "https://www.goodreads.com/book/show/52879286-humankind"
  },
  {
    title: "Rich Dad,<br>Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "/images/books/rich-dad-poor-dad.jpg",
    url: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad"
  },
  {
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    image: "/images/books/teach-you-to-be-rich.jpg",
    url: "https://www.goodreads.com/book/show/40591670-i-will-teach-you-to-be-rich",
    note: "Ignore the gimmicky title, the advice is genuinely solid."
  },
];
const nostalgiaBooks = [
  {
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    image: "/images/books/artemis-fowl.jpg",
    url: "https://www.goodreads.com/book/show/249747.Artemis_Fowl"
  },
  {
    title: "Alanna: The First Adventure",
    author: "Tamora Pierce",
    image: "/images/books/alanna.jpg",
    url: "https://www.goodreads.com/book/show/13831.Alanna"
  },
  {
    title: "First Test",
    author: "Tamora Pierce",
    image: "/images/books/first-test.jpg",
    url: "https://www.goodreads.com/book/show/153784.First_Test"
  },
  {
    title: "Inkheart",
    author: "Cornelia Funke",
    image: "/images/books/inkheart.jpg",
    url: "https://www.goodreads.com/book/show/28194.Inkheart"
  },
  {
    title: "Suth's Story",
    author: "Peter Dickinson",
    image: "/images/books/suth-story.jpg",
    url: "https://www.goodreads.com/book/show/1208666.Suth_s_Story"
  },
  {
    title: "Wyrd Sisters",
    author: "Terry Pratchett",
    image: "/images/books/wyrd-sisters.jpg",
    url: "https://www.goodreads.com/book/show/34504.Wyrd_Sisters"
  },
];
const otherMedia = [
  {
    title: "Book Goblin",
    author: "Elizabeth Wheatley",
    image: "/images/books/book-goblin.jpg",
    url: "https://www.youtube.com/playlist?list=PLp2rdT0vHSlEefx-Sbw-HLXJYZlDILNh5"
  },{
    title: "Romance Genres",
    author: "Elizabeth Wheatley",
    image: "/images/books/romance-genres.jpg",
    url: "https://www.youtube.com/playlist?list=PLp2rdT0vHSlEvjderiN_wEsDILwCZEoMX"
  },{
    title: "Princess Bride Analysis",
    author: "Cinema Therapy",
    image: "/images/books/cinema-therapy.jpg",
    url: "https://www.youtube.com/watch?v=Llyf83OLcAk",
    note: "Technically more film related, but too good not to include."
  },{
    title: "Just Stab Me Now",
    author: "Jill Bearup",
    image: "/images/books/just-stab-me-now.jpg",
    url: "https://www.youtube.com/playlist?list=PLj4N-R1RQxAuAQ4qBpaUbGLb1ZWpWySAz",
    note: "Fun premise & youtube playlist(s), the actual book felt a bit flat."
  },
];
const boardGames = [
{
    title: "Hero Realms",
    author: "Deck Builder",
	status: "2-4 players",
    genre: "30m",
    image: "/images/boardGames/heroRealms.webp",
    url: "https://boardgamegeek.com/boardgame/198994/hero-realms"
  },
  {
    title: "Azul",
    author: "Pretty Tiles",
	status: "2-4 players",
    genre: "45m",
    image: "/images/boardGames/azul.webp",
    url: "https://boardgamegeek.com/boardgame/230802/azul"
  },
  {
    title: "Catan",
    author: "Resource Management",
	status: "2-4 players",
    genre: "1h",
    image: "/images/boardGames/catan.webp",
    url: "https://boardgamegeek.com/boardgame/13/catan"
  },
  {
    title: "Carcassonne",
    author: "Expansion Overload",
	status: "2-5 players",
    genre: "45m",
    image: "/images/boardGames/carcassonne.webp",
    url: "https://boardgamegeek.com/boardgame/822/carcassonne"
  },
  {
    title: "Cheating Moth",
    author: "Card Chaos!",
	status: "3-5 players",
    genre: "30m",
    image: "/images/boardGames/cheatingMoth.webp",
    url: "https://boardgamegeek.com/boardgame/105593/cheating-moth"
  },
  {
    title: "Game of Thrones",
    author: "Risk on Crack",
	  status: "3-6 players",
    genre: "4h",
    image: "/images/boardGames/gameOfThrones.webp",
    url: "https://boardgamegeek.com/boardgame/103343/a-game-of-thrones-the-board-game-second-edition",
    note: "My favourite strategy game: a masterclass in temporary alliances and inevitable betrayal."
  },
  {
    title: "Cash'n'Guns",
    author: "Shoot Your Friends!",
	status: "4-8 players",
    genre: "45m",
    image: "/images/boardGames/cashNGuns.webp",
    url: "https://boardgamegeek.com/boardgame/155362/ca-dollar-h-n-guns-second-edition"
  },
  {
    title: "Blood on the Clocktower",
    author: "Social Bluffing",
	status: "6-21 players",
    genre: "1h30",
    image: "/images/boardGames/bloodOnClocktower.webp",
    url: "https://boardgamegeek.com/boardgame/240980/blood-on-the-clocktower"
  },
  
];
const currentBubbling = [
  {
    title: "Preserved Satsumas",
	author: "Started 23/4/26",
	status: "In Progress",
    image: "/images/preserved-satsumas.jpg"
  },
  {
    title: "Kombucha Scoby",
    author: "Started 16/4/26",
	status: "In Progress?",
    image: "/images/kombucha-scoby.jpg",
    note: "Currently being rescued by the purchase of a heat mat - I hope..."
  },
  {
    title: "Garlic Honey",
    author: "Started 31/3/26",
	status: "Aging Gracefully",
    image: "/images/honey-garlic.jpg",
  },
  {
    title: "'Soy' Sauce",
    author: "Started 5/3/26",
	status: "Deceased",
    image: "/images/fake-soy-sauce.jpg",
    note: "Possibly too much air space above the mixture & left it too long."
  },
  {
    title: "Satsuma Vinegar",
	author: "Started 3/3/26",
	status: "Almost Ready?",
    image: "/images/satsuma-vinegar.jpg",
    note: "Taking much longer than normal vinegars, may need to try again."
  },
];
const bookshelfConfigs = [
  {
    id: "bookclub-bookshelf",
    books: bookclubBook
  },
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
  },
  {
    id: "other-media-bookshelf",
    books: otherMedia
  },
  {
    id: "board-game-bookshelf",
    books: boardGames
  }
];

const quotes = [
  {
    category: "Rules For Life",
    preview: "Work hard, laugh",
    text: "Work hard, laugh often and keep your word.",
    author: "Michelle Obama"
  },
  {
    category: "Rules For Life",
    preview: "In life control",
    text: "In life control what you can.",
    author: "Michelle Obama"
  },
  {
    category: "Charisma",
    preview: "When they go low",
    text: "When they go low, we go high.",
    author: "Michelle Obama"
  },
  {
    category: "Rules For Life",
    preview: "You can do anything",
    text: "You can do anything, but not everything.",
    author: "David Allen"
  },
  {
    category: "Charisma",
    preview: "Charm is the ability",
    text: "Charm is the ability to make someone else think that both of you are pretty wonderful.",
    author: "Kathleen Winsor"
  },
  {
    category: "Doing the Thing",
    preview: "If you sit and plan",
    text: "If you sit and plan, you get stuck in the planning, then you plan your life away.",
    author: "Terry Pratchett",
	commentary: "In short: Act first, plan second.<br>Though granted I rarely follow this advice!"
  },
  {
    category: "Rules For Life",
    preview: "A trap is only",
    text: "A trap is only a trap if you don't know about it. If you know about it, it's a challenge.",
    author: "King Rat, China Miéville"
  },
  {
    category: "Charisma",
    preview: "If you treat an individual",
    text: "If you treat an individual as he is, he will remain how he is. But if you treat him as if he were what he ought to be and could be, he will become what he ought to be and could be.",
    author: "Johann Wolfgang von Goethe",
    commentary: "Argh, the temptation to change all the he/hims to at least they/thems, but for the sake of legitimacy I shall refrain!"
  },
  {
    category: "Rules For Life",
    preview: "The thing that makes",
    text: "The thing that makes you exceptional, if you are at all, is inevitably that which must also make you lonely.",
    author: "Lorraine Hansberry"
  },
  {
    category: "Rules For Life",
    preview: "Life is what you share",
    text: "Life is what you share with others. Hoard it and you will die all the poorer for it.",
    author: "Practical Guide to Evil, ErraticErrata"
  },
  {
    category: "Rules For Life",
    preview: "You can be someone who",
    text: "You can be someone who makes things happen, or someone things happen to. Let’s find out which you are, shall we?",
    author: "Practical Guide to Evil, ErraticErrata"
  },
  {
    category: "Rules For Life",
    preview: "They fight with their",
    text: "They fight with their arms, Lady Squire, We fight with our minds. Clever beats strong every time.",
    author: "Practical Guide to Evil, ErraticErrata"
  },
  {
    category: "Doing the Thing",
    preview: "What if I fall",
    text: "What if I fall? Oh but my darling, what if you fly?",
    author: "Erin Hanson"
  },
  {
    category: "Doing the Thing",
    preview: "Anything worth doing",
    text: "Anything worth doing, is worth doing badly.",
    author: "G.K. Chesterton",
	commentary: "In short: half-arsed is better than nothing!"
  },
  {
    category: "Doing the Thing",
    preview: "Ambition without action",
    text: "Ambition without action becomes anxiety.",
    author: "The Internet"
  },
  {
    category: "Whimsey",
    preview: "It’s still magic",
    text: "It’s still magic even if you know how it’s done.",
    author: "A Hat Full of Sky, Terry Pratchett"
  },
  {
    category: "Whimsey",
    preview: "The cure for boredom",
    text: "The cure for boredom is curiosity. There is no cure for curiosity.",
    author: "Dorothy Parker"
  },
  {
    category: "Charisma",
    preview: "The single biggest problem",
    text: "The single biggest problem in communication is the illusion that it has taken place.",
    author: "George Bernard Shaw"
  }
];