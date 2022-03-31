function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    let checkedBooks = books[i];
    if (checkedBooks.borrows[0].returned == false) {
      total += 1;
    }
  }
  return total;

  // return books.reduce((acc, book) => book.borrows[0].returned == false, 0);

  // let borrowedBookCount = books.reduce((acc, book) => {
  //   book.borrows.some((id) => id.returned == false);
  //   return acc;
  // }, 0);
  // return borrowedBookCount;
}
function getMostCommonGenres(books) {
  const mostGenres = books.map((book) => book.genre);

  // for (let genres of mostGenres) {
  //   let genre = finalGenres.find((item) => item.name === genres);
  //   //console.log(genres);

  //   if (genre) {
  //     genre.count += 1;
  //   } else {
  //     finalGenres.push({ name: genres, count: 1 });
  //   }
  // }
  // console.log(finalGenres);

  const finalGenres = mostGenres.reduce((acc, genres) => {
    let genre = acc.find((item) => item.name === genres);
    if (genre) {
      genre.count += 1;
    } else {
      acc.push({ name: genres, count: 1 });
    }
    return acc;
  }, []);
  return finalGenres.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
}

function getMostPopularBooks(books) {
  const bookPopularity = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));

  return bookPopularity
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);

  //console.log(finalPop);

  // const temp = [];
  // bookPopularity.map((title) => {
  //   const borrowedBook = books.find((element) => element.name === title);

  //   if (borrowedBook >= 0) {
  //     temp[borrowedBook].count = temp[borrowedBook].count + 1;
  //   } else {
  //     temp.push({ name: title, count: 1 });
  //   }
  // });
  // temp.sort((a, b) => (a.count > b.count ? 1 : -1));
  // if (temp.length > 5) {
  //   return temp.slice(0, 5);
  // }
  // return temp;

  //console.log(bookPopularity);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = books.map((book) => {
    let author = authors.find((writer) => writer.id === book.authorId);
    const authorFound = {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length,
    };
    return authorFound;
  });

  return popularAuthors
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
