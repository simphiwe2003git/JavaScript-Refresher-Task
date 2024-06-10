//Data Types Operators

//Exercise 1: Numbers

//Number1
let m=5; 

//Number2
let n=3.14

//Number3
let addition= m + n;
let substraction= m - n;
let multiplication= m * n;
let division= m / n;
let modulus= m % n;
let exponentiation= m ** n;

//Number4
console.log("addition: " + addition);
console.log("substraction: " + substraction)
console.log("multiplication: " + multiplication)
console.log("division: " + division)
console.log("modulus: " + modulus)
console.log("exponentiation: " + exponentiation)

//Exercise 2: Boolean and Operators

//number1
let num1 = 10;
let num2 = 5;
let greaterThan = num1 > num2; 
let lessThan = num1 < num2;    
let equalTo = num1 === num2;   
let notEqualTo = num1 !== num2; 

//number2
let x=8;
let y=12;

let isGreaterThan= x > y;
    console.log("x is greater to y: " + isGreaterThan);

let isLessThan= x <= y;
console.log("x is less or equal to y: " + isGreaterThan);


let isEqualTo= x===y;
console.log("x is equal to y: " +isEqualTo);

let isNotEqualTo= x!==y;
console.log("x is not equal to y: " + isNotEqualTo);

//number3
let a = true;
let b = false;

let resultAND = a && b;
let resultOR = a || b;
let resultNOTa = !a;

console.log("Result of a AND b:", resultAND); 
console.log("Result of a OR b:", resultOR);   
console.log("Result of NOT a:", resultNOTa);  

//NUMBER 4
let p = 10;

p += 5;  
console.log("p after += operation:", p);

p -= 3;  
console.log("p after -= operation:", p); 

p *= 2; 
console.log("p after *= operation:", p);

p /= 4;  
console.log("p after /= operation:", p); 


p %= 3;  
console.log("p after %= operation:", p); 
