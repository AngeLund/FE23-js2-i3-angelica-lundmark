type Card = {
    title:string,
    description:string,
    rating:number,
    stock:number,
    category:string,
    thumbnail:string
}

async function api(url: string): Promise<void> {
  const response = await fetch(url);
  let {products} = await response.json();
  const ul = document.getElementById('cardList') as HTMLUListElement;
  ul.innerHTML = '';
  createProductList(products);
}
api('https://dummyjson.com/products')

const buttonSearch = document.getElementById('buttonS') as HTMLButtonElement;
buttonSearch.addEventListener('click', searchBar);
const getSearch = document.getElementById('siteSearch') as HTMLFormElement;
getSearch.addEventListener('submit', searchBar)

function searchBar (event: SubmitEvent) :void {
  event.preventDefault();
  const input = document.getElementById('inputSub') as HTMLInputElement;
  if(input){
    api(`https://dummyjson.com/products/search?q=${input.value}`)
  }
  else{
    api('https://dummyjson.com/products')
  }
}
function createProductList(products: Card[]) :void {
  products.forEach(card => {
    creatCard(card)
  })
}
function creatCard (card: Card) : void {

const ul = document.getElementById('cardList') as HTMLUListElement;
const li = document.createElement('li') as HTMLLIElement;
const form = document.createElement("form") as HTMLFormElement;
const pic = document.createElement("img") as HTMLImageElement;
const h3 = document.createElement('h3') as HTMLHeadingElement;
const h4 = document.createElement('h4') as HTMLHeadingElement;
const h5 = document.createElement('h5') as HTMLHeadingElement;
const p = document.createElement('p') as HTMLParagraphElement;
const pStock = document.createElement('p') as HTMLParagraphElement ;
const button = document.createElement('button') as HTMLButtonElement;


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

