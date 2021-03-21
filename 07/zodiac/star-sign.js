const getSignIndex = (boundaries, md) => {
    for (let i = 0; i < boundaries.length; i++) {
        if (md < boundaries[i]) {
            return i;
        }
    }

    return boundaries.length;
};

const starSign = date => {
    const boundaries = [21, 120, 221, 321, 422, 522, 623, 724, 824, 924, 1023, 1122];
    const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

    const num = date.getMonth() * 100 + date.getDate();
    const index = getSignIndex(boundaries, num);

    return signs[index];
};