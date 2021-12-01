let fs = require('fs');

let inputFile = `day01.txt`;

let input = fs.readFileSync(inputFile, 'utf8');

let data = input.split(/\r?\n/);

data = data.map((item) => parseInt(item));

/*---- PART 1 ----*/

const getResultOne = (dataArr) => {
    let res;

    dataArr.map((a) => {
        dataArr.map((b) => {
            if (a + b === 2020) {
                res = a * b;
            }
        })
    })
    console.log(`The result for the first part of the assignment is ${res}.`)
    return res;
}


/*---- PART 2 ----*/

const getResultTwo = (dataArr) => {
    let res;

    dataArr.map((a) => {
        dataArr.map((b) => {
            dataArr.map((c) => {
                if (a + b + c === 2020) {
                    res = a * b * c;
                }
            })
        })
    })

    console.log(`The result for the second part of the assignment is ${res}.`)
    return res;
}

getResultOne(data);
//The result is 960075

getResultTwo(data);
//The result is 212900130

