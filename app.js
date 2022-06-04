const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = Math.round(valueInEuro * 127.9);
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = Math.round(valueInEuro * 0.8);
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log (fromEuroToDollar(3.5))
console.log (fromDollarToYen(1))
console.log (fromYenToPound(450))
console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
