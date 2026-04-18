// There are two types of Datatype:- Primitive and NonPrimitive
// Primitive :- (String , Number , Null , undefined , Object , Bigint , Boolean , Symbol)
// typeof () is used to get the datatype of data or value
// typeof Null :- object 

// Variable is a name of storage area or memory location which hold values
// Here we can declare by useing (let , var , const)

// let and const are "BLOCKED SCOPED {}"  whereas   'Var' are "FUNCTION SCOPED".
// let and const are "TEMPORAL DEADZONE" means they can't be accessible before declaration but 'Var'are.
// let should be intialized during declaration  but  'var'  is optional.

// console.log(username); 
// Redeclartion & Reintialization Possible
console.log(username)
var username;



// console.log(x)
// Redeclartion not possible & Reintialization Possible
console.log(x)
let x; // cannot access 'x' before initialization


//const value can't be change
// Redeclartion & Reintialization not possible
// console.log(y)
const y=10;
// y = 190  // TypeError : Assignment to const vriable

//String concatenation
let firstName = "Himanshu"
let lastName = "jena"
let name1 = firstName + ' ' + lastName
console.log(name1);

//Boolean false or true
let a = false
let b = Number(false)

// To convert into number use  "Number" , +
// To convert into string use  "String"
// To convert into boolean use  "Boolean"

// The JavaScript code is run in two Parts:-
// 1.  Memory allocation Phase (for let,var,const)(with value undefined)
// 2.  Code Execution Phase  (value allocation and code execution)

// Dialog Box:-
// 1. alert -> (ok) -> return undefined
// 2. confirm -> (ok or cancle) -> if ok (return true) , if cancle (return false)
// 3. prompt -> (take input) -> if input given (return input) , if not (null)

// Ternary Operator
// (condition)?true:false
