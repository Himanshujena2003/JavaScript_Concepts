// There are different types of selectors
// getElementById , querySelector
// getElementBYClassName , getElementByTagName , querySelectorAll

console.log(document.getElementsByTagName("h1"))  // Return a HTMLCollection
console.log(document.getElementById("heading"))  // Return the first element of specified id
console.log(document.getElementsByClassName("ancor")) // Return a HTMLCollection element having same class name
console.log(document.querySelector("#heading")) // Return the first element (specified)
console.log(document.querySelectorAll("a")) // Return a NodeList of the all ancor tag

//classList -> add,remove,toggle
//setAttribute , getAttribute
//createElement , appendChild
//innerHTML , innerText , textContent

// let parent = document.querySelector(".parent")
// let child = document.createElement("h2");

// child.textContent="Welcome to my web";
// child.setAttribute("class","child")

// console.log(child.getAttribute("class"));
// parent.appendChild(child);
let change = setTimeout(()=>{
    document.getElementById("heading").innerHTML="Welcome Back"
},8000)

document.getElementById("start").addEventListener("click",()=>{
    change()
})

document.getElementById("stop").addEventListener("click",()=>{
    clearTimeout(change)
})



