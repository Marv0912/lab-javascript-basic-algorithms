// Iteration 1: Names and Input
//1.1
const hacker1 = "Marvin"
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
const hacker2 = "Edgardo";
//1.4
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
//3.1
fixed_hacker1 = hacker1.toUpperCase().split('').join(' ');
console.log(fixed_hacker1);
