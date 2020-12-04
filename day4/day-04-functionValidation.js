const valid_byr = (byr) => {
    byr = parseInt(byr)

    if (byr < 1920 || byr > 2002) {
        return false;
    }
    return true;
}

const valid_iyr = (iyr) => {
    iyr = parseInt(iyr)

    if (iyr < 2010 || iyr > 2020) {
        return false
    }
    return true;
}

const valid_eyr = (eyr) => {
    eyr = parseInt(eyr)

    if (eyr < 2020 || eyr > 2030) {
        return false
    }
    return true;
}

const valid_hgt = (hgt) => {
    let measurementUnit = hgt.slice(-2);
    let number = parseInt(hgt.slice(0, hgt.length - 2));

    if (measurementUnit !== 'cm' && measurementUnit !== 'in') {
        return false
    }

    if (measurementUnit === 'cm') {
        if (number < 150 || number > 193) {
            return false
        }
    } else if (measurementUnit === 'in') {
        if (number < 59 || number > 76) {
            return false
        }
    }

    return true
}

const valid_hcl = (hcl) => {
    if (hcl[0] !== "#") {
        return false
    }
    let restOfChars = hcl.substring(1);
    if (restOfChars.length !== 6) {
        return false
    }
    return true
}

const valid_ecl = (ecl) => {
    let eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

    if (!eyeColors.includes(ecl)) {
        return false
    }
    return true
}

const valid_pid = (pid) => {
    if (pid.length !== 9) {
        return false
    }

    return true
}

const validatedData = (passport) => {
    passport = passport.trim().split(' ');
    data = {}

    for (item of passport) {
        itemKey = item.substring(0, 3);
        itemValue = item.substring(4);

        data[itemKey] = itemValue;
    }
    if (!valid_byr(data['byr'])) {
        return false
    }
    if (!valid_iyr(data['iyr'])) {
        return false
    }
    if (!valid_eyr(data['eyr'])) {
        return false
    }
    if (!valid_hgt(data['hgt'])) {
        return false
    }
    if (!valid_hcl(data['hcl'])) {
        return false
    }
    if (!valid_ecl(data['ecl'])) {
        return false
    }
    if (!valid_pid(data['pid'])) {
        return false
    }

    return true
}


module.exports = { valid_byr, valid_ecl, valid_eyr, valid_hcl, valid_hgt, valid_pid, valid_iyr, validatedData }