function add(a,b){
    makeInt(a);
    makeInt(b);
    return a+b;
}
function subtract(a,b){
    makeInt(a);
    makeInt(b);
    return a-b;
}
function multiply(a,b){
    makeInt(a);
    makeInt(b);
    return a*b;
}

function divide(a,b){
    makeInt(a);
    makeInt(b);
    return a/b
}
function makeInt(n){
return parseInt(n,10);
}
function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}

function preserveDecimal(n){
    return parseFloat(n);
}