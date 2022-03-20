const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen  = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar/1.2)*127.9;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound  = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = (valueInYen/127.9)*0.8;
    // retornamos el valor
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
