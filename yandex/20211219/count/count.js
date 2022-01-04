const count = (str , ch) => {
    return str.split('').reduce((count, s) => {
        if (s == ch) {
            return ++count;
        }

        return count;
    }, 0)
}

console.log('123456', '4');