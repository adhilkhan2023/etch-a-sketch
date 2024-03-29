const container = document.querySelector('.container');

for(i = 1; i <= (16 * 16); i++){
    let squareDiv = document.createElement('div');
    squareDiv.style.width = `${800/16}px`;
    squareDiv.style.height = `${800/16}px`;
    squareDiv.style.border = `0.1px solid black`;

    container.appendChild(squareDiv);
}