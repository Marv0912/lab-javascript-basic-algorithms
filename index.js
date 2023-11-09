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

//Bonus
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna lectus, consequat ac elementum sed, commodo ac eros. Pellentesque blandit id velit eu volutpat. Vivamus nulla mi, cursus vel feugiat at, facilisis et metus. Cras eu eros a velit ornare varius a a neque. Maecenas aliquet, neque vel molestie vehicula, odio turpis facilisis metus, eget vestibulum quam risus eu lectus. Curabitur laoreet congue turpis et sagittis. Fusce a aliquet lacus. Curabitur id eros consectetur, posuere elit mattis, volutpat diam. Praesent vitae urna eu mauris consectetur rutrum. Proin luctus vitae velit ut semper. Aliquam consectetur orci vitae nibh sagittis commodo. Pellentesque sit amet ante fringilla, efficitur quam nec, placerat tortor. Etiam ligula mauris, hendrerit non consectetur vitae, mollis eget est. Mauris elementum, nulla eget tempor malesuada, sapien massa blandit tellus, a eleifend arcu diam quis nisl. Praesent sem nunc, auctor vitae tempor vel, aliquam ac neque. Vestibulum imperdiet odio sem, venenatis dapibus libero tempor vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis lectus vitae tristique mollis. Sed eu porta metus, nec egestas ipsum. Curabitur mattis, metus eu consequat interdum, est metus pulvinar mi, quis faucibus augue augue sed enim. Donec sollicitudin sollicitudin eros id consequat. Etiam eget ipsum vitae augue dapibus finibus. Vestibulum lacus lectus, facilisis id libero maximus, pharetra tempor orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean tortor elit, semper a tincidunt nec, feugiat a augue. Pellentesque scelerisque neque tortor. Etiam hendrerit elit a dolor accumsan auctor. Vivamus cursus viverra dui sit amet pharetra. Duis a lacus ultricies, vehicula enim a, sollicitudin sapien. Ut posuere est ex, vitae fringilla diam consequat sit amet. Nullam pellentesque dictum dolor, non interdum tortor convallis id. Donec scelerisque ac nisi nec sodales. Maecenas aliquet libero eget accumsan dictum. Nulla facilisi. Cras venenatis congue ornare. Aenean auctor, quam quis malesuada faucibus, libero odio elementum tellus, ut viverra tortor velit sed mauris."

// BONUS 1
const countWords = (longText) => {
    const words = longText.split(/[\s,.!?;:()]+/)
    return words.length;
}

const countEt = (text) => {
    // Regular expression to find all 'et' in string
    let etMatch = text.match(/\bet\b/gi);
    return etMatch ? etMatch.length : 0;
}

console.log(countWords(longText));

//BONUS 2

