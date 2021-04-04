const countSheeps = arrayOfSheep => arrayOfSheep.reduce((acc, sheep) => sheep ? acc += sheep : acc, 0);
const countSheeps1 = arrayOfSheep => arrayOfSheep.filter(Boolean).length;

