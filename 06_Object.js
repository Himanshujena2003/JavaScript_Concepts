let obj = {
    name :"Himanshu",
    year :2024,
    university :"parul",
    location:{
        city:"Bhilwara",
        state:"Rajasthan",
        pin:311001
    }
}

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",5:"d"}
let obj3 = {6:"e",7:"f"}

let obj4 = Object.assign({},obj1,obj2,obj3)
let obj5 = {...obj1,...obj2}

console.log(obj4)
console.log(obj5)
console.log(obj);
console.log(obj.name)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

for(let i in obj1){
    console.log(i)
}

let user={
    id:123,
    name:"Himanshu"
}

Object.defineProperties(user,{id:{writable:false}})  // freeze a particular property of object
Object.seal(user) // we cant delete any property of object but can overwrite
Object.freeze(user) // we cant't perform both delete and overwrite operation on the object
user.id=1222
console.log(user.id)


