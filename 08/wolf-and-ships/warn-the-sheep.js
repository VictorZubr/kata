const warnTheSheep = queue => {

    for (let i = 1; i <= queue.length; i++) {
        if (queue[queue.length -1 - i] === 'wolf') {
            return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
        }
    }

    return `Pls go away and stop eating my sheep`;
};
/*
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}*/
