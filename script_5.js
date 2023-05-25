const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Q1 
console.log("Have all the books been rented at least once ?");

const booksRentedOnce = books.every(book => book.rented > 0);

console.log(booksRentedOnce);


// Q2
console.log("Which book has been rented out the most ?");
const mostRentedBook = books.reduce((maxRentedBook, currentBook) => {
  return currentBook.rented > maxRentedBook.rented ? currentBook : maxRentedBook;
});

console.log(mostRentedBook)


// Q3 
console.log("Which book has been rented out the least ?");

const leastRentedBook = books.reduce((minRentedBook, currentBook) => {
  return currentBook.rented < minRentedBook.rented ? currentBook: minRentedBook;
});

console.log(leastRentedBook)

// Q4 
console.log("Find the book with ID: 873495.");

const findBook = books.find(book => book.id === 873495
);

console.log(findBook)


// Q5
const bookIndexToRemove = books.findIndex(book => book.id === 133712);
if (bookIndexToRemove !== -1) {
  books.splice(bookIndexToRemove, 1);
}

console.log("Books after removing the book with ID 133712:", books);

// Q6 
console.log("Sort the books by alphabetical order (sans ID: 133712 because it was deleted.");

const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedBooks);
