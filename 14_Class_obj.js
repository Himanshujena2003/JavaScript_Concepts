class car{
    constructor(){this.payload = 1;}
    getPayload(){return this.payload}
}
const x = new car();
console.log(x.getPayload())

console.log(1)
setTimeout(()=>{console.log(2)},0)
Promise.resolve().then(()=>console.log(3));
console.log(4)

const ob = {title:"HEllo"}
const {ob:hello="unkks"}=ob
console.log(hello)
console.log(ob.title)

const a = Symbol("key")
const b = Symbol("key")
console.log(a===b)

function createLogger(prefix) {
    return function hello(message) {
        console.log(`${prefix} ${message}`);
    };
}

const d = createLogger("heee");
d("what");

