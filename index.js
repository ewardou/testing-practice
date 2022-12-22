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

export { capitalize, reverseString, calculator, analyzeArray };
