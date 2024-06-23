val1 = "10"
val2 = "4.4"
val3 = "4.8"

console.log (`the current data type format is ${typeof val1}`); //string
console.log (`the current data type format is ${typeof val2}`); //string

Convertedval1 = parseInt(val1)

console.log(`the converted data type format is ${typeof Convertedval1} , value is ${Convertedval1}`);

Convertedval2 = parseFloat(val2)

console.log(`the converted data type format is ${typeof Convertedval2} , value is ${Convertedval2}`);


let val4 = {};  //this object evalues to ture 
let val5 = []; // this arry evaluates to true

//let x = {}+"add"
let x = []+"add"

if(x)
{
console.log(`condition met and it is TRUE ${val4}`);
console.log(`condition met and it is TRUE ${typeof val4}`);
}
else 
{
console.log(`falsy value and it is ${typeof x}, ${x}`);
}

let ax = "0"

console.log(typeof ax);

if (ax) console.log("a is",ax)
