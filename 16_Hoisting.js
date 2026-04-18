// There are two phases of Javascript engine
// 1. Memory creation Phase -> Memory is allocated to variables and Functions
// 2. Code Execution Phase  -> Initialization and code execution is done in this phase

// Shadowing -> when there are two variable present with same name the local scope  is given more priority than global scope

console.log(x)
var x = 10;

console.log(hello)

var hello = function (){
    console.log("How are you");
}

console.log(hello())


