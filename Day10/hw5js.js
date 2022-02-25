// The Temperature Converter - It’s cold out! Let's make a converter based on the steps below and display
// the converted temperature result.
// Use template literals Only to display the result
// • Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
// • Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is
// NN°C."
let celsius1 = 10

const convert = (celsius) => {
    fahrenheit = celsius * 1.8 + 32
    return `${celsius1}°C equals ${fahrenheit}°F`
}
console.log(convert(celsius1))

// Use the BMI example from class activity (BMI question), and the code you already wrote, and improve it:
// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Lucas'
// BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "John's BMI (28.3) is higher
// than Lucas’ BMI (23.9), that is True/False!"
// HINT: Use an if/else statement; the variables you create in class are: johnBMI, lucasBMI, lucasHigherBMI.

class person {
    constructor(name,height,weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    calculate(height,weight){
        return Number(weight/(height*height))*703;
    }
}

const John = new person('John', 64, 130)
const Steve = new person('Steve', 70,180)

JohnBMI = John.calculate(John.height, John.weight)
SteveBMI = Steve.calculate(Steve.height, Steve.weight)

if (JohnBMI > SteveBMI){
    console.log(`John's BMI (${JohnBMI}) is greater than Steve's BMI (${SteveBMI})`)
}
else {
    console.log(`Steve's BMI (${SteveBMI}) is greater than John's BMI (${JohnBMI})`)
}

// Use prompt() to let user type a number from the web page.
// If user enters nothing or strings, log "Please enter a number!" to console;
// If user enter 10, log "You win 10 point" to console;
// If user typed 8, log "You win 8 points” to console
// If the number is not 8 or 10, log "NOT MATCHED!!" to console
let part3 = prompt('Please enter a number!')

if ( part3 == "" || isNaN(parseInt(part3))) {
    console.log('Please enter a number!')
}
else if (parseInt(part3) === 10) {
    console.log('You win 10 points')
}
else if (parseInt(part3) === 8) {
    console.log('You win 8 points')
}
else {
    console.log('NOT MATCHED!!')
}

// Create a function to check who the winner is:
// There are two teams, Nets and Knicks. They compete against each other 3 times.
// The team with the highest average score (the score should be at least 100) wins a trophy!
// A draw only happens when both teams have the same score and both have a score greater or equal
// 100 points. Otherwise, no team wins the trophy.
// Test data:
// Data 1: Nets score 80, 82 and 100, Knicks score 80, 90 and 106
// Data 2: Nets score 98, 110 and 101. Knicks score 108, 92 and 110

const Nets1 = [80,82,100]
const Knicks1 = [80,90,106]
const Nets2 = [98,110,101]
const Knicks2 = [108,92,110]

const average = (team) => {
    sum = 0
    for (let i=0;i<team.length;i++){
        sum += team[i]
    }
    return (sum/team.length)
}
nMean = average(Nets1)
kMean = average(Knicks1)

nMean2 = average(Nets2)
kMean2 = average(Knicks2)

const winner = (mean1, mean2) => {
    if (mean1 > mean2 && mean1 >= 100){
        console.log('Nets Win')
    }
    else if (mean2 > mean1 && mean2 >= 100){
        console.log('Knicks Win')
    }
    else if (mean1 === mean2 && mean1 === 100){
        console.log('Tie')
    }
    else {
        console.log('No winners')
    }
}

winner(nMean, kMean)
winner(nMean2, kMean2)




