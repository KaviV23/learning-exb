/*
    
    Array Search

*/
    /* Methods
    indexOf()		returns first occurance of element specified. -1 if not found     
	*/
	console.log([4, 9, 16, 25, 29, 9].indexOf(9)); // 1
	/*
    lastIndexOf()	same as indexOf but last occuring
	*/
		console.log([4, 9, 16, 25, 29, 9].lastIndexOf(9)); // 5
	/*
    includes()		return true/false when array has specified element. also can check for NaN unlike indexOf
	*/
		console.log([4, 9, 16, 25, 29, 9].includes(25)); // true
	/*
    find()			returns the value when it passes a provided test function.
					it provides value, index and array itself to the function.
	*/
		console.log([4, 9, 16, 25, 29, 9].find(biggerThan8)); // 9
		function biggerThan8(value, index, array) {
			return value > 8
		}
	/*
    findIndex()		same as find(), but returns the index instead
	*/
		console.log([4, 9, 16, 25, 29, 9].findIndex(biggerThan8)); // 1
	/*
    findLast()		same as find(), but checks backwards
	*/
		console.log([4, 9, 16, 25, 29, 9].findLast(biggerThan8)); // 9
	/*
    findLastIndex() same as findLast, but returns index instead
	*/
		console.log([4, 9, 16, 25, 29, 9].findLastIndex(biggerThan8)); // 5
	/*
    */


/*

	Array Sort

*/
	/*	Methods
		# Alphabetical
		sort()			Sorts alphabetically - ALTERS ARRAY

		reverse()		Reversed elements - ALTERS ARRAY
		// can combine sort and reverse to sort in decending order	
	
		toSorted()		Sorts array but to a new array - keeps original array intact
		toReversed()	Reverses array but to a new array - keeps original array intact
		
		# Numeric
		Numeric Sort	
			sort() function takes it numbers and converts them to strings to compare alphabetically
			this causes numbers like 20 to be bigger than 1000 as 2 is bigger than 1 alphabetically
			to solve this, pass in a compare function
			*/
			const points = [40, 100, 1, 5, 25, 10];
			points.sort(function(a,b) {return a - b}); // for ascending
			points.sort(function(a,b) {return b - a}); // for ascending
			console.log(points); // result: [ 100, 40, 25, 10, 5, 1 ]
			/*
		Random Sort
			simplest way to randomly sort:
			*/
			points.sort(function(a,b) {return 0.5 - Math.random()});
			console.log(points);
			/*
			WARNING! this method may be innaccurate as it may favour some numbers than others

			the solution to use the Fisher Yates method
			*/
			for (let i = points.length -1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				let k = points[i];
				points[i] = points [j];
				points[j] = k;
			}
			console.log(points);
			/*

		Math.min()
		Math.max()
			finding min/max values of an array has multiple methods
			#1 sorting the entire array by asc/desc order (very inefficient)

			#2 Use Math.min.apply / Math.min.apply on array
			*/
			function arrMin(arr) {
				return Math.min.apply(null, arr); // same as Math.min(<<array elements separated by ','>>)
			}
			function arrMax(arr) {
				return Math.max.apply(null, arr); // same as Math.max(<<array elements separated by ','>>)
			}
			/*
		Home made Min()
			fasted home made code to find minimum val in array
			*/
			function myArrayMin(arr) {
				let len = arr.length;
				let min = Infinity;
				while (len--) {
				  if (arr[len] < min) {
					min = arr[len];
				  }
				}
				return min;
			} 
			console.log(myArrayMin(points));
			/*
		Home made Max()
			fastest home made code to find maximum val in array
			*/
			function myArrayMax(arr) {
				let len = arr.length;
				let max = -Infinity;
				while (len--) {
				  if (arr[len] > max) {
					max = arr[len];
				  }
				}
				return max;
			}
			console.log(myArrayMax(points));
			/*
		Sorting Objects	
			arrays may also have objects in them
			it is easy to sort based on properties of these objects using the compare function
			*/
			const cars = [
				{type:"Volvo", year:2016},
				{type:"Saab", year:2001},
				{type:"BMW", year:2010}
			]; 
			
			cars.sort(function(a,b) {return a.year - b.year}); // ascending order
			console.log(cars);
				// result:
				// [
				// 	{ type: 'Saab', year: 2001 },
				// 	{ type: 'BMW', year: 2010 },
				// 	{ type: 'Volvo', year: 2016 }
				//]
			/*

			comparing strings are a little more complex
			*/
			cars.sort(function (a, b) {
				let x = a.type.toLowerCase();
				let y = b.type.toLowerCase();
				if (x < y) { return -1; }
				if (x > y) { return 1; }
				return 0;
			}); 
	/*
*/


/*

	Array Iteration

*/
	/*
	Methods
		forEach()		calls a callback function
			*/
			console.log("=")
			points.forEach(printItems);
			console.log("=")

			function printItems(value, index, arr) {
				console.log("value", value, "\t index", index, "\t arr", arr);
			}
			/*
		map()			returns a new array with the results of the function passed through it

		flatMap()		first maps all elements of array and..
						..creates new array by flattening the array
						# read in upcoming maps chapter		

		filter()		returns new array based on a filter function
		*/
			console.log(
				points.filter((value) => value > 25 )
			);
		/*
		reduce()		used to reduce the elements of an array into a single value
						has a "total" variable that is brought over to each iteration
			*/
				//finding sum of points
				console.log(
					points.reduce((total, value) => total += value) // result: 181
				);
			/*
		reduceRight()	same as reduce(), but done from right to left
		every()			returns true/false, checks against a test function
						true returned only when all checks pass
			*/
				console.log(
					points.every((value) => value > 0) // true
				);
				console.log(
					points.every((value) => value > 1) // false - min val of arr is 1
				);
			/*
		some()			similar to every(), except it checks for some (OR)...
						instead of all (AND)
			*/
				console.log(
					points.some((value) => value > 100) // false
				);
				console.log(
					points.some((value) => value > 99) // true - arr has 1 val above 99
				);
			/*
		from()			returns an array from any type of iterrable
			*/
				console.log(
					Array.from("Hello world")
				);
			/*
		keys()			returns the keys of an array in an array iterator
			*/
				let arrIt = points.keys(); // Object [Array Iterator] {}
				for (let x of arrIt) {
					console.log(x);
				}
			/*
		entries()		returns an array iterator with key/value pairs of an array 
			*/
				arrIt = points.entries();
				for (let x of arrIt) {
					console.log(x);
					// output: 
					// 	[ 0, 5 ]
					// 	[ 1, 25 ]
					// 	[ 2, 1 ]
					// 	[ 3, 10 ]
					// 	[ 4, 40 ]
					// 	[ 5, 100 ]
				}
			/*
		with()			a way to update elements in an array without altering...
						...	the original array
			*/
				const dates = ["JAN", "FEB", "MAR", "APR"];
				console.log(
					dates.with(2, "march")
				);
			/*
		Spread (...)	spread individual array elements into another array
			*/
				console.log(
					[...cars, ...points, ...dates]
				);
			/*
	*/

/*

	Dates

*/

new Date(); // current date
new Date("2020-01-01"); // date object from string

let year, month, date, hours, minutes, seconds, ms;
// date object from specified date and time
new Date(year, month);
new Date(year, month, date);
new Date(year, month, date, hours);
new Date(year, month, date, hours, minutes);
new Date(year, month, date, hours, minutes, seconds);
new Date(year, month, date, hours, minutes, seconds, ms);
// cannot create date object with just year, it will make create date object from milliseconds

/* NOTE! Months start at 0 and ends at 11 */


new Date(ms); // create date objects as milliseconds plus zero time (01-January-1970)
// javascript always stores dates as milliseconds

// years can be written as two digits, will be intepreted as previous century (19xx)
new Date(95, 10); // 1995 October

/* Methods */
const milliseconds = 100000000000;
const curDate = new Date(milliseconds);
console.log(
	curDate.toString(),
);
console.log(
	curDate.toDateString(), "\n",
	curDate.toUTCString(), "\n",
	curDate.toISOString(),
);

/*

	Math

*/
	/*
	Methods:
	sqrt()		return square root
	cbrt()		return cube root
	floor()		return lowest integer downwards
	ceil()		return highest integer upwards
	random()	return random number (float) between 0 and 1
	pow(x,y)	return x power of y
	min()		return min number
	max()		return max number
	sign()		return negativity, positivity or 0
	trunc()		return integer part of number (no decimal)
	*/


/*

	Math.random()

*/

// return random number between 0 (inclusive) and 1 (exclusive)
console.log("Float")
for (let i = 0; i < 10; i++) {
	console.log(Math.random()); // float number 0 - 0.999...
}

console.log("Integers")
for (let i = 0; i < 10; i++) {
	console.log(Math.floor(Math.random() * 10)); // integer number 0 - 9
}

// can make homemade function to generate random numbers within a specified range
// e.g. - random number between min and max value (both included)
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log("Homemade function:")
for (let i = 0; i < 10; i++) {
	console.log(getRndInteger(20, 30))
}

/*

	Booleans

*/
// value of TRUE/FALSE

// what is true in javascript?
// answer: everything with a value is true
// comparisons can result in true and false values as well

// true values:
100
3.14
-15
"Hello"
"False"
7 + 1 + 3.14

// false values:
0
-0
undefined
""
null
false
NaN

// booleans can also be created with new keyword || NOT RECOMMENDED
// due to complications with comparisons between objects,
// objects and primative booleans and their behaviour with == / === operators


/*

	Comparisons

*/

// comparisons between different data types can be complicated 

// strings vs strings: will be compared alphabetically
// numbers vs numbers: will be compared numerically
// strings vs numbers: will be compared numerically (strings will be converted into numbers)
// stings that are not representable by numbers will automatically be replaced with NaN (always false)
// empty strings "" are considered 0


2 < 12 // true
2 < "12" // true
2 < "John" // false
2 > "John" // false
2 == "John" // false
"2" < "12" // false
"2" > "12" // true 
"2" == "12" // false

// to avoid complications, proper type conversion must take place
// eg
/*
	age = Number(age);
	if (isNaN(age)) {
	voteable = "Input is not a number";
	} else {
		voteable = (age < 18) ? "Too young" : "Old enough";
	}
*/

// nullish coalescing operator (??)
// returns the first argument if not null/undefined, else return second argument
let fname = null;
let errMsg = "Missing name";
let result = fname ?? errMsg; // result is asigned fname is not null/undefined, else errMsg is assigned to result

// optional chaining operator (?.)
const car = {type:"Fiat", model:"500", color:"white"}; // object with type, model and properties 

console.log(car?.name); // tries to access undefined name property. this will catch the error
// un-comment when executing in browser. does not work in Node.js
	// document.getElementById("h1").innerHTML = car?.name;
//

/*

	Switch statements

*/

// switch statements allow selection of many different code blocks...
// ...to be executed depending on the condition

// if condition not met, default code block is executed

	/*
		let expression;
		switch (expression) {
			case x: 
				// code block
			break;
			case y:
				// code block
			break;
			default:
				// code block
		}
	*/

let currentTime = new Date();
switch (currentTime.getDay()) {
	case 0:
		console.log("Happy Sunday")
		break;
	case 1:
		console.log("Happy Monday")
		break;
	case 2:
		console.log("Happy Tuesday")
		break;
	case 3:
		console.log("Happy Wednesday")
		break;
	case 4:
		console.log("Happy Thursday")
		break;
	case 5:
		console.log("Happy Friday")
		break;
	case 6:
		console.log("Happy Saturday")
		break;
	default:
		console.log("Error");
}

// break keyword
// stop execution inside switch block
// not needed by last block, already secretly has one

// default keyword
// run code block when no case match
// does not have to be the last case in switch block
switch (currentTime.getDay()) {
	default: // default tag on top
		console.log("Error");
	case 0:
		console.log("Happy Sunday")
		break;
	case 1:
		console.log("Happy Monday")
		break;
	case 2:
		console.log("Happy Tuesday")
		break;
	case 3:
		console.log("Happy Wednesday")
		break;
	case 4:
		console.log("Happy Thursday")
		break;
	case 5:
		console.log("Happy Friday")
		break;
	case 6:
		console.log("Happy Saturday")
		break;
}

// common code blocks
let text;
switch (new Date().getDay()) {
	case 4:
	case 5: // case 4 & 5 share the same code block
		text = "Soon it is Weekend";
		break;
	case 0:
	case 6: // case 0 & 6 share the same code block
		text = "It is Weekend";
		break;
	default:
		text = "Looking forward to the Weekend";
}

console.log(text);