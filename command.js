//take out argumnts {location of nodeJS, path of program }
const arguments = process.argv.slice(2);

//reduce() takes the first value as the accumulator
//the rest will go through as current value one by one (like in a loop)

//this is written as this object such that we add current to the acc instead of subtracting
//const sum = arguments.reduce((acc,curr) => acc + curr);

//
const sum = arguments.reduce((acc,curr) => acc + parseInt(curr), 0);
console.log(sum);