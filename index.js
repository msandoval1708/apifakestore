

const URL = "https://fakestoreapi.com/products";
// let titulo = document.getElementById("titulo")
// let precio = document.getElementById("precio")
let productos = document.getElementById("productos")

let tabla = "<div class='card'>";
// function getData(){
//     fetch(URL)
//     .then( response => response.json() )
//     .then( data => {
//         console.log("Datos de la api: ", data)
//         for(let i = 0; i < data.length; i++ ){
//              //crear tag etiquetas html con js
//              let bloqueHtml =

//              `
//              <div class='card-item'>
//              <div class='cabezara'> </div>
//              <div class='cont-img'>
//              <img src =  "${data[i].image}" /> 
//              </div>
//              <p class='titulo'> ${data[i].title}</p>
//              <p>$ ${data[i].price}</p>
//              <label>Categoria:  ${data[i].category}</label>
//              </div>

//              `
             

             
//              tabla += bloqueHtml;
//         }
//         tabla +="</div>";
//         productos.innerHTML = tabla;
//     })
    
// }
// function generarColorAleatorio() {
//     const rojo = Math.floor(Math.random() * 256);
//     const verde = Math.floor(Math.random() * 256);
//     const azul = Math.floor(Math.random() * 256);
  
//     return `rgb(${rojo}, ${verde}, ${azul})`;
//   }
  
//   const colorAleatorio = generarColorAleatorio();
//   document.body.style.backgroundColor = colorAleatorio;

// getData();

function getData(){
    fetch(URL)
    .then( response => response.json() )
    .then( data => {
        console.log("Datos de la api: ", data)
        for(let i = 0; i < data.length; i++ ){
             //crear tag etiquetas html con js
             let bloqueHtml =

             `
             <div class='card-item'>
             <div class='cabezara' style="background-color: ${generarColorAleatorio()};"> </div>
             <div class='cont-img'>
             <img src =  "${data[i].image}" /> 
             </div>
             <p class='titulo'> ${data[i].title}</p>
             <p>$ ${data[i].price}</p>
             <label class='categoria'>Categoria: ${data[i].category} </label>
             </div>

             `
             

             
             tabla += bloqueHtml;
        }
        tabla +="</div>";
        productos.innerHTML = tabla;
    })
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
          searchButton.addEventListener("click", function() {
            const searchTerm = searchInput.value.toLowerCase();
            const cardItems = document.getElementsByClassName("card-item");

            for (let i = 0; i < cardItems.length; i++) {
              const title = cardItems[i].getElementsByClassName("titulo")[0].innerText.toLowerCase();
              if (title.includes(searchTerm)) {
                cardItems[i].style.display = "block";
             } else {
                cardItems[i].style.display = "none";
              }
            }
          });

          searchInput.addEventListener("input", function() {
            searchButton.click();
          });
getData();