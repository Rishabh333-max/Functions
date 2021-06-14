//  FUNCTION----->function is a block of code which  is designed to use particular task repeatedly without using large line of code

// function greet(name,year){
//     console.log(`Happy birthday ${name}.Now you are ${year} years old.Enjoy your Day`)
// }

// greet("Rishabh Pratap",21);
// greet("Khushi Gupta",19);


// Setting DEFAULT VALUE when you are not filling any value

// function greet(name,thanks="thank you"){
//     console.log(`happy birthday ${name},${thanks}`);
// }
// greet("Rishabh")


// RETURN VALUE

// function greet(name,thanks)
// {
//     console.log(`${name},${thanks}`);
//     return 4;
// }
// let value=greet("Rishabh","Thank you")
// console.log(value);


// RETURN STRING

// function greet(name,thanks){
//     let msg=`${name},${thanks}`;
//     return msg;
// }
// let val=greet("Rishabh","Thank you");
// console.log(val);


// Using function inside variable

// const myGreet=function(name,thanks){
//     let msg=`${name},${thanks}`;
//     return msg;
// }
// let val=myGreet("Rishabh","Thank you");
// console.log(val)


// using function inside object

// const myobj={
//     name:"RISHABH",
//      game:function(){ return"GTA";
// }
// }
// console.log(myobj.game());


// .forEach(function())------->

// let arr=["fruit","Rishabh","furniture"];
//     arr.forEach(function(element,index,array){
//         console.log(element,index,array);
//     })

// let arr=["Rishabh","Khushi","Ambesh"];
// arr.forEach(function(element,index,array){
//     console.log(element,index);
// })


// var i=234;
// console.log(i);
// function Rishabh(name){
//     return `This is ${name}` 
// }
// let val=Rishabh("Khushi");
// console.log(val);


// if we use keyword inside block then it will not modify the previous defined variable if it is defined with keyword

// var i=234;
// console.log(i);
// function Rishabh(name){
//     var i=9;
//     console.log(i);
//     return `This is ${name}`;
// }
// let val=Rishabh("Khushi");
// console.log(val,i);


// if we dont use keyword inside block then the predefined variable will be changed!

// var i=234;
// console.log(i);
// function Rishabh(name){
//     i=9;
//     console.log(i);
//     return `This is ${name}`;
// }
// let val=Rishabh('Khushi');
// console.log(val,i)


// const i=234;
// console.log(i);
// function Rishabh(name){
//     const i=9;
//     console.log(i);
//     return `This is ${name}`;
// }
// let val=Rishabh('Khushi');
// console.log(val,i)



if(1){var i=234;
console.log(i);}
console.log(i);
function Rishabh(name){
    let i=9;
    console.log(i);
    return `This is ${name}`;
}
let val=Rishabh('Khushi');
console.log(val,i)

