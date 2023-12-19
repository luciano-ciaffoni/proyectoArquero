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






pizza.onclick =
function (){
    alert("pizza🍕")
    carne.src = "pizza.webp"
    texto.innerText = "pizza"
    texto.style.fontFamily = "impact"
    texto.style.fontSize = "300px"

}
