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
function startGame(tag, difficultyTag, containerTag){
    const element = document.querySelector(tag);
    const container = document.querySelector(containerTag);
    element.addEventListener('click', function(){
    resetContentHtml(container);
    const difficulty = document.getElementById(difficultyTag).value;
    let size;
    let classSize;
    if(difficulty === '1'){
        size = 100;
        classSize = 's-10';
    }else if(difficulty === '2'){
        size = 81;
        classSize = 's-9';
    }else{
        size = 49;
        classSize = 's-7';
    }
    for(let i = 1; i <= size; i++){
        const cell = createElement('div', ['cell', classSize], i);
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
startGame('header button', 'difficulty', '.container');
startGame('main h2', 'difficulty', '.container');
createEvent('.container');



//<div class="cell s-10">1</div>