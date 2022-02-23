// let i=0;

// const colors = ['red', 'green', 'blue','orange']
// const fruits = ['apple', 'orange', 'pear']

// const comparer = (colors,fruits) => {
// if (fruits.length >= colors.length){
//     return (`List containing ${fruits} is longer`)
// }
// else{
//     return (`List containing ${colors} is longer`)
// }
// }

// const combiner = (colors,fruits) => {
// for (let i=0; i<colors.length;i++){
//     for (let j=0; j<fruits.length;j++){
//         console.log(colors[i],fruits[j])
//     }
// }
// }

// console.log(combiner(colors,fruits),comparer(colors,fruits))

// let johnWeight = 130
// let johnHeight = 64
// let johnMass = 50
// let steveWeight = 130
// let steveHeight = 150
// let steveMass = 50

const BMI = (height,weight) => {
    return Number(weight/(height*height))*703}
    
let myWeight = prompt("Enter Weight")
let myHeight = prompt("Enter Height in inches")


if ((BMI(myHeight,myWeight)) <20){
    console.log('Really skinny',BMI(myHeight,myWeight))
    alert(('Really skinny',BMI(myHeight,myWeight)))
}
else if((BMI(myHeight,myWeight)) >= 20){
    console.log('Skinny or fat, too lazy',BMI(myHeight,myWeight))
}
else{
    alert('Invalid input')
}


