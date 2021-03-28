const bestMatch = (ALAHLYGoals, zamalekGoals) => {
    let index = 0;
    let difference = Infinity;
    let goals = 0
    for (let i = 0; i < ALAHLYGoals.length; i++) {
        const a = ALAHLYGoals[i];
        const z = zamalekGoals[i];
        const diff = a - z;

        if (diff > difference) {
            continue;
        }

        if (diff === difference) {
            if (z > goals) {
                index = i;
                goals = z;
            }
            continue;
        }

        difference = diff;
        goals = z;
        index = i;
    }

    return index;
};
