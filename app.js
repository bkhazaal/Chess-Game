const gameBoard = document.querySelector('#gameboard');
const PlayerDisplay = document.querySelector("#player");
const InfoDisplay = document.querySelector("#info-display");
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('square-id', i);
        const row = Math.floor ((63-i)/8) + 1;
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "gray" : "brown");
        } else {
            square.classList.add(i % 2 === 0 ? "brown" : "gray");
        }

    gameBoard.append(square);

    const pieceSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    pieceSVG.setAttribute('draggable', true);
    pieceSVG.innerHTML = startPiece;

    square.appendChild(pieceSVG);

        if (i < 16) {
            square.classList.add('black');
        } else {
            square.classList.add('white');
        }

    });
}

createBoard();
