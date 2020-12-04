const fs = require('fs');
let fileInput = fs.readFileSync('day-03.txt', 'utf-8').split(/\r?\n/);

/*---- PART 1 ----*/

let treeCount = 0;
let row = 0
let col = 0

//The length of the input represents how many rows there are (added + 1 so it doesn't go out of bounds)
while (row + 1 < fileInput.length) {
    //adding one for moving down and three for movie right
    row += 1
    col += 3
    //this way it will always be in bounds cuz the modulusr/remainder will be from 0 to 1 - the length of the row
    let piece = fileInput[row][col % fileInput[row].length];

    if (piece === '#') { treeCount += 1 }
}
//My result was 195


// /*---- PART 2 ----*/

let combinations = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

let total = 1


for (combo of combinations) {

    treeCount = 0;
    row = 0
    col = 0

    while (row + 1 < fileInput.length) {

        row += combo[1]
        col += combo[0]

        let piece = fileInput[row][col % fileInput[row].length];

        if (piece === '#') {
            treeCount += 1
        }
    }

    total *= treeCount;
}
//My result was 3772314000
