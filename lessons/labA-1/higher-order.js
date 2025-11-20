/*function add(a,b){return a+b}
function sub(a,b){return a-b}
function mul(a,b){return a*b}
function div(a,b){return a/b} */


const add =  function add(a,b){return a+b}

function executeAndPrint(a, b, f){
    const res = f(a,b)
    console.log("Resultado " +res)
}

executeAndPrint(2,4, add)
executeAndPrint(2,5, (a,b) => a-b)
executeAndPrint(2,5, (a,b) => a*b)
executeAndPrint(2,5, (a,b) => a/b)