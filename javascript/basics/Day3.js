/*

    String methods

*/
const notes1= `
    Methods:
    length          returns string length
					${
						console.log("Four".length) // epected: 4
					}
    charAt()        returns character at index
					${
						console.log("Text".charAt(3)) // expected: t
					}
    charCodeAt()    returns UTF-16 code (decimal) of character at index
					if no char at specified index, returns empty string ""
					${
						console.log("Text".charCodeAt(3)) // expected: 116
					}
    at()			returns character at index
					allows negative indexes for counting from the end
					${
						console.log("Elephant".at(2)) // expected: e
					}
					${
						console.log("Elephant".at(-2)) // expected: n
					}
    []				simlar to previous ones
					HOWEVER, returns undefined if empty position
					also makes strings look like arrays
					cannot modify string using [], it may not give error but it does not work
					${
						console.log("Long string"[1]) // expected: 0
					}
					${
						console.log("Long string"[20]) // expected: undefined 
					}
    slice()			extract part of a string, e.g. from index 1(including)-7(excluding)
					two parameters for specific range
					if one parameter, it will be sliced until the end
					negative values start from the end of the string
					if only one negative parameter, it will still splice to the end of the string (to the right)
					${
						console.log("Very long string".slice(5,9)) // expected: long
					}
					${
						console.log("Very long string".slice(5)) // expected: long string
					}
					${
						console.log("Very long string".slice(-11,-7)) // expected: long
					}
					${
						console.log("Very long string".slice(-6)) // expected: string
					}
    substring()		similar to slice but negative values are treated as 0
					${
						console.log("Substring substring".substring(-5)) // expected: Substring substring
					}
					${
						console.log("Substring substring".substring(10)) // expected: substring
					}
    substr()		similar to slice but second parameter specifies length of extracted part (not end index of entire string)
	!deprecated		negative values accepted 
					${
						console.log("Substring substring".substr(-9,9)) // expected: substring
					}
    toUpperCase()   returns upper case of string
    toLowerCase()	returns lower case of string
    concat()		combines two or more strings
					${
						console.log("Hello".concat(" ", "World")) // minimum one parameter
					}
    trim()			removes whitespace from both ends of string
					${
						console.log("   WHITE SPACE?   ".trim())
					}
    trimStart()		removes whitespace only from front
					${
						console.log("   WHITE SPACE?   ".trimStart())
					}
    trimEnd()		removes whitespace only from end
					${
						console.log("   WHITE SPACE?   ".trimEnd())
					}
    padStart()		pad string at the start UNTIL given string length achieved (two parameters)
					${
						console.log("1".padStart(3,"0")) // expected: 001
					}
    padEnd()		pad string at the end UNTIL given string length achieved (two parameters)
					numbers can be padded but they must be converted to string first
					${
						console.log("1".padEnd(3,"x")) // expected: 1xx
					}
    repeat()		returns a string with the repeat count given
					${
						console.log("Hello ".repeat(5)) // expected: Hello Hello Hello Hello Hello 
					}
    replace()		replaces a value in the string with another string, both specified
	   				replaces only the first match
					can use regular expression with the tag /g to replace all,
					or tag /i to replace without case sensitivity
					${
						console.log("Bye World".replace("Bye", "Hello")) // expected: Hello World
					}
					${
						console.log("Hello world".replace(/HELLO/i, "Bye bye")) // expected Bye bye world
					}
					${
						console.log("Bye Bye world".replace(/Bye/g, "Hello")) // expected: Hello Hello world
					}
    replaceAll()	replace all, can also use regular expressions but must include /g tag
					${
						console.log("Bye Bye world".replaceAll("Bye", "Hello")) // expected: Hello Hello world
					}
	split()			returns an array with values that are seperated by a specified character
					using "" as seperator will return individual characters
					${
						console.log("Apple".split("")) // expected: ["A","p","p","l","e"]
					}
					${
						console.log("Apple Potato Banana Tomato".split(" ")) // expected: ["Apple", "Potato", "Banana", "Tomato"]
					}
`


/*

	String Search

*/
const notes2 = `
	Search methods:
	indexOf()		index of FIRST occurance of string entered. -1 if not found
		${
			console.log("The rain in SPAIN stays mainly in the plain".indexOf("ain")) // expected: 5
		}
		${
			console.log("The rain in SPAIN stays mainly in the plain".indexOf("ain",10)) // expected: 25
		}
	lastIndexOf()	index of LAST occurance of string entered. -1 if not found
		${
			console.log("The rain in SPAIN stays mainly in the plain".lastIndexOf("ain")) // expected: 40
		}
	search()		similar to indexOf(), BUT allows REGEX. Cannot use second start position argument
		${
			console.log("The rain in SPAIN stays mainly in the plain".search(/ain/i)) // expected: 12
		}
	match()			return array if matches
		${
			console.log("The rain in SPAIN stays mainly in the plain".match("ain"))  // expected: {ain}
		}
	matchAll()		returns iterator containing results. parameter can be string or regex
		${
			console.log(Array.from("The rain in SPAIN stays mainly in the plain".matchAll(/ain/gi))) // expected: {ain, AIN, ain, ain}
		}
	includes()		returns true if string contains specified value
		${
			console.log("The rain in SPAIN stays mainly in the plain".includes("main"))
		}
	startsWith()	returns true if string starts with specified value
		${
			console.log("The rain in SPAIN stays mainly in the plain".startsWith("he"))
		}
	endsWith()		returns true if string ends with specified value
		${
			console.log("The rain in SPAIN stays mainly in the plain".endsWith("lain"))
		}
`


/*

	Backticks

*/

// more was to use different quotes in strings
const str1 = `He's often called "Johnny"`;

`Multi
Line
Strings`;

console.log(`Hello ${3 > 1} World`);


/*

	Numbers

*/

10312 // can be written as whole
10.95 // can be written with decimals
123e5 > 123e-5 // can be written with exponent notation

// integers are accurate only up to 15 digits
999999999999999; // will be  999999999999999
9999999999999999; // will be 10000000000000000

// floating point arithmatic also not accurate
console.log(0.1 + 0.2) // output: 0.30000000000000004
// to solve this, multiply and divide instead
console.log((0.2 * 10 + 0.1 * 10) / 10) // expected: 0.3

// misconceptions with concantenation
console.log("Results:" + 10 + 30); // does NOT work: Results:1030hh
console.log("100" / "10"); // works: 10
console.log("100" * "10"); // works: 1000
console.log("100" - "10"); // works: 90
console.log("100" + "10"); // does NOT work: 10010

// NaN: Not a Number
// happens when arithmetic done on number and non number
100 / "Apple" // output: NaN
typeof NaN // number

// watch out for NaN when concatenating
NaN + " " + "World" // output: NaN World

// Infinity or -Infinity
typeof Infinity // number

// infinity happens when operation results more than the biggest number...
1e200 * 1e200 // Infinity
// or number is divided by 0
12 / 0 // Infinity

// Hexadecimals
let hex = 0xFF

// NEVER write numbers with leading zeros
07 // some version of JS inteprets numbers with leading 0s as octal (base 8)

// like strings, numbers have their Object counterparts
let numObj = new Number(10);
// avoid this as it complicates things and runs slower
10 == Number(10) // true
10 === Number(10) // false
Number(10) === Number(10)

/*

	BigInt

*/

// append 'n' to end of numbers to use bigInt...
9999999999999999n; // output: bigint
// or use BigInt(x)
let x = BigInt(999999999999999);

typeof x // output: bigint

// operators used on numbers can also be used on bigints
// arithmetic cannot be done between BigInt and Number due to type conversion (may loose information)
/// unsigned right shift (>>>) cannot be dont on bigint as it has no fixed width

// bigints CANNOT have decimals
console.log(5n/2n); // output: 2n

// writing bigints in other notations
let hexL = 0x2003n;
let octL = 0o2003n;
let binL = 0b1001n;

// Number's MAX_SAFE_INTEGER and MIN_SAFE_INTEGER properties
console.log("Max safe number", Number.MAX_SAFE_INTEGER);
console.log("Min safe number", Number.MIN_SAFE_INTEGER);

// Number.isSafeInteger
// checks if integer can be represented as double precision number
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(9007199254740992));

/*

	Number methods

*/

`
	Methods:
	toString()			returns string from number
		${
			console.log(typeof toString(10))
		}
	toExponential()		returns string with rounded number and exponential
		${
			console.log(9.123.toExponential(2))
		}
	toFixed()			returns a string of the number with fixed decimal points
		${
			console.log(99.3123.toFixed(3))
		}
	toPrecision()		returns a string of the number with fixed length
		${
			console.log(99.3123.toPrecision(3))
		}
	valueOf()			used internally to return number from Number objects, not used in personal code 
		${
			console.log((123).valueOf())	
		}
	parseInt()			parses strings into numbers. uses first number
	parseFloat()		parses strings into numbers. uses first number
	Number()			convert different variables into numbers
		${ // print current milliseconds (since 1970-1-1)
			console.log(Number(new Date()))
		}
		${
			console.log(Number(true)) // 1
		}
		${
			console.log(Number("10")) // 10
		}
		${
			console.log(Number("10.2")) // 10.2
		}
		${
			console.log(Number("John")) // NaN
		}
`
/*

	JavaScript Numbers

*/

const notes3 = `
	EPSILON				Difference between 1 and smallest num > 1
		${ console.log(Number.EPSILON) } output: 2.220446049250313e-16
	MAX_VALUE			
		${ console.log(Number.MAX_VALUE) } output: 1.7976931348623157e+308
	MIN_VALUE			
		${ console.log(Number.MIN_VALUE) } output: 5e-324
	MAX_SAFE_INTEGER	
		${ console.log(Number.MAX_SAFE_INTEGER) } output: 9007199254740991
	MIN_SAFE_INTEGER	
		${ console.log(Number.MIN_SAFE_INTEGER) } output: -9007199254740991
	POSITIVE_INFINITY	
		${ console.log(Number.POSITIVE_INFINITY) } output: Infinity
	NEGATIVE_INFINITY	
		${ console.log(Number.NEGATIVE_INFINITY) } output: -Infinity
	NaN					
		${ console.log(Number.NaN) } output: NaN
`


/*

	Arrays

*/

// Array literal
const cars = ["Saab", "Volvo", "BMW"] // usually declared with const

// declared across multiple lines
const cars1 = [
	"Saab",
	"Volvo",
	"BMW"
];

// define empty array first and add details later
const cars2 = [];

cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";

// arrays can also be initialized using new keyword
const cars3 = new Array("Saab", "Volvo", "BMW");

// access array elements
console.log(cars3[0]); // output: "Saab"

// create array element
cars3[0] = "Opel";

// Array toString() function
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // converts array to string and prints it

// display the array itself
console.log(fruits);

// javascript arrays are technically objects, but are always refered to as Arrays
typeof fruits; // output: object
// the difference of objects from arrays is that:
// objects: use names to access its members
// arrays: use numbers to access its elements

let person1;
person1 = { name: "John", age: "40" }; // access by x.name
person1 = ["John", 40]; // access by x[0]

// arrays can house objects, arrays and even functions!

const arr1 = [
	"John",
	new Date(),
	function hey() {
		console.log("Hello");
	}
]

// sorting array
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.sort(); // modifies the original array
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// .length
fruits.length; // output: 4

console.log(fruits[-1]); // output: undefined, cannot use -1 to access last element
console.log(fruits[fruits.length - 1]) // output: Orange, correct way to access last element

// looping through function
// can use for loops, but arrays also have forEach

fruits.forEach(printFirstParam); // leave out parenthesis
// forEach outputs 3 parameters

function printFirstParam(x) {
	console.log(x);
}

// adding array elements
// .push
fruits.push("Lemon") // adds Lemon to the end of the array (index 4)

// using .length
fruits[fruits.length] = "Lemon" // also adds Lemon to the end

// WARNING: adding elements with gaps can cause unwanted behaviour
fruits[6] = "Durian" // Result: [ 'Apple', 'Banana', 'Mango', 'Orange', 'Lemon', 'Undefined', 'Durian' ]

// WARNING
// never used named indexes (e.g. person["firstName"] instead of person[0])
// as it will cause the array to be redifined into a object, which will
// cause unwanted behaviour with its methods and properties

// Array vs Object
// 	arrays use numbered indexes
// 	objects use named indexes
// These should help you decide which datatype to use

// using the new keyword can cause unexpected results
	[40, 10] // result: [40, 10]
	new Array(40,10) // result: [40, 10]

	[40] // result: [40]
	new Array(40) // result: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
// if an integer is passed in to creat an array with the new keyword
// an array will be created with that amount of undefined elements.

// how to check for arrays?
// method #1
Array.isArray(fruits); // output: true
// method #2
(fruits instanceof Array); // output: true

// arrays and objects can be nested in each other
