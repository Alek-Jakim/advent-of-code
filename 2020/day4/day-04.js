const fs = require('fs');
const { valid_byr, valid_ecl, valid_eyr, valid_hcl, valid_hgt, valid_pid, valid_iyr, validatedData } = require('./day-04-functionValidation');

const input = fs.readFileSync('day-04.txt', 'utf-8').split(/\r?\n/);

let currentPass = ''

//first part count
let count = 0;

//second part count
let validPassportCount = 0

const allowedFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const validPassports = [];

const isValidPassport = (passport) => {
    for (allowed of allowedFields) {
        if (!passport.includes(allowed)) {
            return false
        }
    }
    return true
}

for (line of input) {
    if (line !== '') {
        currentPass += ' ' + line
    }
    else {
        if (isValidPassport(currentPass)) {
            validPassports.push(currentPass)
            count += 1
        }
        currentPass = ''
    }
}

//this is for the last line
if (isValidPassport(currentPass)) {
    validPassports.push(currentPass)
    count += 1
}



for (passport of validPassports) {
    if (validatedData(passport)) {
        validPassportCount += 1
    }
}


console.log(`The answer for the first part is ${count} and ${validPassportCount} for the second one.`)