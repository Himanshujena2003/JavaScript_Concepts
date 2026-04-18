let Pro = new Promise((res,rej)=>{
    let error = true;
    if(error){
      rej("error");
    }
    else{
      res("Completed");
    }
})

Pro.then((message)=>console.log(message))
.catch((error)=>console.log(error))
.finally(()=>console.log("Move forward"));



// Promise Chaining
// let promiseOne = new Promise((res,rej)=>{
//   res("I will go university");
// })

// let promiseTwo = promiseOne.then((message)=>{
//   console.log(message);
//   return new Promise((res,rej)=>{
//     res("Then i will open My Laptop");
//   })
// })

// promiseTwo.then((message)=>{
//   console.log(message);
// })
  