function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function divide(a, b) {
        return a / b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add,
        subtract,
        divide,
        multiply,
    };
})();

function analyzeArray(array) {
    if (array.length === 0) {
        throw new Error('No values provided');
    }
    const orderedArray = array.sort((a, b) => a - b);
    const min = orderedArray[0];
    const max = orderedArray[orderedArray.length - 1];
    const { length } = array;
    const sum = array.reduce((prev, curr) => prev + curr, 0);
    const average = sum / length;
    return {
        average,
        min,
        max,
        length,
    };
}

function caesarCipher(string, shift) {
    let newString = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < string.length; i++) {
        let newElement;
        if (alphabet.includes(string[i].toLowerCase())) {
            let newIndex = alphabet.indexOf(string[i].toLowerCase()) + shift;
            if (newIndex > 25) {
                newIndex -= 26;
            }
            newElement = alphabet[newIndex];
        } else {
            newElement = string[i];
        }
        if (/[A-Z]/.test(string[i])) {
            newElement = newElement.toUpperCase();
        }
        newString += newElement;
    }
    return newString;
}

export { capitalize, reverseString, calculator, analyzeArray, caesarCipher };
