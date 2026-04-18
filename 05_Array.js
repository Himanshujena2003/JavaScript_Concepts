// Arrray methods
let arr =[1,2,3,4,5]

// Push-value push in end
arr.push("shubham")
console.log(arr);

// Pop-delect the value in last in array
arr.pop()
console.log(arr);

// unshift-add in starting in array
arr.unshift(0)
console.log(arr);

// shift-starting delect the value on array
arr.shift()
console.log(arr);

// slice-return the sub part of array
let sliceArr = arr.slice(1,4)
console.log(sliceArr);

// splice-remove element on array
let spliceArr = arr.splice(1,4)
console.log(spliceArr);
console.log(arr)

let arr1 = [1,2,3,4,5]
//For loop
// for (let i =0;i<arr1.length;i++){
//     console.log(arr1[i])
// }

//while loop
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

let obj1={
    name:"Himanshu",
    age:21,
    year:2004
}

// FOR OF LOOP
for(let i of arr1){
    console.log(i)
}

// FOR IN LOOP
for(let i in obj1){
    console.log(obj1[i])
}

// Foreach loop
arr1.forEach((e,i)=>{
    console.log(e,i)
})

// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i)
//     }
// }

let arr2 = [1,2,3]
let arr3 = [4,5,6]

let arr4 = [...arr1,...arr2,...arr3]
console.log(arr4)

let arr5 = [10,20,30,[40,[8],50],60,[70,80,90],[8,9,0],66,[9]]
let newarray = arr5.flat(1)
console.log(newarray)

let array = [4,12,54,2,6,8,4,7,1,2,0]
console.log(array.sort((a,b)=>a-b))

