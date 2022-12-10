import fs from 'fs'

const input = fs.readFileSync('./input.txt', 'utf-8');

const data = input.split(/\r?\n/);

const grouped = []

for(let i = 0; i < data.length; i+=3) {
    let arr = []
    arr.push(data[i])
    arr.push(data[i + 1])
    arr.push(data[i + 2]);
    grouped.push(arr)
    arr = [];
}


const alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
const fullAlphabet = alphabet + alphabet.toUpperCase();
const getCharIndexValue = (char) => fullAlphabet.indexOf(char) + 1;

let taskOneSum = 0;
let taskTwoSum = 0;


function firstTask(str) {
    const isEven = str.length % 2 === 0;
    if(!isEven) return;

    // const firstHalf = str.split('', str.length / 2).join('');
    const firstHalf = str.substring(0, str.length / 2)
    const secondHalf = str.substring(str.length / 2);
    
    let commonChar;
    for(let i = 0; i < firstHalf.length; i++) {
        if(secondHalf.includes(firstHalf[i])) {
            commonChar = firstHalf[i]
        }
    }

    const charIndexValue = getCharIndexValue(commonChar)

    sum += charIndexValue;
}

const secondTask = (group) => {
    let commonChar;

    const first = group[0];
    const second = group[1];
    const third = group[2];

    for(let i =0; i < group.length; i++) {
        for(let j = 0; j < group[i].length; j++) {
            const char = group[i][j]
            if(first.includes(char) && second.includes(char) && third.includes(char)) {
                commonChar = char
            }
        }
    }
    const charIndexValue = getCharIndexValue(commonChar);

    taskTwoSum += charIndexValue;
}

// for(let i = 0; i < data.length; i++) {
//     firstTask(data[i])
// }
//console.log(taskOneSum)

// for(let i = 0; i < grouped.length; i++) {
//     secondTask(grouped[i])
// }
console.log(grouped)