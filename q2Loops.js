

// //all types of loops tests

// // for loop type =4 // while loop type =2

// // forloop type 1  = simple for loop

// // print my name 5 times

// let name = "SAMY"
// for (let i =0 ; i<=5 ;i++){

//     console.log(name);
// }

// // forloop type 2  = forEach . this used to display the array values

// let arrEachCell = ["RED","white","grenn",1,2,3,{name:"clever"}]

// arrEachCell.forEach((value,index,arr)=> {
//     console.log(value);
//     console.log(index);
//     console.log(arr.name);
    
// })

// // for loop type 3 = forin & for of

// //for in used in objects -- for of used in arrays

// let objx = {name:"sam", sex : "Male", ht :4}

// for (let x in objx) {
//    console.log(x);
//    console.log(objx[x]);
// }

// for loop type 4 = forin & for of

// -- for of used in arrays

let arrforof = ["RED","white","grenn",1,2,3,{name:"clever"}]
for (let x of arrforof) {
    console.log(x);
    console.log(arrforof[x]);
    console.log(x[arrforof]);
}

