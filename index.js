

const URL = "https://fakestoreapi.com/products";


let titulo = document.getElementById("titulo")
let precio = document.getElementById("precio")

console.log()

let tabla = "<div>"
function getData(){

    fetch (URL)
    .then( response => response.json())
    .then( data => {
        console.log("Datos de la API",data)
        for (let i = 0; i < data.length; i++) {
            //console.log(data[i].title)
            let bloquehtml = `<p>$(data[i].title)</p>`
            console.log(bloquehtml)
            tabla += bloquehtml;
          }

        tabla += "<div>";
        producto.innerHTLM = tabla;
} )

    
}


getData();