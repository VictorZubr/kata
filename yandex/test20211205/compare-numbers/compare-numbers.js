const compareNumbers = ([str1, str2]) => {
    const number1 = parseInt(str1.replace(/one/g, '1').replace(/zero/g, '0'), 2);
    const number2 = parseInt(str2.replace(/one/g, '1').replace(/zero/g, '0'), 2);

    if (number1 === number2) {
        return '='
    }

    return number1 > number2 ? '>' : '<';
}

/*console.log(`oneone
onezerozero
`.split('\n'))*/

console.log(compareNumbers(`oneonezerozero
onezeroonezero`.split('\n')));
