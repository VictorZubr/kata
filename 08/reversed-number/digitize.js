const digitize = n => n.toString().split('').reverse().map(it => +it);

/*
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}*/
