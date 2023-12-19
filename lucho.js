let titulo =
document.querySelector("h1")

titulo.textContent = "lucho"

titulo.style.color = "blue"

titulo.style.fontFamily = "impact"

titulo.style.fontSize = "100px"



let botonImagen =
document.querySelector("#botonImagen")

botonImagen.style.color = "red"

botonImagen.style.backgroundColor = "purple"


let Messi =
document.querySelector("#messi")


botonImagen.onclick =
function (){
    alert("hola")
    console.log("🔵🟦")
    Messi.src = "dibu.webp"
    reset.style.backgroundColor = "grey"
    reset.style.color = "black"
    lionel.innerText = "dibu"


}

let reset =
document.querySelector("#reset")

let lionel =
document.querySelector("#lionel")

let cambiar =
document.querySelector("#cambiar")

reset.onclick =
function (){
alert("hola")
    console.log("🔵🟦")
    Messi.src = "messi.webp"
    reset.style.backgroundColor = "green"
    reset.style.color = "red"
    lionel.innerText = "messi"



}


let imagen = false;
cambiar.onclick = function(){
    if (imagen == false){
        Messi.src = 'dibu.webp'
        imagen = true
    } else {
        messi.src = 'messi.webp'
    imagen = false
    
    }
}


let dia = prompt("ingresa un dia")

if (dia.toUpperCase == "DOMINGO" ) {
    console.log("dia libre")
} else {
    console.log("dia laborable")
    
}




/*
como empezar el examen
1) creamos los archivos html y css
2) incluimos el archivo .js en HTML fuera de la etiqueta body
3) colocar indentificadores clases o id en html
4) los indentificadores tiene que llevar "." para class o "#" para los id 
5) verificar que las variables esten creadas con "let"
6) verificar que los elementos esten bien escritos */ 