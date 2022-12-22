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

export { capitalize, reverseString, calculator };
