const nbDig = (n, d) => {
    return Array.from({length: n + 1}, (_, i) => (i * i).toString()).join('').split('').filter(ch => ch === `${d}`).length
}

/*
function nbDig(n, d) {
    return Array.from({length: n+1}, (_,i) => Math.pow(i,2)).join('').match(new RegExp(d,'g')).length;
}*/
