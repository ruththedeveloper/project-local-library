// helper function
function findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

function findAuthorById(authors, id) {
  // find author who has the same id than the given id ;
  // return authors.find((author) => author.id === id);
  return findElementById(authors, id);
  // returned with helper function
}

function findBookById(books, id) {
  // returned with helper function .
  return findElementById(books, id);
  // books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const finalBooks = [];
  //  an array with all books that have the return value === true
  let returnedBooks = books.filter((book) =>
    book.borrows.every((id) => id.returned == true)
  );

  // console.log(availableBooks);
  // an array that have  the return value  to false

  let borrowedBooks = books.filter((book) =>
    book.borrows.some((id) => id.returned == false)
  );
  //console.log(unavailableBooks);
  // pushing both arrays inside one array
  finalBooks.push(borrowedBooks);
  finalBooks.push(returnedBooks);

  //console.log(finalBooks);
  return finalBooks;
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map((borrow) => {
    /// helper function used here
    const finder = findElementById(accounts, borrow.id);

    // accounts.find((account) => borrow.id === account.id);
    const finalBorrowers = { returned: borrow.returned, ...finder };
    return finalBorrowers;
  });

  return borrowers.slice(0, 10);
  // let borrowers = accounts.filter((acc) => {
  //   return book.borrowers.some((item) => item.id === acc.id);
  // });

  // let finalBorrowers = {returned,...borrowers};
  // return finalBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
