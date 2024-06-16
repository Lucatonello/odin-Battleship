function ship(length) {
    let hitCount = 0;
    return {
        length: length,
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
        recieveAttack: function(cords) {
            let [x, y] = cords;
            if (x >= 0 && x <= 10 && y <= 0 && y <= 10) {
                if (board[x, y] === null) {
                    board[x, y] = 'miss';
                }
                else if (board[x, y] === Object) {
                    board[x, y].hit();
                }
            }
            else {
                throw new Error('Invalid cordinates'); 
            }
        }
    }
}