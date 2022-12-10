import fs from 'fs'

const input = fs.readFileSync('./input.txt', 'utf-8');

const data = input.split(/\r?\n/);

let taskOneSum = 0;
let taskTwoSum = 0;

const mockData = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8'
]

const parsePair = function(str) {
    const splitStr = str.split(",");
    const rangeOne = splitStr[0].split("-").map((n) => parseInt(n));
    const rangeTwo = splitStr[1].split("-").map((n) => parseInt(n));
    return [...rangeOne, ...rangeTwo];
}

const range = (n1, n2) => {
    const arr = [];

    if(n1 === n2) {
        return [n1];
    }

    for(let i = n1; i <= n2; i++) {
        arr.push(i);
    }

    return arr;
}


const firstTask = function(str) {
    const parsed = parsePair(str);
    const firstRange = range(parsed[0], parsed[1]);
    const secondRange = range(parsed[2], parsed[3]);

    const secondContainsFirst = firstRange.every((n) => secondRange.includes(n))
    const firstContainsSecond = secondRange.every((n) => firstRange.includes(n))

    let isContained;

    if(secondContainsFirst || firstContainsSecond) {
        isContained = true;
    } else {
        isContained = false;
    }
    
    return isContained
}

const secondTask = (str) => {
    const parsed = parsePair(str);
    const firstRange = range(parsed[0], parsed[1]);
    const secondRange = range(parsed[2], parsed[3]);

    const secondOverlapsFirst = firstRange.some((n) => secondRange.includes(n))
    const firstOverlapsSecond = secondRange.some((n) => firstRange.includes(n))

    let isContained;

    if(secondOverlapsFirst || firstOverlapsSecond) {
        isContained = true;
    } else {
        isContained = false;
    }
    
    return isContained


}

// for(let i = 0; i < data.length; i++) {
//    const isContained = firstTask(data[i]);

//    if(isContained) {
//     taskOneSum += 1
//    }
// }

// for(let i = 0; i < data.length; i++) {
//    const isContained = secondTask(data[i]);

//    if(isContained) {
//     taskTwoSum += 1
//    }
// }


