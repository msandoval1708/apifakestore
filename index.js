const URL = "https://fakestoreapi.com/products";
const productos = document.getElementById("productos");
const categoryFilter = document.getElementById("category-filter");
let listaProducto = [];

const tabla = document.createElement("div");
tabla.className = "card";

function getData() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log("Datos de la api: ", data);
      listaProducto = data;

      // Populate the categoryFilter select element with the categories
      let option = document.createElement("option");
option.value = "";
option.textContent = "Todas las categorias";
categoryFilter.appendChild(option);

      const categories = [...new Set(data.map(item => item.category))];
      categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
      });
      

      // Populate the cards
      tabla.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const { title, image, category, price } = data[i];
        const bloqueHtml = `
          <div class='card-item'>
            <div class='cabezara' style="background-color: ${generarColorAleatorio()};"> </div>
            <div class='cont-img'>
              <img src =  "${image}" /> 
            </div>
            <p class='titulo'> ${title}</p>
            <div class="price-container">
                <p class="price-new">Precio nuevo: US$${price}</p>
                <p class="price-discount">Precio: US$${(price * (1 - 0.45)).toFixed(2)}</p>
            </div>
            <div class="savings">
                <p class="savings-amount">TE AHORRAS: US$${(price * 0.45).toFixed(2)}</p>
                <p class="savings-percent">(45%)</p>
            </div>
            <label class='categoria'>Categoria: ${category} </label>
          </div>
        `;
        tabla.innerHTML += bloqueHtml;
      }
      productos.appendChild(tabla);
    });
}

function generarColorAleatorio() {
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
  return `rgb(${rojo}, ${verde}, ${azul})`;
  
}
const colorAleatorio = generarColorAleatorio()
document.body.style.backgroundColor = colorAleatorio;



const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
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

getData();