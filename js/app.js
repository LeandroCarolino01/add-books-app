// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To Function
UI.prototype.addBookToList = function(book){
    console.log(book);
}


// Event Listeners

document.getElementById('book-form').addEventListener('submit', function(e){
    //console.log('Test');
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate book
    const ui = new Book(title, author, isbn);

    console.log(ui);

    // Add book to list
    ui.addBookToList(book);

    e.preventDefault();
})