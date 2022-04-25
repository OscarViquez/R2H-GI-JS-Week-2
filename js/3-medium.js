// I put all 12 Months in an Array
const monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December']

// I create a variable with Prompt that asks the user to input a number
let monthsPrompt = prompt('Pick a number from 1-12');

// This Variable takes the input from the prompt. Converts it from a string, to a Number using the Number().
// This Variable will be used to index the Array Instead of manually doing console.log(array[0]) & creating a bunch of IF ELSE STATEMENTS
let monthsPromptIndex = Number(monthsPrompt) - 1;

if(monthsPrompt <= 12) {
    alert(monthsArray[monthsPromptIndex]);
    // I'm Outputing the Month
} else {
    alert("Invalid Number!")
}