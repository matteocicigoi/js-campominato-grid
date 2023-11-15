'use strict';

/* Funzioni */
// Crea l'elemento html
 function createElement(tag, className, content){
    const element = document.createElement(tag);
    for(let i = 0; i < className.length; i++){
        element.classList.add(className[i]);
    }
    element.append(content);
    return element;
 }

// Resetta il contenuto
 function resetContentHtml(element){
    element.innerHTML = '';
 }

// Inizia il gioco
function startGame(tag, difficulty, containerTag){
    const element = document.querySelector(tag);
    const container = document.querySelector(containerTag);
    element.addEventListener('click', function(){
    resetContentHtml(container);
    let size;
    if(difficulty === 1){
        size = 100;
    }else if(difficulty === 2){
        size = 81;
    }else{
        size = 49;
    }
    for(let i = 1; i <= size; i++){
        const cell = createElement('div', ['cell', 's-10'], i);
        container.append(cell);
    }
    });
}

// Crea l'evento delle celle
function createEvent(containerTag){
    const element = document.querySelector(containerTag);
    element.addEventListener('click', function(event){
        const cellSelected = event.srcElement;
        cellSelected.classList.add('selected');
        console.log(cellSelected.innerHTML);
    });
}

/* Main */
startGame('header button', 1, '.container');
startGame('main h2', 1, '.container');
createEvent('.container');



//<div class="cell s-10">1</div>