const library = [
  {
    Book: "Outlive: The Science and Art of Longevity",
    Author: "Peter Attia MD",
    Year: 2023,
    Available: true,
  },
  {
    Book: "1984",
    Author: "George Orwell",
    Year: 1949,
    Available: false,
  },
  {
    Book: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    Author: "Ashlee Vance",
    Year: 2015,
    Available: true,
  },
  {
    Book: "Steve Jobs",
    Author: "Walter Isaacson",
    Year: 2011,
    Available: true,
  },
  {
    Book: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    Author: "Matthew Walker",
    Year: 2017,
    Available: false,
  },
];

console.log(
  library.filter((i) => {
    let book = "Why We Sleep: Unlocking the Power of Sleep and Dreams";
    return book == i.Book;
  })
);
