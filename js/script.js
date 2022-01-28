main=document.getElementById('main');

const api_Url="https://www.googleapis.com/books/v1/volumes?q=";
//searching for the book
async function bookSearch(){
    var search=document.getElementById('search').value;
    const response=await fetch(api_Url + search);
    const data=await response.json();
    console.log(data);
    showBook(data);
}

function showBook(books){
    main.innerHTML="";
    for(let book=0;book<books.items.length;book++){
        books.items[book].volumeInfo.title;
        books.items[book].volumeInfo.description;
        books.items[book].volumeInfo.imageLinks["thumbnail"];

        const bookel = document.createElement('div');
        bookel.classList.add('book');
        bookel.innerHTML=`
        <img src="${books.items[book].volumeInfo.imageLinks["thumbnail"]}" alt="">
        <div class="book-info">
            <h2>${books.items[book].volumeInfo.title}</h2>
        </div>
        <div class="description">
            <h2>Description</h2>
            ${books.items[book].volumeInfo.description}
       </div>
      </div>`
      main.appendChild(bookel)

    }
}
document.getElementById('btn-primary').addEventListener('click',bookSearch,false);