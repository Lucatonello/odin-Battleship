export function gameboard() {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));

    function placeShip(start, length, orientation) {
        let [x, y] = start;
        
        if (orientation === 'horizontal') {
            if (y + length > 10) throw new Error('Ship out of bounds');
            for (let i = 0; i < length; i++) {
                if (board[x][y + i] !== null) throw new Error('Overlapping ships');
                board[x][y + i] = { ship: newShip };
            }
        } else if (orientation === 'vertical') {
            if (x + length > 10) throw new Error('Ship out of bounds');
            for (let i = 0; i < length; i++) {
                if (board[x + i][y] !== null) throw new Error('Overlapping ships');
                board[x + i][y] = { ship: newShip };
            }
        } else {
            throw new Error('Invalid orientation');
        }
    }

    function placeDefaultShips() {
        try {
            placeShip([0, 0], 5, 'horizontal'); 
            placeShip([2, 3], 4, 'vertical');   
            placeShip([5, 5], 3, 'horizontal'); 
        } catch (error) {
            console.error(error.message);
        }
    }

    placeDefaultShips();

    return {
        board: board,
        placeShip: placeShip,
        receiveAttack: function(attackCoords) {
            let [x, y] = attackCoords;
            if (x >= 0 && x < 10 && y >= 0 && y < 10) {
                if (board[x][y] === null) {
                    board[x][y] = 'miss';
                } else if (board[x][y].ship) {
                    board[x][y].ship.hit();
                }
            } else {
                throw new Error('Invalid coordinates');
            }
        }
    };
}
