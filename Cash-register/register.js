const payme = document.querySelector("#pay");
const givenCash = document.querySelector("#cash-given");

let availablecash = [2000,500,100,20,10,5,1];//0 0 100*4 20*4 10*0 5*1 3*1

let amountToBeGivenback = givenCash.value - payme.value;//488

let temp = [] ;
console.log("amount to be gicven back",amountToBeGivenback)

temp.push(parseInt(amountToBeGivenback / availablecash[0]))
temp.push(parseInt((amountToBeGivenback % availablecash[0])/ availablecash[1]))
temp.push(parseInt((amountToBeGivenback % availablecash[1]) / availablecash[2]))
temp.push(parseInt((amountToBeGivenback % availablecash[2]) / availablecash[3]))
temp.push(parseInt((amountToBeGivenback % availablecash[3]) / availablecash[4]))
temp.push(parseInt((amountToBeGivenback % availablecash[4]) / availablecash[5]))
temp.push(parseInt((amountToBeGivenback % availablecash[5])/ availablecash[6]))


let Rs2000 = document.getElementById("Rs2000");
Rs2000.innerText = temp[0];
let Rs500 = document.getElementById("Rs500");
Rs500.innerText = temp[1];
let Rs100 = document.getElementById("Rs100");
Rs100.innerText = (temp[2]);
let Rs20 = document.getElementById("Rs20");
Rs20.innerText = (temp[3]);
let Rs5 = document.getElementById("Rs5");
Rs5.innerText = (temp[4]);
let Rs1 = document.getElementById("Rs1");
Rs1.innerText = (temp[5]);

console.log("**",Rs500.innerText)



console.log("available",temp)
// alert("hi")