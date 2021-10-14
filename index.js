console.log("hello sadik")




// let addbtn = document.getElementById('addbtn');
// addbtn.addEventListener('click',function(e){

// let name = document.getElementById('name');
// let author = document.getElementById('author');
// let fiction = document.getElementById('fiction');
// let programming = document.getElementById('programming');
// let horror = document.getElementById('horror');

// let tablebody = localStorage.getItem('tablebody');
// if(tablebody==null)
// {
//     tableobj = [];
// }
// else
// {
//     tableobj= JSON.parse('tablebody');
// }

// }
// )


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
//implement clear function
display.prototype.clear = function(){
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();

}


//implement clear function
display.prototype.validate = function(Book){
   if(Book.name.length<2 ||Book.author.length<2)
   {
       return false;
   }
   else{
       return true;
   }

}

//implement show function
display.prototype.show = function(type,displaymsg){
let message = document.getElementById('msg');
message.innerHTML = `<div class="alert alert-${type} d-flex align-items-center" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
<div>
  ${displaymsg}
</div>
</div>`;

setTimeout (function(){

    message.innerHTML=''
},2000);



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

    if(Display.validate(Book)){
        Display.add(Book); 
        Display.clear();
        Display.show('success','Your book has been successfuly added')
    }

    else{
      Display.show('danger','Sorry you can not add this book');
    }
   
    e.preventDefault();









}




