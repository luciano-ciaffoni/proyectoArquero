let edadUsurio = 
Number (prompt('Ingresa tu edad'))

let titulo =
document.querySelector("h1")

let Messi =
document.querySelector("#messi")

if (edadUsurio >= 18) {
    alert("podes ingresar  ")
    titulo.style.color = "green"
    Messi.src = "verdadero1.png "

} else {
    alert("no podes ingresar")
    titulo.style.color = "red"
    titulo.style.fontFamily = "impact"
    Messi.src = "falso.png"
    
}