function f1(){
    console.log("Hello World")
}

f1()
const x = f1()
console.log(x)

f1.x = 3
console.log(f1.x)

console.log(typeof(f1)) //Primeiro exercicio
console.log(f1 instanceof Function) //Segundo exercicio

function add(a,b){return a+b}

console.log(add(2,2))

function f4(p1,p2,p3,p4, ...rest){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log("p3 = " + p3)
    console.log("p4 = " + p4)
    console.log("rest 0 = " + rest[0])
    console.log("rest = " + rest)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4)
f4(1,2,3,4,5,6,7)


