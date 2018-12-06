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
    const list = document.getElementById('book-list');

    const row = document.createElement('tr')

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
`
    list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function(message, className){
    // create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');

    // get form
    const form = document.querySelector('#book-form');

    // insert alert
    container.insertBefore(div, form);

    // timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);


}


// clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    

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
    const ui = new UI();

    //validate
    if(title === ''|| author === ''|| isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
        return false;
    } else {
         // Add book to list
    ui.addBookToList(book);

    ui.showAlert('book added!', 'success');

    ui.clearFields();

    }



   

    e.preventDefault();
})