let anum: number = 10
let num2 = 30.01
1. //By using typeof operator we can find the type of variable
console.log("Number 1: " + typeof anum);
console.log("Number 2: " + typeof num2);
/*
Examples of String Types in TypeScript
String types can be defined using single quotes, double quotes, or backticks (template literals)
*/

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
/*
It looks like 'git' is not installed or not recognized in your system's PATH.

To resolve this:
1. Download and install Git from: https://git-scm.com/downloads
2. After installation, restart your terminal or command prompt.
3. Verify installation by running: git --version

Once Git is installed, you can follow the previous steps to set up your repository and push your code to GitHub.
*/
