const shiritori = words => {
    if (!words[0]) {
        return [];
    }

    const result = [words[0]];

    for (let i = 1; i < words.length ; i++) {

        const current = words[i];
        const prev = words[i - 1];

        if (!current || !prev.endsWith(current.slice(0, 1))) {
            return result;
        }

        result.push(current)

    }

    return result;
}