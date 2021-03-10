const book = {
    name: 'Also sprach Zarathustra',
    author:'Nietzsche',
    year: 1883 
}

const book2 = {
    name: 'The Hunchback of Notre Dame',
    author:'Victor Hugo',
    year:1831
}

const bookUtils={
    getFirstPublished(book1,book2){
        return book1 >= book2 ? book2 :book1;
    },
    setNewEdition(book,year){
        book.latestEdition = year;
    },
    setLanguage(book,language){
        book.language = language;
    },
    setTranslation(book,language,translator){
        book.translator = {language,translator};
    },
    setPublisher(book,name,location){
        book.publisher = {name,location};
    },
    isSamePublisher(book1,book2){
        return book1.publisher['name']===book2.publisher['name'] && book1.publisher['location']===book2.publisher['location'];
    }

}

bookUtils.setTranslation(book2,'spanish','Salvador');
console.log(book2);

//true
bookUtils.setPublisher(book,'a','b');
bookUtils.setPublisher(book2,'a','b');
console.log(bookUtils.isSamePublisher(book,book2));

//false
bookUtils.setPublisher(book,'as','b');
bookUtils.setPublisher(book2,'a','b');
console.log(bookUtils.isSamePublisher(book,book2));