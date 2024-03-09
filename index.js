

const URL = "https://fakestoreapi.com/products";
// let titulo = document.getElementById("titulo")
// let precio = document.getElementById("precio")
let productos = document.getElementById("productos")

let tabla = "<div class='card'>";
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
             <div class='cabezara'> </div>
             <img width = "100px" src =  "${data[i].image}" />
             <p class='titulo'> ${data[i].title}</p>
             <p>$ ${data[i].price}</p>
             <label>Categoria:  ${data[i].category}</label>
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
  
  const colorAleatorio = generarColorAleatorio();
  document.body.style.backgroundColor = colorAleatorio;

getData();