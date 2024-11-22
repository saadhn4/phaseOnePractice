//Add a new property `publisher` to a book object, update the `year`, and then delete the `author
let book = {
  title: "Harry Potter And The Goblet Of Fire",
  author: "JK Rowling",
  year: 2005,
};

book.publisher = "Publishing company";
delete book.author;
console.log(book);
