import { ship, gameboard } from './script';

const userBoard = gameboard();
const cpuBoard = gameboard();

function player(name, ship, gameboard) {
    return {
        name: name,
        ship: ship,
        gameboard: gameboard 
    }
}

let user = 'User';
let cpu = 'CPU';
const userPlayer = player(user, ship, gameboard);
const cpuPlayer = player(cpu, ship, gameboard);   

export { userPlayer, cpuPlayer };   