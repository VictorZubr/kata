const add = (x, y) => {
    while (y !== 0) {
        const carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }

    return x;
}

/*
while(y != 0) {
    carry = x & y;
    x = x ^ y;
    y = carry << 1;
}*/
