const tom = {
    height: 9,
    mass: 8
}
const jerry = {
    height: 10,
    mass: 45
}
const tomHigherThanJerry = calcBMI(tom) > calcBMI(jerry);
const JerryHigherThanTom = calcBMI(jerry) > calcBMI(tom);

function calcBMI(person) {
    return person.mass / person.height ** 2;
}
console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherThanJerry}`);
console.log(`Is Tom's BMI higher than Jerry's? ${JerryHigherThanTom}`);



