

const URL = "https://fakestoreapi.com/products";
let productos = document.getElementById("productos")

let tabla = "<div class='card'>";

function getData() {
  fetch(URL)
      .then(response => response.json())
      .then(data => {
          console.log("Datos de la api: ", data);
          let productosCardSet = JSON.stringify(data)
          localStorage.setItem('productos',productosCardSet)
          console.log(productosCardSet)

          let productosCardGet = localStorage.getItem('productos')
          let listaProducto = JSON.parse(productosCardGet)
          console.log("Lista Producto", listaProducto)
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
const categoryFilter = document.getElementById("category-filter");

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
});

// filter(data => (data.categoryFilter = ()) )
// [].push



getData();  
