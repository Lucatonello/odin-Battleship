function ship(length) {
    let hitCount = 0;
    return {
        length: length,
        //position: position,
        hit: function() {
            hitCount ++;
            return hitCount
        },
        isSunk: function() {
            if (hitCount >= length) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

function gameboard() {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    return {
        board: board,
        placeShip: function(start, length, orientation) {
            let [x, y] = start;
            const newShip = ship(length);
            
            if (orientation === 'horizontal') {
                if (y + length > 10) throw new Error('Ship out of bounds');
                for (let i = 0; i < length; i++) {
                    if (board[x][y + i] !== null) throw new Error('overlaping');
                    board[x][y + i].newShip;
                }
            }
            else if (orientation === 'vertical') {
                if (x + length > 10) throw new Error('Ship out of bounds');
                for (let i = 0; i < length; i++) {
                    if (board[x + i][y] !== null) throw new Error('overlaping');
                    board[x + i][y].newShip;
                }
            }
            else {
                throw new Error('Invalid orientation')
            }
        },
        recieveAttack: function(attackCords) {
            let [x, y] = attackCords;
            if (x >= 0 && x <= 10 && y <= 0 && y <= 10) {
                if (board[x, y] === null) {
                    board[x, y] = 'miss';
                }
                else if (board[x, y] === Object) {
                    board[x, y].hit();
                    isSunk();
                }
            }
            else {
                throw new Error('Invalid cordinates'); 
            }
        }
    }
}