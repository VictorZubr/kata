const isVow = a => a.map(n => [97, 101, 105, 111, 117].includes(n) ? String.fromCharCode(n) : n);

function howManyDalmations(number) {

    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

    var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number <= 101 ? dogs[3] : dogs[2]))

    return respond

}
