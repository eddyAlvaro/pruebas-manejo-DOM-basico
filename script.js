

const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');

const input2 = document.querySelector('#calculo2');

const form = document.querySelector('#form');

const btn = document.querySelector('#calcular');

const pResult = document.querySelector('#result');

const sumarValuesForm = function(event) {
    const suma = Number(input1.value) + Number(input2.value);
    console.log(suma);
    console.log(event);
    const prevent = event.preventDefault();

    console.log(" :::: "+prevent);
    pResult.innerHTML = "Resultado: " + suma;
}

// Este addEventListener requiere 2 argumentos:
    // (nombre del evento , codigo js a ejecutar)

// las funcionse que pasemos por el addEventListener no requieren que las pasemos con parentesis, este se encarga de colocarlas internamente.

form.addEventListener('submit', sumarValuesForm);