const fs = require('fs');

const input = fs.readFileSync("./input.txt", "utf-8");




/* Part 1


    let data = input.split('\n');
    let gamma = '';
    let ones = 0, zeros = 0;
    for (let j = 0; j < data[0].length; j++) {
        for (let i = 0; i < data.length; i++) {
            if (data[i][j] == '1') ones++;
            else zeros++;
        }
        if (ones > zeros) gamma += '1';
        else gamma += '0';
        ones = 0;
        zeros = 0;
    }

    let epsilon = gamma.split('').map(element => {
        if (element == '1') return '0';
        else return '1';
    }).join('');
    
let result = parseInt(gamma, 2) * parseInt(epsilon, 2);


*/



let data = input.split('\n');
let ones = 0, zeros = 0;

let oxygen = "";
for (let j = 0; j < data[0].length; j++) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][j] == "1") ones++;
        else zeros++;
    }

    if (ones >= zeros) data = data.filter(element => element[j] === "1");
    else data = data.filter(element => element[j] === "0");

    ones = 0;
    zeros = 0;
    if (data.length == 1) {
        oxygen = data[0];
        break;
        }
}

    data = input.split('\n');

    let carbon = '';
    for (let j = 0; j < data[0].length; j++) {
        for (let i = 0; i < data.length; i++) {
            if (data[i][j] == "1") ones++;
            else zeros++;
        }

        if (ones < zeros) data = data.filter(element => element[j] === "1");
        else data = data.filter(element => element[j] === "0");

        ones = 0;
        zeros = 0;
        if (data.length == 1) {
            carbon = data[0];
            break;
        }
    }

let result = parseInt(oxygen, 2) * parseInt(carbon, 2);

console.log(result)