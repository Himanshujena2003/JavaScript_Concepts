// Functions and different type of functions

// normal function
function hello(){
    console.log("Hello i am Himanshu");
}
hello()

// Storing function in a variable
let newName = function(){
    console.log("Hello guys please subscribe")
}
newName()

//Arrow function
let doIt =()=>{
    console.log("Let's do it")
}
doIt()

let a=10;
let b=12;
console.log(`The sum of ${a} and ${b} is ${a+b}`)

function sumFunc(...a){
    let sum = 0;
    for(let i of a){
        sum+=i;
    }
    console.log(sum);
}
sumFunc(1,2,3,4,5,6)

let s = [];
let arr6 = [1,[2,[3,[4,[9,[0],[8,[9],0],10],11,[2],[3]],5],6],7]
spreadArray(arr6)

function spreadArray(arr){
    for (let i of arr){
        if(!Array.isArray(i)){
            s.push(i)
        }
        else{
            spreadArray(i)
        }
    }
}
console.log(s)

// (()=>{
//     console.log("Hello")
// })();
// (function() {
//     // IIFE code block
//     var localVar = 'This is a local variable';
//     console.log(localVar); // Output: This is a local variable
// })();

let arrowFunction = (a,b) => a+b
console.log(arrowFunction(5,7));

let obj = {
    name:"Himanshu",
    normalFunc:function(){
        return (this.name);
    },
    arrowFunc:()=>{
        return this.name;
    }
}
console.log(obj.normalFunc());
console.log(obj.arrowFunc())


let normal = function(){
    console.log(this)
}

let normalf = ()=>{
    console.log(this)
}

console.log(normal());
console.log(normalf());



// IIFE (Immediately invoked function expressions)
(function (){
    console.log("hello");
})();
