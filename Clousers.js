// Clouser is a function bundeled up with it's lexical scope (function + lexical scope)

function x(){
    var a = 10
    function y(){
        console.log(a)
    }
    return y;
}

const z = x();
z();
