function showProperties(obj){
    for(const p in obj){
        console.log(p + " - " + obj[p])
    }

}

function testShowProperties(){
    const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
    showProperties(o)
}

testShowProperties()