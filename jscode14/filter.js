//REAL WORLD EXAMPLE FOR FILTER

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const bk1 =books.filter( (bk) => bk.publish >= 2004 )
  const bk2 = books.filter( (bk) => bk.genre ==="History" )
  //console.log(bk2);
  //console.log(bk1)

  const bk3 = books.filter( (bk) =>( bk.genre === "Non-Fiction" && bk.edition >=1990 ))
  console.log(bk3)