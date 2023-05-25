const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Q1

console.log("Here's a list of peeps born in the 70s.")
entrepreneurs.forEach(person => {
  if (person.year >= 1970 && person.year < 1980) {
    console.log(person.first + ' ' + person.last);
  }
});


// Q2
console.log("Here's an array of the peeps' first & last names.")
let array_peeps = [];
entrepreneurs.forEach(person => {
  array_peeps.push(person.first + ' ' + person.last);
});

console.log(array_peeps);

// Q2
console.log("Here's how old each person is / would be today.");
const currentYear = new Date().getFullYear();
entrepreneurs.forEach(person => {
  let age = currentYear - person.year;
  console.log(person.first + ' ' + person.last + " is / would be " + age + " years old.")
})

