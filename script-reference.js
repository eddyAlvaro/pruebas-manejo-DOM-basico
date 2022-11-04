// querySelector, nos permite seleccionar el primer elemento de nuestro HTML de acuerdo al argumento ingresado.

// El guia le gusta utilizar queryselector, porque permite utilizar la sintaxis de css. .class #id, etc
const title = document.querySelector('h1');

const parrafo = document.querySelector('p');

const parrafito = document.querySelector('.parrafito');

const id = document.querySelector('#id');

const input = document.querySelector('input');

const img = document.createElement('img');

// Nos muestra elemento de nuestro DOM.
console.log(input.value)


console.log({
    title,
    parrafo,
    parrafito,
    id,
    input
})

// COnvierte a codigo HTML
title.innerHTML ='Patito parodi <br> <br>feo';

// Este convierte a texto
title.innerText ='gho';

console.log(title.getAttribute('class'));

// title.setAttribute('class', 'rojo')

title.classList.add('red');
title.classList.remove('title');

input.value = '456';

img.setAttribute('src', 'https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

id.innerHTML = "";

id.append(img);


