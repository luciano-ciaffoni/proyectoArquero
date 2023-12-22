

let carne =
document.querySelector("#carne")

let pizza =
document.querySelector("#pizza")

let  texto =
document.querySelector("#empanadacarne")

let empanada =
document.querySelector("#empanada")

let imagen = false;
empanada.onclick = function(){
    if (imagen == false){
        carne.src = 'pollo.webp'
        texto.innerText = "empanada de pollo"
        imagen = true
    } else {
        carne.src = 'jamonyqueso.webp'
        texto.innerText = "emmpanda de jamon y queso "
        imagen = false 

     }
}





let imagen1 = false
pizza.onclick = function(){
   if (imagen1 == false) {
    carne.src = "pizza.webp"
    alert("pizza🍕")
    texto.innerText = "pizza"
    texto.style.fontFamily = "impact"
    texto.style.fontSize = "300px"
    imagen1 = true

   } else {
    carne.src = "carne.webp"
    texto.innerText = "empanada de carne"
    alert("empanada  de carne")
   
   imagen == false 
   }
}

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