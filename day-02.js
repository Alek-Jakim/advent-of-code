const fs = require('fs');
const input = fs.readFileSync('day-02.txt', 'utf-8').split(/\r?\n/);

//Extracting the values
const inputDivision = input.map(item => item.split(':'));

const inputString = inputDivision.map(item => item[1]);

const letter = input.map(item => (item.split(':')[0]).substring((item.split(':')[0]).length - 1))

const firstNum = input.map(num => parseInt(num.split(':')[0].substring(0, num.split(':')[0].indexOf(' ')).split('-')[0]))

const secondNum = input.map(num => parseInt(num.split(':')[0].substring(0, num.split(':')[0].indexOf(' ')).split('-')[1]))

/*---- PART 1 ---- */

const checkRange = (num1, num2, character, string) => {

    let validityCountOne = {
        valid: 0,
        invalid: 0
    }

    for (let i = 0; i < 1000; i++) {
        let letterCount;

        let regex = new RegExp(character[i], "g");


        if (string[i].match(regex) === null) {
            validityCountOne.invalid += 1
        } else {

            letterCount = string[i].match(regex).length;

            if (letterCount >= num1[i] && letterCount <= num2[i]) {
                validityCountOne.valid += 1

            } else {
                validityCountOne.invalid += 1

            }
        }
    }
    console.log(validityCountOne)
    return validityCountOne
}
checkRange(firstNum, secondNum, letter, inputString)
////My result was 625 valid, 375 invalid


/*---- PART 2 ----*/

const checkValidity = (num1, num2, character, string) => {

    const validityCountTwo = {
        valid: 0,
        invalid: 0
    }

    for (let i = 0; i < 1000; i++) {

        let firstCheck = string[i].substring(num1[i], num1[i] + 1)

        let secondCheck = string[i].substring(num2[i], num2[i] + 1)

        if (firstCheck === character[i] && secondCheck === character[i]) {
            validityCountTwo.invalid += 1;
        } else if (firstCheck === character[i] || secondCheck === character[i]) {
            validityCountTwo.valid += 1;
        } else {
            validityCountTwo.invalid += 1;
        }
    }
    console.log(validityCountTwo)
    return validityCountTwo
}


checkValidity(firstNum, secondNum, letter, inputString)
//My result was 391 valid, 609 invalid