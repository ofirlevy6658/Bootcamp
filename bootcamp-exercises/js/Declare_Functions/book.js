

const describe = (book) => `The book ${book.name} was written by ${book.author} in ${book.Published}`;

const book = {
    name:'The Catcher in the Rye',
    pages:277,
    Published:'July 16, 1951',
    Publisher:'Little, Brown and Company',
    author:'J. D. Salinger'       
}

console.log(describe(book));