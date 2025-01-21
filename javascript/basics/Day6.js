/*

    Callbacks

*/

// e.g. calculator function and display function
// method 1: call display function in calculator function - issue: cannot calculate values without displaying results
// method 2: call calculator and display seperately - issue: must call two functions to display calculations

// callback functions
// function passed as argument to another function

function calcSum(a, b, displaySum) {
    let sum = a + b;
    displaySum(sum);
}

function displaySum(sum) {
    console.log(sum);
}
calcSum(1, 2, displaySum);


/*

    Promises

*/

// callbacks are usually used in asychronous functions

// instead of only passing the function name, you can also pass the entire function
setTimeout(function() {
    console.log("Hello");
}, 1000);

// most asynchrounous progrms use promises instead of callbacks;
// Promisses have 3 states: pending, fulfilled, rejected
// it has to chose either fulfilled or rejected when it gets its result

// promises return state and result
// states:          results:
//	pending				undefined
//	fulfilled			result value
//	rejected			error object

const myPromise = new Promise(function(resolve, reject) {
	let x = 9;

	if (x == 0) {
		resolve("ok");
	} else {
		reject("error");
	}
});

// .then()
// has two arguments, callback for success and failure
myPromise.then(
	() => console.log("success"),
	() => ("failure")
) // both are optional


const myPromise2 = new Promise(function(resolve, reject) {
	let x = Math.floor(Math.random() * 2);

	if (x == 1) {
		resolve(x)
	} else {
		reject(x);
	}
}) 

myPromise2.then(
	(value) => console.log("Fulfilled:", value),
	(error) => console.log("Error:", error)
)

async function coinToss() {
	let promise = new Promise(function(resolve) {
		let x = setTimeout(function() {
			resolve(Math.floor(Math.random() *2));
		}, 3000) // randomly return 1 or 0 after 3 seconds

	})
	console.log("Cointoss:", await promise === 1 ? "Heads" : "Tails");
}

coinToss();