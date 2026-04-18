//Asynchronus callback function
// setTimeout(()=>{
//     console.log("First");
//     setTimeout(()=>{
//         console.log("Second");
//         setTimeout(()=>{
//             console.log("Third");
//             setTimeout(()=>{
//                 console.log("Fourth");
//             },1000)
//         },2000)
//     },3000)
// },4000)


let array = [1,2,3,4,5]

// Filter -> it helps to filter the items based on some condition
console.log(array.filter((item)=>item>1));
let newArray = array.filter((e)=>e<4);  // It return a array
console.log(newArray)


// Map  -> it helps to manipulate the elements of the array basaed on some condtion
console.log(array.map((e)=>e*2))
let newArray1 = array.map((e)=>e+3);  // It return a array
console.log(newArray1)


// Reduce -> it reduces the array to a single value bsrd on some condiition
let initiial = 1
console.log(array.reduce((acc,item)=>acc+item)) // it return a single integer value


// Function chaining
// Here we can chain only "filter" and "map" function after using "reduce" we can't 

// until we are using "reduce" we can chain
let newArray2 = array.map((item)=>item*10).filter((item)=>item<50).map((item)=>item*10);
console.log(newArray2)

// Here after using "reduce" chaining is not possible
let sum = array.map((item)=>item*2).filter((item)=>item<10).reduce((acc,add)=>acc+add)
console.log(sum)



