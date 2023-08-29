let products = [];

const data = document.querySelector('#data');

async function fetchProducts() {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    products = json.data;
    renderProducts();
}

function renderProducts() {
    const html = products.map(function(product){
      console.log(product.name);
        return `
            <h2>${ product.name }</h2>
            <h3>${ product.location }</h3>
            <p>
                ${ product.description }
            </p>
        `;
      }).join('');
      data.innerHTML = html;
      console.log(data);
}

fetchProducts();