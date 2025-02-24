// Мое решение
function createPhoneNumber(numbers){
    return '(012) 345-6789'.replace(/(\d)/g, (str, key) => {
        return numbers[key];
    })
}

// Еще короче
function createPhoneNumber(n) {
    return "(012) 345-6789".replace(/\d/g, d => n[d])
}
