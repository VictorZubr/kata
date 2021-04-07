const secondMaxValue = arr => { // arr have 2 or more items
    const [_, second] = arr.reduce(([first, second], item) => {
        if (item >= first) {
            return [item, first]
        }

        return item >= second ? [first, item] : [first, second];
    }, [-Infinity, -Infinity]);

    return second;
}


console.log(secondMaxValue([10, 4 , 0, 9 ,8,6 ]))
console.log(secondMaxValue([100, 44 , 0, 9 ,8,6 ]))
console.log(secondMaxValue([0, 4 , 0, 9 ,8,6 ]))
console.log(secondMaxValue([1,2,3,4,5,6,7,8]))
console.log(secondMaxValue([10, 4 , 0, -3 ,8,6 ]))
console.log(secondMaxValue([10 ]))