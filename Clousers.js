// Clouser is a function bundeled up with it's lexical scope (function + lexical scope)

// function x(){
//     var a = 10
//     function y(){
//         console.log(a)
//     }
//     return y;
// }

// const z = x();
// z();

function x(){
    for(var i=1;i<=6;i++){
        function y(x){   // due to the clouser the setTimeout remembers its lexical scope
            setTimeout(()=>{
                console.log(x);
            },i*1000)
        }
        y(i)
    }

    console.log("Hello student")
}
x()