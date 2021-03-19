const countPositivesSumNegatives = arr => {
    if (!arr || !arr.length) {
        return [];
    }
    return arr.reduce(([count, sum], item) => {
        if (item === 0) {
            return [count, sum];
        }

        return item > 0 ? [++count, sum] : [count, sum += item];
    }, [0, 0])
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))