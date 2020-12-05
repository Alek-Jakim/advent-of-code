const fs = require('fs');
const input = fs.readFileSync('day-05.txt', 'utf-8').split(/\r?\n/);
const { getPassCol, getPassRow } = require('./day-05-functions')

let highestID = 0;
let allIDS = [];

/*---- PART 1 ----*/

for (boardingPass of input) {
    row = getPassRow(boardingPass.slice(0, 7), 0, 127)
    col = getPassCol(boardingPass.slice(7, boardingPass.length), 0, 7)

    id = row * 8 + col
    allIDS.push(id);

    if (id > highestID) {
        highestID = id
    }
}

console.log(highestID) // result is 842 booooom

/*---- PART 2 ----*/

for (id of allIDS) {
    if (!allIDS.includes(id + 1) && allIDS.includes(id + 2)) {
        let mySeatID = id + 1;
        console.log(mySeatID) //my result is 617 boooooooom
    }
}

