//Múltiplo de 5: Crea una función que determine si un número es múltiplo de 5.

//let codigo = (prompt ("ingresa la contraseña"))
function contraseña (codigo) {
    if (codigo == "secreto"){
        alert ("pasa")
    } else { 
        alert ("fuera")
        
    }
}

let  saludar =
document.querySelector("#saludo")

let nombre =
document.querySelector('#nombre')

let texto1 =
document.querySelector("#soy")

let boton =
document.querySelector("#boton1")

let messi =
document.querySelector("#messi")

/*aludar.innerText = "chau"

nombre.innerText = "maxi"

nombre.style.fontfamily = "impact"

nombre.style.fontSize = "100px"
*/



let text  = false
boton.onclick =  function(){
    if (text == false) {
        texto1.innerText = "rama"
        nombre.innerText = "maxi"
        nombre.style.fontfamily = "Gill Sans"
        messi.innerText = "messi: Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS estadounidense. Es también internacional con la selección de Argentina"
        messi.style.fontSize = "100px"
        saludar.innerText = "chau"
        text = true

        
        
    } else {
        texto1.innerText = "soy lucho"
        nombre.innerText = "lucho"
        saludar.innerText = "hola"
        messi.innerText = "messi:"
        nombre.style.fontfamily = "arial"
        text = false
        
    }
}


    










/*
como empezar el examen
1) creamos los archivos html y css
2) incluimos el archivo .js en HTML fuera de la etiqueta body
3) colocar indentificadores clases o id en html
4) los indentificadores tiene que llevar "." para class o "#" para los id 
5) verificar que las variables esten creadas con "let"
6) verificar que los elementos esten bien escritos */ 