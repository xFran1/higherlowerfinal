document.getElementById("boton1").addEventListener("mouseover",function(event){
    let textoDentroBoton1 = document.getElementById("textoDentroBoton1")
    textoDentroBoton1.style.color="black";
    let boton1 = document.getElementById("boton1");
    boton1.style.background="white"
    let triangulo1=document.getElementById("triangulo1");
    triangulo1.style.color="black"
})

document.getElementById("boton1").addEventListener("mouseout",function(event){
    let textoDentroBoton1 = document.getElementById("textoDentroBoton1")
    textoDentroBoton1.style.color="rgb(249, 249, 129)";
    boton1.style.background="transparent"
    triangulo1.style.color="white"

})

document.getElementById("boton2").addEventListener("mouseover",function(event){
    let textoDentroBoton2 = document.getElementById("textoDentroBoton2")
    textoDentroBoton2.style.color="black";
    let boton2 = document.getElementById("boton2");
    boton2.style.background="white"
    let triangulo2=document.getElementById("triangulo2");
    triangulo2.style.color="black"
})

document.getElementById("boton2").addEventListener("mouseout",function(event){
    let textoDentroBoton2 = document.getElementById("textoDentroBoton2")
    textoDentroBoton2.style.color="rgb(249, 249, 129)";
    boton2.style.background="transparent"
    triangulo2.style.color="white"

})