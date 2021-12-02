const fs = require("fs");

let input = fs.readFileSync("./input.txt", "utf-8");

let data = input.split(/\r?\n/);


// 1st Exercise
let horizontalPosition1 = 0;
let depth1 = 0;
let result1;

// 2nd Exercise
let horizontalPosition2 = 0;
let depth2 = 0;
let result2;
let aim = 0;

// 1st Solution
for(let i = 0; i < data.length; i++) {
    // Get the current number value
    let num = parseInt(data[i].slice(-1));

    // Get the current command
    let command = data[i].slice(0, -2).trim();

    if(command === "down") {
        depth1 += num; 
    }
    if(command === "up") {
        depth1 -= num;
    }
    if(command === "forward") {
        horizontalPosition1 += num;
    } 
}

result1 = horizontalPosition1 * depth1;
// 1st Result: 1693300


// 2nd Exercise Solution
for(let i = 0; i < data.length; i++) {
    // Get the current number value
    let num = parseInt(data[i].slice(-1));

    // Get the current command
    let command = data[i].slice(0, -2).trim();

    if(command === "down") {
        aim += num; 
    }
    if(command === "up") {
        aim -= num;
    }
    if(command === "forward") {
        horizontalPosition2 += num;
        depth2 += (aim *  num);
    } 
}

result2 = horizontalPosition2 * depth2;
// 2nd Result: 1857958050