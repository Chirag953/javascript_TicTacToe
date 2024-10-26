function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function divide(a,b){
    console.log(a/b);
}
function multiply(a,b){
    console.log(a*b);
}


function calculator(q,w,callback1){
    callback1(q,w)
}
calculator(4,2,sum);
calculator(4,2,sub);
calculator(4,2,divide);
calculator(4,2,multiply);
