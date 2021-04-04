const bestMatch = (ALAHLYGoals, zamalekGoals) => {
    let index = 0;
    let difference = Infinity;
    let goals = 0
    for (let i = 0; i < ALAHLYGoals.length; i++) {
        const a = ALAHLYGoals[i];
        const z = zamalekGoals[i];
        const diff = a - z;

        if (diff < difference) {
            difference = diff;
            goals = z;
            index = i;
        }

        if (diff === difference && z > goals) {
            goals = z;
            index = i;
        }

    }

    return index;
};