// Get file system module
const fs = require("fs");
//Read the file input
let input = fs.readFileSync("./input.txt", "utf-8");
// Turn it into an array without line breaks
let data = input.split(/\r?\n/);
// Don't forget those pesky strings, turn them into numbers
data = data.map((num) => parseInt(num));

let count = 0; // Answer: 1529
let windowCount = 0; // Answer: 1567

// Loop through data (only once is necessary)
for(let i = 0; i < data.length; i++) {
    // Check if there is a previous entry
    if(data[i - 1]) {
        //if there is check if it's smaller then the current entry
        if(data[i] > data[i - 1]){
            count += 1;
        }
        // In the same loop check the windows
        // Get first window
        let firstWindow = (data[i] +  data[i + 1] + data[i + 2]);
        // Get second window
        let secondWindow = (data[i + 1] + data[i + 2] + data[i + 3]);
        if(secondWindow > firstWindow) {
            windowCount += 1;
        }
    }
};

