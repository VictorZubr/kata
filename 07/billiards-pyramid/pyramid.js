const pyramid = balls => {
    let row = 1;
    let sum = 0;
    while (sum <= balls) {
        sum += row++;
    }

    return row - 2;
};

const pyramid1 = balls => Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
