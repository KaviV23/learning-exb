/*

    Loops

*/
    /*
    Types
    for         loops through block of code n amount of times
        */
            for (let i = 0 /* executed once before loop starts */; 
                i < 5 /* condition for the loop to run */; 
                i++ /* executed after every loop*/
            ) { /* code block */ }

            // expression 1 can be ommited
            let i = 0;
            for (; i < 5; i++) {}

            // can have multiple values in expression 1
            for (let x = 0, i = 1; x < 5; x++) {}

            // expression 2 can also be ommited
            // however there should be breaks in the code to prevent a infinite loop
            // the loop executes again if only expression 2 is true

            // expression 3 can also be ommited if (e.g. increments) already handled in code
            for (; i < 5; ) {
                i++
            }

            // usage of var and let in for-loop expressions
            // variables initialized using let in for-loops will have block/function/loop scope
            // variables intialized with var will be visible outside of the loop
        /*
    for/in      loops through the properties of an object
        */
            let obj = {fname: "John", lname: "Doe", age: 40};
            let arr = ["John", "Doe", 40];

            // for/in loop: objects
            console.log("Object for/in-loop");
            for(let x in obj) {
                console.log(x + ":\t", obj[x]);
            }
            
            // for/in loop: arrays
            console.log("Array for/in-loop");
            for(let x in arr) {
                console.log(x  + ":\t", arr[x]);
            }
        /*
    for/of      loops through the values of an iterable object
        */
            // objects not allowed

            // for/of loop: arrays
            console.log("Array for/of-loop");
            for(let x of arr) {
                console.log(x);
            }

            // for/of loop: string
            console.log("String for/of-loop");
            for(let x of "ABDCEFG") {
                console.log(x);
            }
        /*
    while       loops through a block of code while a specified condition is true
        */
            i = 0;
            while (i < 5 /* condition */) {
                // code

                i++; // must increment or will cause infinite loop
            }
        /*
    do/while    also for looping through a block of code while a specified condition is true
        */
            i = 0;
            do {
                // code

                i++; // must increment or will cause infinite loop
            } while (i < 5 /* condition */)

            // while loops will always execute on the first run whether
            // or not the condition is true or false as the check is done after
            // the loop
        /*
    */

/*

    Breaks

*/
    /*
        break       breaks out of the loop
        continue    breaks one iterration, loop will continue to run if condition true
    */

    // weird use case: breaking out of code blocks
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let text;

    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        break list; // can break of of labelled code blocks. must specify label
        text += cars[2] + "<br>";
        text += cars[3] + "<br>";
    } 


/*

    Iterables

*/
    // Can be iterrated over using for of loops
    // Types of iterrables: Arrays, Strings, Sets, Maps

    // iterating over strings/arrays
    for (const x of "ABCDEFG") {
        // code
    }
    
    // iterating over sets
    const letters = new Set(["a","b","c"]);

    for (const x of letters) {
        // console.log(x);
    }

    // iierating over maps
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);
    
    for (const x of fruits) {
        // console.log(x);
    }


    /*
    iterators are objects that implement the .next() method
    next() returns an object with two properties:
        value   next value
                value returned by iterator

        done	true/false
				true if iterator completed, false if iterator produces new value
    */

/*

	Sets

*/

// creating sets
let set;
// method 1
set = new Set([1, 2, 2]); // passing an array

// method 2
set = new Set(); // create empty array and use .add() to add elements

set.add(1);
set.add(2);
set.add(3);

// sets cannot have multiple elements of the same value
set.add(1);
set.add(1);
set.add(1);
// these statements will be ignored

// sets can be iterated through with for-of loop
for (let x of set) { /* code */ }

typeof set; // Object
set instanceof Set; // true


/*

	Set Methods

*/
	/*
	Methods:
	add()		add elements, existing elements will be ignored
	has()		returns true/false depending if the specified value exists in the set
		*/
		set.has(2); // true
		/*
	forEach()	invokes function for each value in the set (callback function?)
		*/
		let text1 = ""
		set.forEach(function inline(value) {
			text1 += value;
		});
		console.log(text1);
		/*
	values()	returns iterator object with values of the set
	keys()		same as values(), sets don't have keys. makes sets compatible with maps
	entries()	returns [value.value] pair as sets don't have keys. makes it compatible with maps
		*/
		console.log("set entries:")
		let setEntries = set.entries();
		for (let x of setEntries) {
			console.log(x);
		}
		console.log("^ Set entries (key/value pair) will be same as sets don't have keys.");
		/*
	*/


/*

	Maps

*/

// maps hold key value pairs
// values can be any datatype

// create maps
let map;
map = new Map([["apple",1],["bananas",3],["orange",5]]); // method #1: pass in array
console.log(map);

map = new Map(); // method #2: create empty array and add with .set
map.set("apple", 500);
map.set("banana", 300);
map.set("orange", 200);
console.log(map);

// get values by key
map.get("apple") // output: 500

// maps are objects
typeof map; // Object
map instanceof Map; // true

// difference between objects and maps
	/*
	Object						Maps
	Not directly iterable		Directly iterable
	No size property			Size Property
	Keys not well ordered		Keys ordered by insertion
	No default keys				Has default keys
	*/


/*

	Map methods

*/
	/*
	Methods (and property):
	get()		returns value for specified key
	set()		add/update key and value to map
		*/
		map.set("apple", 500); // new key "apple", value 500
		map.set("apple"); // new key "apple", value Undefined
		/*
	size		return size of map (number of elements in map)
		*/
		map.size // 3  ( map: { 'apple' => 500, 'banana' => 300, 'orange' => 200 } )
		/*
	delete()	delete value from map with specified key
		*/
		map.delete("apple");
		console.log(map); // deletes apple key and value
		/*
	clear()		clear all elemenets from map
		*/
		map.clear();
		console.log(map); // {} empty map
		/*
	has()		returns true if key exists
		*/
        map.set("apple"); // apple: Undefined
		console.log(map.has("apple")); // true
		/*
	forEach()	invokes callback function (parameters: key, value) for each pair in the map
		*/
		map.set("apple", 500);
		map.set("banana", 300);
		map.set("orange", 200);
		text1 = ""
		map.forEach(function (value, key) {
			text1 += "[" + key + " => " + value + "]";
		})
		console.log(text1)
		/*
	entries()	returns iterator object of the map
		*/
		for (let x of map.entries()) {
			console.log(x);
		}
		/*
	keys()
	values()
		// keys() or values() same as entries but seperate keys or values
	*/

	// objects as keys
	const apples = { name: "Apples" };
	const bananas = { name: "Bananas" };
	const oranges = { name: "Oranges" };

	const fruits1 = new Map();
	fruits.set(apples, 500);
	fruits.set(bananas, 300);
	fruits.set(oranges, 200);

	// Map.groupBy()
	// takes in array and callback function 
	// e.g. fruits array
	const fruits2 = [
		{name:"apples", quantity:300},
		{name:"bananas", quantity:500},
		{name:"oranges", quantity:200},
		{name:"kiwi", quantity:150}
	];

	// callback function
	function myCallback({ quantity }) {
		return quantity > 200 ? "ok" : "low";
	}

	// group by quantity
	const result = Map.groupBy(fruits2, myCallback);
	console.log(result);


/*

	Typeof

*/
	/*
	Typeof:
	"John"				string
	("John" + "Doe")	string
	3.14				number
	33					number
	(33 + 66)			number
	true				boolean
	false				boolean
	1235n				bigint
	Symbol()			symbol
	x					undefined
	
	null				object (NOTE: This is a known bug with historical reasons,
						null is a primitive type but still gets itdentified as object)
	*/

	// complex data types:
	// object
	// function

	// since all complex data types are objects, you cannot use typeof
	// to identify types of objects. There are several workarounds:

	// method #1: instanceof keyword
	new Array() instanceof Array // true
	new Array() instanceof Set // false

	// method #2: built in functions
	// e.g.
	let x = [2];
	Array.isArray(x); // true

	// null and undefined
	typeof null; // object
	typeof undefined; // undefined
	
	// however...
	null == undefined // true
	null === undefined // false
	// null and undefined have the same value
	// but different datatype

	// all datatypes have .constructor property which defined the constructor
	// this can be used to check for datatypes

	const num = 123;
	num.constructor === Number; // true
	const str = "ABCDE"
	str.constructor === String; // true


/*

	Type conversion

*/

// converting variables
// e.g. to number
Number("123"); // type: number, value: 123
Number("10.0"); // type: number, value: 10.0
Number("") // type: number, value: 0
Number("John") // type: number, value: NaN

// unary operator to convert to Number
typeof + "123"; // number
typeof + "John"; // number 

// convert number to string
// method #1: String() constructor
String(123); // "123"
String(100 + 23); // "123"

// method #2: number toString() method
num.toString();

// converting dates to number
let date = new Date(); // Date object
Number(date); // converts date object to time in milliseconds since 1970-1-1

// converting date to string
String(date);
date.toString();

// converting booleans to numbers
Number(true); // 1
Number(false); // 0

// booleans to strings
String(true); // true
true.toString(); // true

// javascript automatically converts datatypes during
// certain invalid operations, results can be unexpected


/*

	Destructuring

*/

// destructuring objects
// can be done on any iterable

const personObj = { fname: "John", lname: "Doe", age: 40 };

console.log("Obj destructure");
// destructuring object
let { fname, lname } = personObj;
console.log( fname, lname);

// providing default values 
({fname, lname, country = "US"} = personObj); // by default country set to US. if array has defined country, it will use that
console.log(fname, lname, country);

// for objects, variable order does not matter when destructuring

// property alias
({ fname: first_name } = personObj)
console.log(first_name);


const str1 = "Hello";

console.log("String destructure")
// string destructuring
let [s1, s2, s3, s4, s5] = str1;
console.log(s1, s2, s3, s4, s5)



console.log("Arr destructure");
// destructuring arrays
const personArr = ["John", "Doe", 40];

[fname, lname] = personArr;
console.log(fname, lname);

// skipping array values
// NOTE: arrays dont have string keys, destructuring matches properties by order
[fname, lname, , country = "US"] = personArr; 
console.log(fname, lname, country);

// specifying index to destructure
({[0]:fname, [1]:lname, [3]:country = "US"} = personArr);
console.log(fname, lname, country);

// store rest of the array variables into a single specified variable
const numbers = [10, 20, 30, 40, 50, 60, 70];

const [a,b, ...rest] = numbers;
console.log(
	a, // 10
	b, // 20
	rest // [ 30, 40, 50, 60, 70 ]
)

// destructuring maps
const fruits3 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200]
  ]);
console.log(fruits3);

for (let [key, value] of fruits3) {
	console.log(key, value);
}

// swapping javascript varibles using destructuring
// no third variable!
[fname, lname] = [lname, fname];
console.log("Firstname: " + fname, "\nLastname: " + lname);


/*

	Arrow function

*/

let func;
// standard function
func = function() {
	return "Hello world";
}

// arrow function
func = () => {
	return "Hello world"; // remove function keyword 
}
// shorter arrow function - for one line code returns
func = () => "Hello world"; // remove return keyword and brackets

// arrow functions have different functionality for this keyword
// normal functions's this will always represent the object that calls the function
	// e.g. document, button, input - who called the function?
// arrow functions's this will always represent the object that defined the function
	// most likely document - who created/defined the function
