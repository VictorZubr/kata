const inverseSlice = (items, a, b) => {
    items.splice(a, b - a);
    return items;
}

const inverseSlice1 = (items, a, b) => items.filter((_, i) => i < a || i >= b);