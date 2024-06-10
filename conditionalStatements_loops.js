//Conditional Statements Loops
//Exercise 1: Temperature check

//Number 1
let temperature;
if (temperature < 0) {
    console.log("It's freezing!");
}

else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
}

else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
}

else if (temperature > 25) {
    console.log("It's warm.");
}

else {
    console.log("Invalid Temperature")
}

//Number2

let temperature1;

if (temperature1 === undefined || temperature1 === null) {
    console.log("Temperature is not defined.");
}

switch (true) {
    case (temperature1 < 0):
        console.log("It's freezing!");
        break;

    case (temperature1 >= 0 && temperature1 <= 15):
        console.log("It's cold.");
        break;

    case (temperature1 >= 16 && temperature1 <= 25):
        console.log("It's mild.");
        break;

    case (temperature1 > 25):
        console.log("It's warm.");
        break;

    default:
        console.log("Invalid temperature")


}


//Exercise 2: Divisibility Check

//Number 1

let number = 10;
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both");
}
else if (number % 2 === 0) {
    console.log("Divisible by 2");
}
else if (number % 3 === 0) {
    console.log("Divisible by 3");
}
else {
    console.log("Not divisible by 2 or 3.");

}

//Number 2
let number1 = 10;

if (number1 === undefined || number1 === null) {
    console.log("Invalid number");
}
else {
    switch (true) {
        case (number1 % 2 === 0 && number1 % 3 === 0):
            console.log("Divisible by both");
            break;
        case (number1 % 2 === 0):
            console.log("Divisible by 2");
            break;
        case (number1 % 3 === 0):
            console.log("Divisible by 3");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
    }
}

//Exercise 3: For loops
//Number1
for (let number = 1; number <= 10; number++) {
    console.log(number);
}

//Number 2

for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
    }
    console.log(number);

}


//number3
let sum = 0;
for (let number = 1; number <= 100; number++) {
    sum += number
}
console.log("The sum of numbers from 1 to 100 is:", sum);

//Number 4

const numbers = [1, 2, 3, 4, 5];

for (let index in numbers) {
    console.log(numbers[index]);
}

//Number5
const numbers1 = [3, 7, 2, 5, 10, 6];
let largest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] > largest) {
        largest = numbers1[i];
    }
}

console.log("The largest number is:", largest);

//Exercise 4: While loops

//Number1
let number2 = 1;
while (number2 <= 10) {
    console.log(number2);
    number2++;
}

//Number2
let number3 = 1;
while (number3 <= 20) {
    if (number3 % 2 === 0) {
        console.log(number3);
    }
    number3++;
}
 
//Number3
let number4 = 1;
let sum1 = 0;

while (number4 <= 100) {
    sum1 += number4;
    number4++;
}

console.log("The sum of numbers from 1 to 100 is:", sum1);

//Number4

let number5 = 1;

while (number5 * 5 < 50) {
    console.log(number5 * 5);
    number5++;
}


//Exercise 5: Do While loops

//Number1

let i=1;
do{
    console.log(i);
    i++;
}
while(i<=10);

//Number2

let number6=1;
let sum2=0;
do{
    sum2+=number6
    number6++;
}
while(number6<=100);
console.log("The sum is " + sum2);


//Number3
let number7;
do {
    number7 = prompt("Enter a number greater than 10");
} while (isNaN(number7) || number7 <= 10 )


//Number4

const correctNumber = Math.floor(Math.random() * 10) + 1;

let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== correctNumber);

console.log("Congratulations! You guessed the correct number.");
