/*

	Statements

*/

// declare multiple variables at once
let a, b, c = 10; // considered 1 statement, even though multiple variables assigned

// semicolons to end statements, allows multiple statements in one line
a = 1; b = 2; c = 3;

// blocks are code incased in curly brackets
{
	console.log("Block of code");
}

// var vs let vs const
var a1 = 0 // variable (without block scope)
let b1 = 0 // variable (with block scope)
const c1 = 0 // constant (with block scope)
// block scope varibles cannot be accessed outside the block

/*

	Syntax

*/

// writing numbers and strings
let str1, str2, num1, num2;
str1 = "Hello";
str2 = 'Hello';
num1 = 10;
num2 = 10.1;

// declaring variables and assigning values
let x1; // declare
x1 = 1; // assign

// Operators
/*
	+ - x /     arithmatic operators
	=           assignment operator
*/

// Expressions
// > combination of variables, values, operators
5 * 10
x1 * 5
"John" + " " + "Doe" // expressions can contain strings 

// Keywords
// let, var - create variables
let x2; var y2;

// Identifiers
// used for naming variables, functions, keywords
/*
	must start with:
		letters (A-Z/a-z)
		dollar sign ($)
		underscore(_)

	only subsequent letters allow numbers
*/

// Case sensitivity
// variables with different case are different variables
let abc; let ABC;
// Let or LET will not be recognised as keyword let

// camel case (JavaScript standard)
let firstName; let lastName;
// pascal case
let FirstName; let LastName;
// snake case
let first_name; let last_name;

// JavaScript's character set: Unicode
// can use most characters and all punctuations, symbols

/*
Comments
*/

// single line
/*
	multi-line
*/

/*

	Variables

*/

// var (legacy) - should only be used for legacy applications
// let, const (modern)
// automatically (dont use var/let/const keyword) - NOT RECOMMENDED

// variables can be left undefined
// usually for values that will calculated or provided later
let input; let carName;

// vars can be redefined and it wont loose its initial value
var x3 = 10;
var x3;
// let/const can't be redeclared

// using underscores and dollar signs in JS Identifiers is very uncommon
let _;
function $() {}

/*

	Let

*/
// before 2015 ES6, there was only function and global scope
// let and const brought in block scope
// var always has global scope, no block scope

/*

	Const

*/

// JS consts are not constant values but reference to a value
// the value's properties can be modified, such as array items or object properties
const person1 = {name: "James", age: 40};
person1.name = "John";

/*

	Operators

*/

/*  
    Arithmatic Operators
    +   Addition
    -   Subtraction
    *   Multiplication
    **  Exponentiation [Can also use Math.pow(x,y)]
    /   Division
    %   Modulus
    ++  Increment
    --  Decrement

    Assignment Operators
    =
    +=
		can concatenate strings and numbers. adding numbers to strings will always result in string. adding numbers to numbers will results in a summation
    -=
    *=
    /=
    %=
    **=

    Comparison Operators
    ==	Same value 
    === Same value and data type
		^ when using '==':
			1 and true are equal
			100 and '100' are equal
	!=	Not same
	!==	Not same value or type
	>
	<
	>=
	<=
		// string comparison
		"A" < "B" // true (compared alphabetically, A is smaller than B)
	?	ternary operator

	//ternary
	true == 1 ? console.log("True") : console.log("False");

	Logical Operators
	&&	logical	AND 
	||	logical OR
	!	logical	NOT 

	Bitwise Operators - for use on integers (always demical)
	&	AND
	|	OR
	~	NOT
	^	XOR
	<<	left shift
	>>	right shift
	>>>	unsigned right shift
*/

// type operators
console.log(typeof true); // returns object type: boolean
const object = new Object;
console.log(object instanceof Object); // returns true if object is instance of object type: true


/*

	Datatypes

*/

// 8 data types
/*
	String
	Number (double)
	Bigint
	Boolean
	Undefined
	Null
	Symbol
	Object		[non-primative]
*/

// javascript has dynamic datatypes
let x = 1 	// int
x = "1"		// string
x = true	// boolean

// numbers can use exponential notations
let y = 123e5
console.log(y) // expected: 12300000

// undefined type
let bike; // type: undefined
bike = undefined; // can unset variables by assigning undefined

// empty value
bike = "" // empty value, type: string


/*

	Functions

*/
// declare functions
function func1(/* parameters */) {
	// variables - are local to this function. cannot be used outside
	// statements

	return /* return variable optional */ 0;
}


/*

	Objects

*/
// stores properties (values), methods (functions)

// object literal:
const car = {type: "Volkswagen", model: "Beatle", color: "White"} // 4 properties

// create new object
const person = new Object();

// assign name variable to 'John'
// method 1
person.name = "John";
console.log(person.name); // output: John

// method 2
person["age"] = 42
console.log(person.age); // output: 42

// methods are function definitions stored as property values
// create new object function to return name and age at the same time
person.nameAge = function() { return this.name + " " + this.age }
console.log(person.nameAge());

/*

	Object Properties

*/
// accessing properties
// three different ways:
person.name; // #1
person["name"]; // #2
person[p]; // #3 
var p = "name";

// delete properties
delete person.name;
console.log(person.name);

person.name = "James";

// nested objects
const person2 = {
	name: "Wilson",
	age: 20,
	children: {
		c1: "Ana",
		c2: "James",
	}
}

// access nested object's properties
console.log(person2.children.c1, person2.children.c2);

/*

	Object methods

*/

// calling functions with and without ()
console.log(person.nameAge());
console.log(person.nameAge);
// document.getElementById("h1").innerHTML = person.nameAge;

// built in function
console.log(person.nameAge().toUpperCase());


/*

	Object Display

*/

// example object
const person3 = {
	name: "James",
	age: 40,
	cars: {
		car1: "Ford",
		car2: "BMW",
		car3: "Mazda"
	}
}

// for loops
for (let x in person3) {
	console.log(x);
	
}

// Object.values()
const p3Arr = Object.values(person3);

// Object.entries()
for (let [key, value] of Object.entries(person3)) {
	console.log(key,value);
}

// JSON.stringify()
JSON.stringify(person3);


/*

	Object Constructors

*/

// constructor function
function Person(fname, lname, age, eyeColor) {
	//properties
	this.fname = fname,
	this.lname = lname,
	this.age = age,
	this.eyeColor = eyeColor

	// function
	this.fullName = function() { 
		return this.fname + this.lname;
	}
}

// create multiple person objects
const mom = new Person("Jane", "Doe", 40, "Brown")
const dad = new Person("John", "Doe", 39, "Black")
const son = new Person("Dane", "Doe", 12, "Brown")

// add properties to objects
mom.height = 160;

// add functions to objects
mom.allinfo = function() {
	return this.fname + this.lname + this.age + this.eyeColor;
}

// add properties to constructors
Person.prototype.height = 0;

// add functions to constructors
Person.prototype.allinfo = function() {
	return this.fname + this.lname + this.age + this.eyeColor;
}

/*
	Built in JavaScript Constructors
	Object()
	Array()
	Map()
	Set()
	Date()
	RegExp()
	Function()

	Why Math() not constructor? It is a global object.
	The new keyword cannot be used. 
*/

/*
	Literals
		{} for Object
		[] for Array
		/()/ for RegExp
		() {} for Function
*/

/*

	Events

*/

// example events: onclick, onmouseover, onchange, onmouseout, onkeydown, onload

/* usage in HTML
	<element event=' ...javascript code... ' /> 

	example:
		<button onclick="handleClick()">Click me</button>

*/

/*

	Strings

*/

// using quotes
'Single quotes'
"Double quotes"

// template strings
let backticks = `backticks`

// .length property 
let str = "abcde"
str.length // expected output: 5

// escape characters
// useful when using double quotes/strings/backslashes in strings

// e.g
// wrong: "String "quote" String"
"String \"quote\" String" // correct
"This is a backslash: \\" // output: This is a backslash: \

// breaking text
// method 1: after operator
// e.g. after '='
let str4 = 
"Hello world";
// e.g. using '+'
str4 = "Hello" + 
"world";

// method 2: backticks
str4 = `Hello
world!`;

// string objects # NOT RECOMMENDED TO BE USEDD
let str3 = new String("Hello")

// string objects can complicate code and slow down execution
// also the following issue
"Hello" == new String("Hello") // True
"Hello" === new String("Hello") // FALSE

let str5 = new String("Hello");
let str6 = new String("Hello");
str5 == str6; // FALSE
// comparing objects in JS always return false
