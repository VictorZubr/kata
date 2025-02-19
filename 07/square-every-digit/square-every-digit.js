const squareDigits = num => {
    return Number(num.toString().split('').map(c => Number(c) ** 2).join(''));
}
