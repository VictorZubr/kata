const defaultArguments = (fn, defaultArgs) => {
    const context = this;
    const fnStr = fn.toString()
    const from = fnStr.indexOf('(');
    const to = fnStr.indexOf(')');

    const argsString = fnStr.substring(from + 1, to)
    const args = argsString.split(',').map(it => it.trim());

    return (...originArgs) => {
        const actualArgs = args.map((a, i) => originArgs[i] || defaultArgs[args[i]]);
        return fn.apply(context, actualArgs);
    }
}

function add(a,b) {
    return a + b;
}


const add_ = defaultArguments(add, {b: 3});

console.log(add_(10))