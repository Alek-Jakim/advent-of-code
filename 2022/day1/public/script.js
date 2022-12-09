"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readFile() {
    const requiredPath = path_1.default.join(__dirname, '../input.txt');
    const input = fs_1.default.readFileSync(requiredPath, 'utf-8');
    const data = input.split(/\r?\n/).map((num) => parseInt(num));
    return data;
}
let calorieList = readFile();
let mostCalories = 0;
let sum = 0;
const calorieSums = [];
for (let i = 0; i < calorieList.length; i++) {
    if (isNaN(calorieList[i])) {
        if (sum > mostCalories) {
            mostCalories = sum;
        }
        calorieSums.push(sum);
        sum = 0;
        continue;
    }
    else {
        sum += calorieList[i];
    }
}
const firstThreeSum = calorieSums.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b);
console.log(firstThreeSum);
