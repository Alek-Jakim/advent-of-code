const fs = require('fs')

const input = fs.readFileSync('day-06.txt', 'utf-8').split(/\r?\n/);

const uniqueAnswers = (res) => {
    let questions = []

    for (item of res) {
        if (!questions.includes(item)) {
            questions.push(item)
        }
    }
    return questions.length
}

let responses = ''
let total = 0;

for (item of input) {
    if (item !== '') {
        responses += item
    } else {
        total += uniqueAnswers(responses);
        responses = ''
    }
}

total += uniqueAnswers(responses);

// console.log(total) // answer is 6703 according to my input

/*---- PART 2 ----*/

total = 0;

responses = []

const allAnswers = (res) => {
    let questions = [];
    let isInLines;

    for (item of res[0]) {
        isInLines = true;
        for (line of res) {
            if (!line.includes(item)) {
                isInLines = false
            }
        }
        if (isInLines && !questions.includes(item)) {
            questions.push(item)
        }
    }
    return questions.length;
}



for (item of input) {
    if (item !== '') {
        responses.push(item)
    }
    else {
        total += allAnswers(responses)
        responses = []
    }
}

total += allAnswers(responses);

console.log(total)