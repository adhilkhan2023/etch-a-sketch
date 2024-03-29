const container = document.querySelector('.container');

const resetButton = document.querySelector('.reset-button');

let numberOfSquares;

for(i = 1; i <= (16 * 16); i++){
    let squareDiv = document.createElement('div');
    squareDiv.style.width = `${800/16}px`;
    squareDiv.style.height = `${800/16}px`;
    squareDiv.style.border = `0.1px solid black`;

    squareDiv.addEventListener('mouseenter',function(){
        squareDiv.style.backgroundColor = 'black';
    })

    container.appendChild(squareDiv);
}

resetButton.addEventListener('click',function(){
    numberOfSquares = prompt(`Enter a number between 1 and 100.
(The number you enter will take as the number of squares per side for the new grid.)`)
})