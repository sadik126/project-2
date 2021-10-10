console.log("hello sadik")


//constructor : create book object

function book(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;

}

//display constructor

function display() {

}

display.prototype.add = function(Book){
    console.log("adding to form");
    tablebody = document.getElementById('tablebody');
    let uistring = `
 <tr>
    
    <td>${Book.name}</td>
    <td>${Book.author}</td>
    <td>${Book.type}</td>
</tr>`;
tablebody.innerHTML += uistring;
}

display.prototype.clear = function(){
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();

}

//add methods to display protoypes




//add submit event listener
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    console.log("welcome to form submuit");
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let type;


    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let horror = document.getElementById("horror");


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (horror.checked) {
        type = horror.value;

    }
    // create object book
    let Book = new book(name, author, type);
    console.log(Book);

    let Display = new display();
    Display.add(Book); 
    Display.clear();
    e.preventDefault();









}




