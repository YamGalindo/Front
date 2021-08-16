//------------ agregar un texto con querySelector, no sirve por que 
//             deja pasar lo que se que se le envie, permite injeccion 
//             de codigo en tu html y eso esta feo. 
// Seleccionamos el demo
let demo = document.querySelector("#demo");
// Pedimos el texto al usurio
let respuesta = prompt("ingrese texto");
// Inyectamos en el demo una plantilla con el texto del usuario
demo.innerHTML += `<p>${respuesta}<p>`;

//------------ agregar nodo de texto con createNode no permite injeccion
//creo el nodo
let texto2 = prompt("ingrese la respuesta");
//creo el texto
let element2 = document.createTextNode(texto2);
//el elemento le agergo el nodo texto
element2.appendChild(nodoTexto2);
//a nuestro contenedor le agrego el elemento completo
demo.appendChild(element2);


