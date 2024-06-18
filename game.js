import { userPlayer, cpuPlayer } from './player';
import { setupGameBoards } from './domStuff';

let currentPlayer = userPlayer;
let gameOver = false;

function setupEventListeners() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => {
            if (!gameOver && currentPlayer === userPlayer) {
                const attackCoords = getAttackCoords(cell);

                try {
                    cpuPlayer.gameboard.receiveAttack(attackCoords);

                    updateCellAfterAttack(cell, attackCoords);
                    gameOverCheck();
                    switchTurns();

                } catch (error) {
                    console.error(error.message);
                }
            }
        });
    });
}

function getAttackCoords(cell) {
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    return [row, col];
}

function updateCellAfterAttack(cell, attackCoords) {
    let [row, col] = attackCoords;
    let cellState = cpuPlayer.gameboard.board[row][col];

    if (cellState === 'miss') {
        cell.classList.add('miss');
    } else if (cellState instanceof Object) { 
        cell.classList.add('hit');
    }
}

function switchTurns() {
    currentPlayer = currentPlayer === userPlayer ? cpuPlayer : userPlayer;
}

function gameOverCheck() {
    let userSunkCount = 0;
    let cpuSunkCount = 0;

    userPlayer.gameboard.board.forEach(row => {
        row.forEach(cell => {
            if (cell instanceof Object && cell.isSunk()) {
                userSunkCount++;
            }
        });
    });

    cpuPlayer.gameboard.board.forEach(row => {
        row.forEach(cell => {
            if (cell instanceof Object && cell.isSunk()) {
                cpuSunkCount++;
            }
        });
    });
}

function startGame() {
    setupGameBoards();
    setupEventListeners();
}

document.addEventListener('DOMContentLoaded', startGame);

export { startGame };