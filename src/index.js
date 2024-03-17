async function api(url) {
    const response = await fetch(url);
    let { products } = await response.json();
    const ul = document.getElementById('cardList');
    ul.innerHTML = '';
    createProductList(products);
}
api('https://dummyjson.com/products');
const buttonSearch = document.getElementById('buttonS');
buttonSearch.addEventListener('click', searchBar);
const getSearch = document.getElementById('siteSearch');
getSearch.addEventListener('submit', searchBar);
function searchBar(event) {
    event.preventDefault();
    const input = document.getElementById('inputSub');
    if (input) {
        api(`https://dummyjson.com/products/search?q=${input.value}`);
    }
    else {
        api('https://dummyjson.com/products');
    }
}
function createProductList(products) {
    products.forEach(card => {
        creatCard(card);
    });
}
function creatCard(card) {
    const ul = document.getElementById('cardList');
    const li = document.createElement('li');
    const form = document.createElement("form");
    const pic = document.createElement("img");
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const pStock = document.createElement('p');
    const button = document.createElement('button');
    li.appendChild(pic);
    li.appendChild(h3);
    li.appendChild(h4);
    li.appendChild(h5);
    li.appendChild(p);
    li.appendChild(pStock);
    li.appendChild(button);
    ul.appendChild(li);
    form.appendChild(button);
    li.appendChild(form);
    h3.innerText = `Title: ${card.title}`;
    h4.innerText = `Category: ${card.category}`;
    h5.innerText = `Ratings: ${card.rating}`;
    p.innerText = card.description;
    pStock.innerText = `In stock: ${card.stock}`;
    pic.setAttribute('src', card.thumbnail);
    button.innerText = 'Buy';
    button.classList.add('styleButton');
    li.classList.add('styleLi');
}
export {};
