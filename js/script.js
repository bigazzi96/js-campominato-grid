const gridElement= document.querySelector('section#grid');

const playButton = document.getElementById('play-button')


for (let index = 0; index < 100; index++){
const squareElement = document.createElement('article');
squareElement.classList.add('square');


const contentEl = document.createElement('span');
contentEl.classList.add ('content');
contentEl.append(index +1);
squareElement.appendChild(contentEl);


squareElement.addEventListener('click', function(){
    if((index + 1) % 2 ===0){
        console.log(index);
        squareElement.classList.add('active');
    }
    else{
        console.log(index);
        squareElement.classList.add('active', 'odd');
    }
});

gridElement.appendChild(squareElement);
}