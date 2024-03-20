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

    
    const pieceContainer = document.createElement('div');
        pieceContainer.classList.add('piece-container');
        pieceContainer.setAttribute('draggable', true);
        
        const pieceSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        pieceSVG.setAttribute("id", "piece_" + i);
        pieceSVG.innerHTML = startPiece;
        pieceContainer.appendChild(pieceSVG);
        
        square.appendChild(pieceContainer);
        
        if (i < 16) {
            pieceContainer.classList.add('black');
            pieceContainer.style.cursor = 'move';
        } else if (i > 47) {
            pieceContainer.classList.add('white');
            pieceContainer.style.cursor = 'move';
        }
    
        pieceSVG.addEventListener('click', () => {
            console.log('clicked')
        });

        pieceSVG.addEventListener('dragstart', function(event) {
            console.log(event);
        });

        square.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        square.addEventListener('drop', function(event){
            square.prepend(pieceContainer);
        })
    });
    
    function Turns() {
        PlayerDisplay.textContent = "Player";
    }

    Turns();
}

createBoard();
