let enterEventCount = 0;

let leaveCount = 0;

const container = document.querySelector('#container');

const unOrderList = document.querySelector('#unorderList');

const parrafoDiv = document.querySelector('#contentP');

const listado = function(text) {
    
    const textNode = document.createTextNode(text);
    const newElementList = document.createElement('li');
    newElementList.classList.add('remove'+enterEventCount);
    newElementList.append(textNode);
    unOrderList.appendChild(newElementList);

}

const deleteItemList = function(text) {
    const nodeText = document.createTextNode(text);
    const newParrafo = document.createElement('p');
    newParrafo.classList.add('parrafo'+leaveCount);
    newParrafo.append(nodeText);  
    parrafoDiv.append(newParrafo);

}


const enter = function() {
    container.style.border ='5px dotted orange';
    enterEventCount+=1;
    
    listado("Entrando a la cajita: "+enterEventCount);

    const removeli = document.querySelector('.remove'+ (enterEventCount-1))
    if(removeli != null){
        removeli.remove();
    }
}

const leave = function() {
    container.style.border ='1px solid #333';
    leaveCount+=1;

    deleteItemList('Saliste de la cajita unas: '+leaveCount+ ' veces');
    const removeP = document.querySelector('.parrafo'+(leaveCount-1));


    if(removeP != null) {
        removeP.remove();    
    }
}

container.addEventListener('mouseenter', enter);

container.addEventListener('mouseleave', leave)