console.log("Hola mundo")

const URL = "https://fakestoreapi.com/products";

function getData(){

    fetch (URL)
    .then( response => response.json())
    .then( data => console.log("Datos de la API",data))
}

getData();