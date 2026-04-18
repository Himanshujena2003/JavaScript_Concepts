// call, apply, and bind are all about controlling what this refers to when a function runs.

// call() -> Invoke the function immediately
// First argument =  what "this" refers to
// Remaining argument = passed one by one

function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Amit" };

greet.call(user, "Ahmedabad");


// apply() -> same as call() but here arguments are passed as an array
// First argument = this
// Second argument = array of arguments

function greet(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const user = { name: "Amit" };

greet.apply(user, ["Ahmedabad", "India"]);


// bind() -> does not call function immediately. It returns a new function
// Give the tool to this person to use later

function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Amit" };

const newFn = greet.bind(user);

newFn("Ahmedabad");