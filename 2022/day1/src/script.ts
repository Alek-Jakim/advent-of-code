import fs from 'fs';
import path from 'path';


function readFile(): number[] {
    const requiredPath: string = path.join(__dirname, '../input.txt')
    const input: string = fs.readFileSync(requiredPath, 'utf-8');

    const data: number[] = input.split(/\r?\n/).map((num) => parseInt(num))

    return data;
}

let calorieList: number[] = readFile();

let mostCalories:number = 0
let sum:number = 0
const calorieSums = []

for(let i = 0; i < calorieList.length; i++) {

    if(isNaN(calorieList[i])) {
        if(sum > mostCalories) {
            mostCalories = sum
        }
        calorieSums.push(sum)
        sum = 0
        continue
    } else {
        sum += calorieList[i]
    }
}

const firstThreeSum: number = calorieSums.sort((a, b) => b - a).slice(0, 3).reduce((acc, currVal) => acc + currVal);



