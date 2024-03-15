const URL = "https://fakestoreapi.com/products";
let productos = document.getElementById("productos")
let categoryFilter = document.getElementById("category-filter");
let listaProducto = []; // Move this line outside the getData() function

let tabla = "<div class='card'>";

function getData() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log("Datos de la api: ", data);
        let productosCardSet = JSON.stringify(data)
        localStorage.setItem('productos',productosCardSet)
        console.log(productosCardSet)

        listaProducto = data; // Assign the data to the listaProducto array

        // Populate the categoryFilter select element with the categories
const categoryFilter = document.getElementById("category-filter");

// Add the first empty option for "Todas las categorias"
let option = document.createElement("option");
option.value = "";
option.textContent = "Todas las categorias";
categoryFilter.appendChild(option);

// Get all categories from the API data
const categories = [...new Set(data.map(item => item.category))];

// Populate the categoryFilter select element with the categories
categories.forEach(category => {
  let option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

        for (let i = 0; i < data.length; i++) {
            let bloqueHtml = `
            <div class='card-item'>
            <div class='cabezara' style="background-color: ${generarColorAleatorio()};"> </div>
            <div class='cont-img'>
            <img src =  "${data[i].image}" /> 
            </div>
            <p class='titulo'> ${data[i].title}</p>
            <div class="price-container">
                <p class="price-new">Precio nuevo: US$${data[i].price}</p>
                <p class="price-discount">Precio: US$${(data[i].price * (1 - 0.45)).toFixed(2)}</p>
            </div>
            <div class="savings">
                <p class="savings-amount">TE AHORRAS: US$${(data[i].price * 0.45).toFixed(2)}</p>
                <p class="savings-percent">(45%)</p>
            </div>
            <label class='categoria'>Categoria: ${data[i].category} </label>
            </div>
            `;
            tabla += bloqueHtml;
        }tabla += "</div>";
        productos.innerHTML = tabla;
      });
}

function generarColorAleatorio() {
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
  return `rgb(${rojo}, ${verde}, ${azul})`;
}

function generarColorAleatorio1() {
  const rojo = Math.floor(Math.random() * 256);
const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
 
 return `rgb(${rojo}, ${verde}, ${azul})`;
}

const colorAleatorio = generarColorAleatorio1();
document.body.style.backgroundColor = colorAleatorio;

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const cardItems = document.getElementsByClassName("card-item");

  for (let i = 0; i < cardItems.length; i++) {
    const title = cardItems[i].getElementsByClassName("titulo")[0].innerText.toLowerCase();
    const category = cardItems[i].getElementsByClassName("categoria")[0].innerText.toLowerCase();
    if (title.includes(searchTerm) && (selectedCategory === "" || category.includes(selectedCategory))) {
      cardItems[i].style.display = "block";
    } else {
      cardItems[i].style.display = "none";
    }
  }

  const matchingProducts = listaProducto.filter(product => product.title.toLowerCase().includes(searchTerm));
  const searchResults = document.getElementById("search-results");
  let searchResultsHtml = "";
  if (matchingProducts.length > 0) {
    searchResultsHtml = `
      <ul>
        ${matchingProducts.map(product => `<li>${product.title}</li>`).join("")}
      </ul>
    `;
  } else {
    searchResultsHtml = "<p>No se encontraron coincidencias</p>";
  }
  searchResults.innerHTML = searchResultsHtml;
});

// filter(data => (data.categoryFilter = ()) )
// [].push



getData();