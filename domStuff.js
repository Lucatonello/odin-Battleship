import { userPlayer, cpuPlayer } from './player';

const container = document.getElementById('main-container');

function setupGameBoards() {
    const userBoardElement = createBoardElement('User', userPlayer.gameboard.board);
    const cpuBoardElement = createBoardElement('CPU', cpuPlayer.gameboard.board);

    container.appendChild(userBoardElement);
    container.appendChild(cpuBoardElement);
}

function createBoardElement(playerName, board) {
    const boardElement = document.createElement('div');
    boardElement.classList.add(`${playerName.toLowerCase()}`, 'gameboard');
    boardElement.innerHTML = `<h2>${playerName}'s Board</h2>`;

    board.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('gridRow');

        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = colIndex;
            rowElement.appendChild(cellElement);
        });

        boardElement.appendChild(rowElement);
    });

    return boardElement;
}

export { setupGameBoards };
