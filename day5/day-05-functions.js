const getPassRow = (p) => {
    let lowerHalf = 0;
    let upperHalf = 127;

    for (let i = 0; i < 6; i++) {
        let halvedValue = Math.floor((upperHalf + lowerHalf) / 2)

        if (p[i] === 'F') {
            upperHalf = halvedValue
        }
        else if (p[i] === 'B') {
            lowerHalf = halvedValue + 1
        }
    }
    if (p[6] === 'F') {
        return lowerHalf
    } else {
        return upperHalf
    }
}

const getPassCol = (p) => {
    let upperHalf = 7;
    let lowerHalf = 0;

    for (let i = 0; i < 2; i++) {
        let halvedValue = Math.floor((upperHalf + lowerHalf) / 2)

        if (p[i] === 'L') {
            upperHalf = halvedValue
        }
        else if (p[i] === 'R') {
            lowerHalf = halvedValue + 1
        }
    }
    if (p[2] === 'L') {
        return lowerHalf
    } else {
        return upperHalf
    }
}

module.exports = { getPassRow, getPassCol }