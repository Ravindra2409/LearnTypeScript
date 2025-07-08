/*let anum: number = 10
let num2 = 30.01
1. //By using typeof operator we can find the type of variable
console.log("Number 1: " + typeof anum);
console.log("Number 2: " + typeof num2);
/*
Examples of String Types in TypeScript
String types can be defined using single quotes, double quotes, or backticks (template literals)
*/
/*
let str1: string = "Hello, TypeScript!";
let str2 = 'Single quotes also work';
let str3: string = `Template literals allow embedding variables: ${anum}`;

console.log("String 1: " + typeof str1);
console.log("String 2: " + typeof str2);
console.log("String 3: " +  str3);
// Examples of Boolean Types in TypeScript
let isActive: boolean = true;
let isComplete = false;

console.log("Boolean 1: " + typeof isActive);
console.log("Boolean 2: " + typeof isComplete);
// Examples of null, undefined, and any types in TypeScript

// null example
let emptyValue: null = null;
console.log("Null value:", emptyValue, "| Type:", typeof emptyValue);

// undefined example
let notAssigned: undefined;
console.log("Undefined value:", notAssigned, "| Type:", typeof notAssigned);

// any example
let flexible: any = 42;
console.log("Any value (number):", flexible, "| Type:", typeof flexible);
flexible = "Now I'm a string";
console.log("Any value (string):", flexible, "| Type:", typeof flexible);
flexible = { key: "value" };
console.log("Any value (object):", flexible, "| Type:", typeof flexible);
// Example of Union Types in TypeScript
let unionVar: number | string;

unionVar = 100;
console.log("Union value (number):", unionVar, "| Type:", typeof unionVar);

unionVar = "This can also be a string";
console.log("Union value (string):", unionVar, "| Type:", typeof unionVar);

// Union type in function parameter
function printId(id: number | string) {
    console.log("ID:", id, "| Type:", typeof id);
}

printId(12345);
printId("abc123");
*/
let c=10
console.log("c: " + ++c);
// Arithmetic Operators
let a = 10;
let b = 3;
console.log("Addition (a + b):", a + b);           // 13
console.log("Subtraction (a - b):", a - b);        // 7
console.log("Multiplication (a * b):", a * b);     // 30
console.log("Division (a / b):", a / b);           // 3.333...
console.log("Modulus (a % b):", a % b);            // 1
console.log("Exponentiation (a ** b):", a ** b);   // 1000

// Assignment Operators
let c1 = 5;
c1 += 2; // c1 = c1 + 2
console.log("After += :", c1);                     // 7
c1 -= 1; // c1 = c1 - 1
console.log("After -= :", c1);                     // 6

// Comparison Operators
let x = 5;
let y = '5';
console.log("x == y:", x == y);                    // true (type coercion)
console.log("x === y:", x === y);                  // false (strict equality)
console.log("x != y:", x != y);                    // false
console.log("x !== y:", x !== y);                  // true
console.log("x > 3:", x > 3);                      // true
console.log("x < 3:", x < 3);                      // false
console.log("x >= 5:", x >= 5);                    // true
console.log("x <= 4:", x <= 4);                    // false

// Logical Operators
let isLoggedIn = true;
let isAdmin = false;
console.log("AND (isLoggedIn && isAdmin):", isLoggedIn && isAdmin); // false
console.log("OR (isLoggedIn || isAdmin):", isLoggedIn || isAdmin);  // true
console.log("NOT (!isAdmin):", !isAdmin);                           // true

// Bitwise Operators
let bitA = 2; // 10 in binary
let bitB = 3; // 11 in binary
console.log("Bitwise AND (bitA & bitB):", bitA & bitB); // 2
console.log("Bitwise OR (bitA | bitB):", bitA | bitB);  // 3
console.log("Bitwise XOR (bitA ^ bitB):", bitA ^ bitB); // 1
console.log("Bitwise NOT (~bitA):", ~bitA);             // -3
console.log("Left Shift (bitA << 1):", bitA << 1);      // 4
console.log("Right Shift (bitB >> 1):", bitB >> 1);     // 1

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);                      // Yes

// Typeof Operator
let value = "Hello";
console.log("Type of value:", typeof value);             // string

// Instanceof Operator
class Person {}
let p = new Person();
console.log("p instanceof Person:", p instanceof Person); // true