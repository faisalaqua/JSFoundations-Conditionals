const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);
const num1 = parseInt(prompt("Enter your first number"))
const num2 = parseInt(prompt("Enter your second number"))
const ops = prompt("choose between +, -, /, *")

console.log(num1)
console.log(num2)
console.log(ops)

if(ops === "+"){
console.log(`${num1} ${ops} ${num2} = ${num1 + num2}`)
} else if(ops === "-") {
    console.log(`${num1} ${ops} ${num2} = ${num1 - num2}`)
} else if(ops === "*") {
    console.log(`${num1} ${ops} ${num2} = ${num1 * num2}`)
} else if(ops === "/") {
    console.log(`${num1} ${ops} ${num2} = ${num1 / num2}`)
} else {
    console.log("invalid operation")
}
