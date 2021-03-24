const moveTen = s => {
    return s.split('').map(ch => {
        let res = ch.charCodeAt(0) + 10;
        if (res > 122) {
            res = res - 26;
        }

        return String.fromCharCode(res);
    }).join('')
}