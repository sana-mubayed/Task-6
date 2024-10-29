fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => showAllBooks(res))
let div = document.getElementById('root');
let div2 = document.getElementById('root2');

function showAllBooks(res) {
    const lastFourItems = res.slice(-4);
    lastFourItems.forEach(element => {
        div.innerHTML += `<div class="col-lg-3 col-md-6 pt-5">
            <div class="card">
                <div class="card-header bg-gray3 p-3">
                    <img src=${element.simple_thumb} class="card-img-top img-fluid w-100" alt="card-img-top">
                    <button class="w-100 black start-0 z-3 p-3 border-0 d-none position-absolute bottom-0">ADD TO CART</button>
                </div>
            </div>
            <div class="border-0 pt-5">
                <h3 class="brown text-center card-title pb-2">${element.title}</h3>
                <p class="silver text-center card-text">${element.author}</p>
            </div>
        </div>`;
    });
    const allItems = res.slice(0,8);
    allItems.forEach(element => {
        div2.innerHTML += `<div class="col-lg-3 col-md-6 pt-5">
            <div class="card">
                <div class="card-header bg-gray3 p-2">
                    <img src=${element.simple_thumb} class="card-img-top img-fluid w-100" alt="card-img-top">
                    <button class="w-100 black start-0 z-3 p-3 border-0 d-none position-absolute bottom-0">ADD TO CART</button>
                </div>
            </div>
            <div class="border-0 pt-5">
                <h3 class="brown text-center card-title pb-2">${element.title}</h3>
                <p class="silver text-center card-text">${element.author}</p>
            </div>
        </div>`;
    });
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(res => res.json())
    .then(res => shop(res))
let shopDiv = document.getElementById('shop');
let authorDiv = document.getElementById('author');
let imgDiv = document.getElementById('img');
let paragraphDiv = document.getElementById('paragraph');
let titleDiv = document.getElementById('title');


function shop(res) {
    console.log(res);
    res.authors.forEach(element => {
        authorDiv.innerHTML += element.name;
    });
    imgDiv.innerHTML = `<img src=${res.cover} class="d-block w-100 " alt="Slide 2">`
    paragraphDiv.innerHTML = res.fragment_data.html;
    titleDiv.innerHTML = res.fragment_data.title;
}
const links = document.querySelectorAll('.list-link');
links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
