function findAccountById(accounts, id) {
  // return an acount that has the same id as the id provided
  return accounts.find((user) => user.id === id);
}

function sortAccountsByLastName(accounts) {
  // this function returns an array of obj sorted by the last name
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  /// we are looking for number of times an account as borrowed books
  let total = 0;
  const userId = account.id;

  books.forEach((book) =>
    // here we are inside of  book.borrows array  and comparing the id  to the account id that  we have
    book.borrows.forEach((borrow) => {
      if (userId === borrow.id) total++;
    })
  );
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  //let userId = account.id;
  const { id } = account;

  // the array of books possed by the account with id given
  return books
    .filter((book) =>
      book.borrows.some((borrow) => !borrow.returned && borrow.id === id)
    )
    .map((book) => {
      // finding the author id in relation with book
      const author = authors.find((writer) => writer.id === book.authorId);
      /// returning an obj and ading the author infos to it

      return { author, ...book };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
