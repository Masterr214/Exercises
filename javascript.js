
//    what is closure?
//=> closure is a function which returns another function
//   and uses the variable of parent function.
function fun1(){
    let a = 20;
    return function fun2(){
    console.log(a);
    }
} 
var closure = fun1();

