const groupLetters = (str) => str
    .split('')
    .reduceRight(
        ([count, letter , ...other], ch) =>
            ch === letter ? [count + 1, letter, ... other] : [1, ch, count, letter , ...other],
        []
    )
    .join('');

console.log(groupLetters('aaabbsssa'))
console.log(groupLetters('aaaaaaaaaaaaaaaaaaaaaabbsssazzz111ffffffffffffffffffffffffffffffffffgg'))
