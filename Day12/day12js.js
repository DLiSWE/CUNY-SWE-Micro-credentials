// Create a tip calculator function for whoever goes eating in a restaurant. Tip rule: tip 15% if the bill value is
// between 30 and 100. If the value is different, the tip is 20%.
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
// Example: 'The bill was 275, the tip was 55, and the total value 330
// Hints: Try not to use an if/else statement.
// TEST DATA: Test for bill values 285, 26 and 90
let testa = 285
let testb = 26
let testc = 90

function calculate(bill){
    return (bill < 30 || bill > 100 ? bill*1.2 : bill*1.15)
}
let result = calculate(testb)
console.log(`Bill was ${testb},tip was ${parseFloat(result-testb).toFixed(2)} Total Value:${result}`)

// switch (testa){
//     case (30 < testa < 100): console.log(testa*0.15); break;
//     case (testa < 30): console.log(testa*0.2); break;
//     case (testa > 100): console.log(testa*0.2); break;
// }

// Create 2 functions (Arrow Function Only) to convert temperature:
// 1. Create a function called CovertCelsiusToFahrenheit. When calling the function, pass a Celsius
// temperature value (argument) to the function, the function can convert it to Fahrenheit
// temperature. Log a message to console at the end. Eg: "NN°C is NN°F".
// Note: This function can only convert the temperature between -89.3°C and 56.7°C
// TEST DATA: 100°C, 0°C, 10°C
// 2. Create a function called CovertFahrenheitToCelsius. Convert Fahrenheit to celsius and log "NN°F
// is NN°C." to Console.
// Note: This function can only convert the temperature between -128.74 and 134.06
// TEST DATA: 32°F , 10°F, 102°F

let c = [100,0,10]
let f = [32,10,102]

const convertCelsiusToFarenheight = (celsius) => {
    let fahrenheit = celsius * 1.8 + 32;
    if (celsius > -89.3 && celsius < 56.7){
        return `${celsius}°C is ${fahrenheit}°F`;
}
    else {
        return `${celsius} cannot be converted.`
    }
}
const convertFahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit-32) * (5/9);
    if (fahrenheit > -128.74 && fahrenheit < 134.06){
        return `${fahrenheit}°F is ${celsius}°C`;
}
    else {
        return `${fahrenheit} cannot be converted`
    }
}

console.log(convertCelsiusToFarenheight(c[0]));
console.log(convertCelsiusToFarenheight(c[1]));
console.log(convertCelsiusToFarenheight(c[2]));
console.log(convertFahrenheitToCelsius(f[0]));
console.log(convertFahrenheitToCelsius(f[1]));
console.log(convertFahrenheitToCelsius(f[2]));

// Create an HTML page that displays 3 buttons.
// Clicking on any of the three buttons will open the same modal window.
// Apply JavaScript only to open/close the modal window.
$(document).ready(function(){
    $("button").click(function(){
        $(".modal").css("display","flex");
    });
});


$(document).ready(function(){
    $("a").click(function(){
        $(".modal").css("display","none");
    });
});

function hide(){
    $(".modal").css("display","none")
}