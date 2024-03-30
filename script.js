const container = document.querySelector('.container');

const generateGridButton = document.querySelector('.generate-grid');

let numberOfSquares;

for(i = 1; i <= (16 * 16); i++){
    let squareDiv = document.createElement('div');
    squareDiv.style.width = `${800/16}px`;
    squareDiv.style.height = `${800/16}px`;
    squareDiv.style.border = `0.1px solid black`;

    squareDiv.addEventListener('mouseenter',function(){
        squareDiv.style.backgroundColor = giveRandomColor();
    })

    container.appendChild(squareDiv);
}

generateGridButton.addEventListener('click',function(){
    numberOfSquares = prompt(`Enter a number between 1 and 100.
(The number you enter will take as the number of squares per side for the new grid.)`)

    if(numberOfSquares < 1 || numberOfSquares > 100){
        alert('invalid number!');
    }else{
        let childOfContainer = container.firstElementChild;

        // remove every div in the container
        while(childOfContainer){
            container.removeChild(childOfContainer);
            childOfContainer = container.firstElementChild;
        }

        for(i = 1; i <= (numberOfSquares * numberOfSquares); i++){
            let squareDiv = document.createElement('div');
            squareDiv.style.width = `${800/numberOfSquares}px`;
            squareDiv.style.height = `${800/numberOfSquares}px`;
            squareDiv.style.border = `0.1px solid black`;
        
            squareDiv.addEventListener('mouseenter',function(){
                squareDiv.style.backgroundColor = giveRandomColor();
            })
        
            container.appendChild(squareDiv);
        }
    }
})

function giveRandomColor(){
    const COLOR_RED = '#ff0000';
    const COLOR_ORANGE = '#FFA500';
    const COLOR_YELLOW = '#FFFF00';
    const COLOR_GREEN = '#00FF00';
    const COLOR_BLUE = '#0000ff';
    const COLOR_INDIGO = '#4B0082';
    const COLOR_VIOLET = '#8F00FF';

    const COLORS = [COLOR_RED,COLOR_ORANGE,COLOR_YELLOW,COLOR_GREEN,COLOR_BLUE,
                    COLOR_INDIGO,COLOR_VIOLET];

    let randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    return randomColor;
}