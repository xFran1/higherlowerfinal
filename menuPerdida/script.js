

let items1=[
{
 "id":1,
 "img":"gifs/awd.gif"
},
{
 "id":2,
 "img":"gifs/entend.gif"
},
{
    "id":3,
    "img":"gifs/coger.gif"

},
{
    "id":4,
    "img":"gifs/dev.gif"

},
{
    "id":5,
    "img":"gifs/fuego.gif"

},
{
    "id":6,
    "img":"gifs/lanzar.gif"

},
{
    "id":7,
    "img":"gifs/telarana.gif"

},


];


function getRandomInt() {
    min = Math.ceil(1); 
    max = Math.floor(items1.length); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", function() {

let num = getRandomInt()
items1.forEach(element => {
    console.log("esto "+element.id+" es igual a "+num)

if(element.id===num){
    console.log("entra")
    let body = document.getElementById("body")
    body.style.backgroundImage="url('"+element.img + "')"
}

});


})