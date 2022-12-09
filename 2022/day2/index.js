import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf-8');

let data = input.split(/\r?\n/);

const elf = {
    A: 1,
    B: 2,
    C: 3
}

const player = {
    X: 1,
    Y: 2,
    Z: 3
}

const win = 6;
const draw = 3;
let firstTaskScore = 0;
let secondTaskScore = 0;


const calculateWin = (elfEntry, playerEntry) => {
    const isLast = playerEntry - elfEntry === 2 || elfEntry - playerEntry === 2;
    const values = [playerEntry, elfEntry].sort((a, b) => a - b);
    const smallerValue = values[0];
    const biggerValue = values[1];

    return isLast ? smallerValue : biggerValue;
}

const firstRoundCase = (elfEntry, playerEntry) => {
    const choiceValue = player[playerEntry];
    let roundScore = 0;

    switch(elfEntry + playerEntry) {
        case 'AY':
        case 'BZ':
        case 'CX':
            roundScore = win + choiceValue;
            break;
        case 'AX':
        case 'BY':
        case 'CZ':
            roundScore = draw + choiceValue;
            break;
        default: 
            roundScore += choiceValue;
            break;
    }
    return roundScore
}

const secondRoundCase = (elfEntry, playerEntry) => {
    let elfChoiceValue = elf[elfEntry];
    const shouldLose = playerEntry === 'X';
    const shouldDraw = playerEntry === 'Y';
    const shouldWin = playerEntry === 'Z';

    let roundScore = 0;

    if(shouldDraw) {
        roundScore = elfChoiceValue + draw;
    }

    if(shouldLose) {
        let value = 0;
        switch(elfEntry) {
            case 'A':
                value = player['Z'];
                break;
            case 'B':
                value = player['X']
                break;
            case 'C':
                value = player['Y']
                break;
        }
        roundScore += value;
    }

    if(shouldWin) {
        let value = 0;
        switch(elfEntry) {
            case 'A':
                value = calculateWin(elf[elfEntry], player['Y']);
                break;
            case 'B':
                value = calculateWin(elf[elfEntry], player['Z'])
                break;
            case 'C':
                value = calculateWin(elf[elfEntry], player['X'])
                break;
            }
            roundScore = value + win;
        }

    return roundScore
}

const round = (players, roundCase, isFirstTask) => {
    if(!players || !roundCase) return;

    let addedScore = 0;

    const splitPlayers = players.split(" ");

    const elfChoice = splitPlayers[0];
    const playerChoice = splitPlayers[1];

    const outcome = roundCase(elfChoice, playerChoice);

    addedScore += outcome;

    isFirstTask ? firstTaskScore += addedScore : secondTaskScore += addedScore;

}

for(let i = 0; i < data.length; i++) {
    round(data[i], firstRoundCase, true)
}

for(let i = 0; i < data.length; i++) {
    round(data[i], secondRoundCase, false)
}

//https://eduherminio.github.io/blog/rock-paper-scissors/
//https://learnersbucket.com/tutorials/data-structures/circular-linked-list-implementation-in-javascript/#:~:text=What%20is%20circular%20linked%20list%3F,connected%20to%20form%20a%20circle.