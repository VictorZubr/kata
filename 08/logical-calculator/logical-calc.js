const calculate = op => {
    const operator = {
        'AND': (a, b) => a && b,
        'OR': (a, b) => a || b,
        'XOR': (a, b) => a !== b,
    }

    return operator[op];
};

const logicalCalc = (array, op) => array.reduce((acc, value, index) => !index ? value : calculate(op)(acc, value));
// const logicalCalc = (array, op) => array.reduce(calculate(op));