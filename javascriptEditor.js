/*
* First excerices to learn javaScript..
 */


// Try edit message
const data = {
  message: 'Hello world',
}

$('#msg').html(data.message)

console.log(data)

for (var x = 0; x<10; x++){
  console.log(x);
}
console.log(50>6)
const q = "best vars"
var h = "hello"
console.log(6+9,h+q)

// JavaScript. It’s called implicit type coercion
console.log("h"+58*9)  // implicit type coercion makes the integer into a string data type

// look at http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#wrapper-objects



// thanks to udacity and Zeill
const sampleText = "Learning Udacity Learning course"
console.log(sampleText[0])
sampleText[3];

var name = "James";
// alert(sampleText);

// ESCAPE a special character with back slash
const units = '\u03bcs'; // 'μs'
console.log("Simbolo de nano unidades: " + units)

const longString = "to have quotes \"inside strings must escape\" character"
console.log(longString)

const newLine = "Up up down down"
const editnewLine = "Up up\n\t\t\t\t\t\tdown down"
console.log( newLine + editnewLine)

//  comparator boolean
console.log("green" > "blue")
