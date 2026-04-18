// let count = 1;
// let stopInterval = setInterval(()=>{
//     if(count<=10){
//         console.log(count++);
//     }
//     else{
//         clearInterval(stopInterval);
//         console.log("Stoped...")
//     }
// },1000)

let timer = document.querySelector("h5")
let start = document.getElementById("start")
let stopI = document.getElementById("stop")
let reset = document.getElementById("reset")


function newGame(){
    let counter = 1;
    let a;
    let isClicked=1;
    
    start.addEventListener("click",()=>{
        if(isClicked){
            isClicked=false;
            a = setInterval(()=>{
                timer.textContent=counter++;
            },1000)
        }
    })

    stopI.addEventListener("click",()=>{
        clearInterval(a);
        isClicked=true;
    })

    reset.addEventListener("click",()=>{
        clearInterval(a);
        counter=1;
        timer.textContent="";
        isClicked=true;
    })
}

newGame();


