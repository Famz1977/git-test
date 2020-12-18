// const celsius = 12;
// const fahrenheit = celsius * 1.8 +32;

// document.write(fahrenheit);

// function c2F(celsius){
// 	let result = celsius *1.8 + 32;
// 	return result;
// }

// document.write(c2F(12));
//--------------------------------------
// the idea is show how to use "/", "/n" and "/t"
// let joke = "Why couldn't the shoes go out and play?<br>They were all \"tied\" up!";
// document.write(joke);
//---------------------------------------------------
// let bill = null;
// let tip = null;
// let total = null;

// bill = 10.25 + 3.99 + 7.15;
// tip = bill * 0.15;
// total = bill + tip;
// document.write(total.toFixed(2));

// function billPlusTip(bill) {
// 	let tip = bill * 0.15;
// 	let total = bill + tip;
// 	result = total.toFixed(2);
// 	return result
// }

// document.write(billPlusTip(25));
//-----------------------------------------------
// let musicians = 7;

// if (musicians <=0) {
// 	document.write("Not a group.");
// }else if (musicians === 1) {
// 	document.write("Solo.");
// }else if (musicians === 2) {
// 	document.write("Duet.");
// }else if (musicians === 3) {
// 	document.write("Trio.");
// }else if (musicians === 4) {
// 	document.write("Quartet.");
// }else if (musicians> 4) {
// 	document.write("This is a large group.");
// }else {
// 	document.write("Please, use only positive numbers");
// }

//-----------------------------------------------
// let musicians = 0

// switch(musicians) {
// 	case 0 : name = "Not a group.";
// 	break;
// 	case 1 : name = "Solo.";
// 	break;
// 	case 2 : name = "Duet.";
// 	break;
// 	case 3 : name = "Trio.";
// 	break;
// 	default : name = "This is a large group.";
// 	break;
// }
// document.write(name);
//-------------------------------------------
// let room = "dining room";
// let suspect = "Mr. Parkes";
// let weapon = ""
// let solved = false;

// if (room === "dining room" && suspect === "Mr. Parkes") {
// 	weapon = "knife";
// 	solved = true;
// } else if (room === "billiards room" && suspect === "Mrs. Sparr") {
// 	weapon = "pool stick";
// 	solved = true;
// } else if (room === "gallery" && suspect === "Ms. Van Cleve") {
// 	weapon = "Trophy";
// 	solved = true;
// } else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
// 	weapon = "poison";
// 	solved = true;
// }

// if (solved) {
// 	document.write(suspect + " did it in the " + room + " with the " + weapon + ".");
// }
//----------------------------------------------------------------
// let room = "gallery";
// let suspect = "Ms. Van Cleve";
// let weapon = "";
// let solved = false;

// room === "dining room" && suspect === "Mr. Parkes" && solved === false
// ? (weapon = "knife") && document.write(suspect + " did it in the " + room + " with the " + weapon + ".") && (solved = true)
// : room === "billiards room" && suspect === "Mrs. Sparr" && solved === false
// ? (weapon = "pool stick") && document.write(suspect + " did it in the " + room + " with the " + weapon + ".") && (solved = true)
// : room === "gallery" && suspect === "Ms. Van Cleve" && solved === false
// ? (weapon = "trophy") && document.write(suspect + " did it in the " + room + " with the " + weapon + ".") && (solved = true)
// : room === "ballroom" && suspect === "Mr. Kalehoff" && solved === false
// ? (weapon = "poison") && document.write(suspect + " did it in the " + room + " with the " + weapon + ".") && (solved = true)
// : (solved = false);

//----------------------------------------------------
// var balance = 325.00;
// var checkBalance = true;
// var isActive = false;

// if (checkBalance){
// 	if ((isActive)&&(balance>0)) {
// 		console.log("Your balance is $" + balance.toFixed(2) + ".");
// 	}else if(isActive===false){
// 		console.log("Your account is no longer active.");
// 	}else if((isActive)&&(balance=0)){
// 		console.log("Your account is empty.");
// 	}else {
// 		console.log("Your balance is negative. Please contac bank.");
// 	}
// } else {
// 	console.log("Thank you. Have a nice day!");
// }
//-------------------------------------------------
// const balance = -120;
// const checkBalance = true;
// const isActive = true;

// checkBalance === true ? isActive === true ? balance > 0 ? document.write("Your balance is $" + balance.toFixed(2) + ".")
// : balance === 0 ? document.write("Your account is empty") 
// : document.write("You balance is negative. Please contact bank.")
// : document.write("Your account is no longer active.")
// : document.write("Thank you. Have a nice day");
//----------------------------------------------
//Ternary operators

// var eatsPlants = false;
// var eatsAnimals = false;


//  * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
//  * - (true, true, omnivore)
//  * - (false, true, carnivore)
//  * - (true, false, herbivore)
//  * - (false, false, undefined)
 

// var category = eatsPlants && eatsAnimals ? "omnivore" : category = eatsAnimals ? "carnivore" : category = eatsPlants ? "herbivore" : "undefined"; 

// console.log(category);
//--------------------------------------------------------

// Switch operators
// const month = 5;

// switch (month) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 	days = 31;
// 	break;
// 	case 2: days = 28;
// 	break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 	days = 30;
// 	break;
// 	default: document.write("You have selected a not real month value");
// }
// document.write("The month number " + month + " has " + days + " days.");
//-------------------------------------------
// let education = "a Master's degree";
// let salary = 0;
// let error = false;

// switch (education){
// 	case "no high school diploma" : salary = 25636;
// 	break;
// 	case "a high school diploma" : salary = 35256;
// 	break;
// 	case "an Associate's degree" : salary = 41496;
// 	break;
// 	case "a Bachelor's degree" : salary = 59124;
// 	break;
// 	case "a Master's degree" : salary = 69732;
// 	break;
// 	case "a Professional degree" : salary = 89960;
// 	break;
// 	case "a Doctoral dregree" : salary = 84396;
// 	break;
// 	default : error = true;
// 	break;
// }
// error === false ? document.write("In 2010, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + ".") : document.write("Please, introduce a right option.");
//-----------------------------------------------
// while loops

// let start = 0;
// while (start < 10) {
// 	document.write(start + "<br>");
// 	start = start + 2;
// }

// for (let start = 0; start < 10; start = start + 2) {
// 	document.write(start + "<br>");
// }

//-------------------------------------------
// let number = 1;
// while (number < 101){
// 	if ((number % 3 === 0) && (number % 5 === 0)) {
// 		document.write("FizzBuzz" + "<br>");
// 	} else if (number % 3 === 0) {
// 		document.write("Fizz" + "<br>");
// 	} else if (number % 5 === 0) {
// 		document.write("Buzz" + "<br>");
// 	} else {
// 		document.write(number + "<br>");
// 	} number = number + 1;
// } 

// let number = 1;

// while (number <= 100) {
// 	(number % 3 === 0) && (number % 5 === 0)
// 	? document.write("FizzBuzz" + "<br>")
// 	: (number % 3 === 0)
// 	? document.write("Fizz" + "<br>")
// 	: (number % 5 === 0)
// 	? document.write("Buzz" + "<br>")
// 	: document.write(number + "<br>");

// 	number = number + 1;
// }
// for (let number = 1; number <= 100; number = number + 1) {
// 	(number % 3 === 0) && (number % 5 === 0)
// 	? document.write("FizzBuzz" + "<br>")
// 	: (number % 3 === 0)
// 	? document.write("Fizz" + "<br>")
// 	: (number % 5 === 0)
// 	? document.write("Buzz" + "<br>")
// 	: document.write(number + "<br>");
// }
//----------------------------------------------------
// round = 99; // number of the round
// round1= "bottles"; 
// round2 = "bottles";



// while (round > 0) {
// 	document.write(round + " " + round1 + " of juice on the wall! "+ round + " " + round1 + " of juice! Take one down, pass it around... " + (round - 1) + " " + round2 + " of juice on the wall!" + "<br>");
// 	round = round - 1;

// 		if (round ===2) {
// 			round2 = "bottle"; // to become the word to singular.
// 		}

// 		if (round === 1) {
// 			round1 = "bottle"; // to become the word to singular.
// 			round2 = "bottles";
// 		}
// }
// for ( let round = 99; round > 2; round = round - 1) {
// 		document.write(round + " bottles of juice on the wall! "+ round + " bottles of juice! Take one down, pass it around... " + (round - 1) + " bottles of juice on the wall!" + "<br>");
// }
// document.write("2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!" + "<br>");
// document.write("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!" + "<br>");
//------------------------------------------------------------------------------

// let t = 60;

// while (t >= 0) {
// 	if ((t !== 50) && (t !== 31) && (t !== 16) && (t !== 10) && (t !== 6) && (t !== 0)) {
// 		document.write("T-" + t + " seconds" + "<br>");
// 	} else if (t === 50) {
// 		document.write("Orbiter transfer from gorund to internal power" + "<br>");
// 	} else if (t === 31) {
// 		document.write("Ground launch sequencer is go for auto secuence start" + "<br>");
// 	} else if (t === 16) {
// 		document.write("Active launch pad sound supression system" + "<br>");
// 	} else if (t === 10) {
// 		document.write("Active main engine hydrogen burnoff system" + "<br>");
// 	} else if (t === 6) {
// 		document.write("Main engine start" + "<br>");
// 	} else if (t === 0) {
// 		document.write("Solid rocket booster ignition and liftoff!" + "<br>");
// 	} t = t - 1;
// }

// var t = 60 ;

// while (t >=0) {
// 	(t===50)
// 	? document.write("Orbiter transfers from ground to internal power" + "<br>")
// 	: (t===31)
// 	? document.write("Ground launch sequencer is go for auto sequence start" + "<br>")
// : (t===16)
// ? document.write("Activate launch pad sound suppression system" + "<br>")
// : (t===10)
// ? document.write("Activate main engine hydrogen burnoff system" + "<br>")
// : (t===6)
// ? document.write("Main engine start" + "<br>")
// : (t===0)
// ? document.write("Solid rocket booster ignition and liftoff!" + "<br>")
// : document.write("T-" + t + " seconds" + "<br>");

// 	t = t-1;
// }

// for (let t = 60; t >= 0; --t) {
// 	(t===50)
// 	? document.write("Orbiter transfers from ground to internal power" + "<br>")
// 	: (t===31)
// 	? document.write("Ground launch sequencer is go for auto sequence start" + "<br>")
// 	: (t===16)
// 	? document.write("Activate launch pad sound suppression system" + "<br>")
// 	: (t===10)
// 	? document.write("Activate main engine hydrogen burnoff system" + "<br>")
// 	: (t===6)
// 	? document.write("Main engine start" + "<br>")
// 	: (t===0)
// 	? document.write("Solid rocket booster ignition and liftoff!" + "<br>")
// 	: document.write("T-" + t + " seconds" + "<br>");
// }
//--------------------------------------------------------------------------------

// let solution = 1;

// for (let i = 1; i <=12; ++i) {
// 	solution = solution * i;
// } document.write(solution);

//-------------------------------------------------

// for (let row = 0; row <= 25;++row) {
// 	for (let seat = 0; seat <=99; ++seat){
// 		document.write(row + "-" + seat + "<br>");
// 	}
// }

//----------------------------------------------------------------

// Lets have fun with functions!!!!!

// function reverseString(reverseMe) {
// 	let reversed = "";
// 	for (let i = reverseMe.length - 1; i >= 0; --i) {
// 		reversed += reverseMe[i];
// 	}
// 	return reversed;
// }
// document.write(reverseString("ValeFranco"));


// let name = "felipe";
// let result = "";

// for (let i = name.length - 1; i >=0 ; --i) {
// 	result = result + name[i];
// }
// document.write(result);

// function laugh() {
// 	var result = "hahahahahahahahahaha!"
// 	return result;
// }
// document.write(laugh());

// function laugh(num){
// 	let sound = "";
// 	for (i = 0; i < num; ++ i) {
// 		sound = "ha" + sound;

// } 	sound = sound + "!";
// 	return sound;

// }	document.write(laugh(7));

// function laugh(num){
//     let a = "";
//     for (i = 0 ; i < num; ++i) {
//         a = "ha" + a;
//         return a;
//     }
// } console.log(laugh(5));

// let num = 3;
// let sound = "";

// for(i = 0; i < num; ++i){
// 	sound = "ha" + sound;
// } document.write(sound);

// function laugh(num){
// 	let sound = "";
// 		for (i = 0; i < num; ++i){
// 			sound = "ha" + sound;

// 		} sound = sound + "!";
// 		return sound;
// } document.write(laugh(4));

// function sum2(num1, num2){
// 	let result = num1 + num2;
// 	document.write(result);

// }

// sum2(10, 20);

// let word = "123456789";
// let output = "";

// for (i = word.length; i >0; i = i-1) {
// 	output = output + word[i-1];

// } document.write(output);

// function reverse (word) {
// 	let result = "";
// 	for (i = word.length - 1; i>=0; --i){
// 		result = result + word[i];
		
// 	}return result;
		
// }
// document.write(reverse("valentina"));


// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//   return "Returning: I am returning this string!";
// }

// isThisWorking(3);

// makeLine

// function makeLine(length){
// 	let line = "";
// 	for (i = length; i > 0; --i) {
// 		line += "* ";
		
// 	} return line;
// } 

// function piramid(tall) {
// 	let result = "";
// 	for (num = 1; num <= tall; num++){
// 		result = result + makeLine(num) + "<br>";
// 	}return result
// }
// document.write(piramid(10));

// anonymous variable

// let laugh = function(num){
// 	result = "";
// 	for(i=1; i<=num; ++i){
// 		result= "ha" + result;
// 	}result = result + "!";
// 	return result;
// }
// document.write(laugh(5))

// inline functions

// function emotions (myString, myFunc) {
// 	document.write("I am " + myString + ", " + myFunc(5));
// }

// emotions("happy", function(num) {
// 	let result = "";
// 	for (i=1; i<=num; ++i){
// 		result = result + "ha"
// 	}result = result + "!";
// 	return result;
// })

// let edad = prompt("Indica tu edad, or favor");


// 	if(edad >= 18){
// 		document.write("tienes edad suficiente para manejar, segun la ley");
// 	} else if(edad < 18){
// 		document.write("Aun no tienes edad suficiente para manejar legalmente");
// 	}else {
// 	document.write("por favor ingresa un valor valido");
// };

// let nota = prompt("Indica el valor de tu nota, por favor.");
// if((nota >= 0)&&(nota <=3)){
// 	document.write("Muy deficiente.")
// }else if ((nota>= 3)&&(nota<= 5)){
// 	document.write("Insuficiente.");
// }else if ((nota >=5)&&(nota<=6)){
// 	document.write("Suficiente.");
// }else if ((nota>=6)&&(nota<=7)){
// 	document.write("Bien.");
// }else if ((nota>=7)&&(nota<=9)){
// 	document.write("Notable.");
// }else if((nota>=9)&&(nota<=10)){
// 	document.write("Sobresaliente");
// }else{
// 	document.write("Por favor ingrese un valor valido.")
// };

// let nota=prompt("Indica el valor de tu nota, por favor");

// nota >= 0 && nota <= 3 ? document.write("Muy deficiente.")
// : nota >= 3 && nota <= 5 ? document.write("Insuficiente.")
// : nota >= 5 && nota <= 6 ? document.write("Suficiente.")
// : nota >= 6 && nota <= 7 ? document.write("Bien.")
// : nota >= 7 && nota <= 9 ? document.write("Notable.")
// : nota >= 9 && nota <= 10 ? document.write("Sobresaliente.")
// : document.write("Por favor, ingrese un valor valido.");

// function evaluar(nota) {
// 	nota >= 0 && nota <= 3 ? document.write("Muy deficiente.")
// : nota >= 3 && nota <= 5 ? document.write("Insuficiente.")
// : nota >= 5 && nota <= 6 ? document.write("Suficiente.")
// : nota >= 6 && nota <= 7 ? document.write("Bien.")
// : nota >= 7 && nota <= 9 ? document.write("Notable.")
// : nota >= 9 && nota <= 10 ? document.write("Sobresaliente.")
// : document.write("Por favor, ingrese un valor valido.");
// }
// evaluar(prompt("Indica el valor de tu nota, por favor."));

let test = ["q", "w", "e"];
document.write(test[1] + "<br>");

test[1] = "v"; // change the original value in the array's position.

document.write(test[1] + "<br>"); // pints the value in the array´s position

test.push("g", "h"); // adds elements at the end of the array

document.write(test + "<br>");

test.pop();// delete element at the end of the array

document.write(test + "<br>");

test.shift();// delete the first element of the array

document.write(test + "<br>");

test.unshift("k"); // add one element at the first position of the array

test.splice(0,0,"a","s","d"); // in position 0, remove 0 items fro the array, and add the next items

document.write(test + "<br>");

test.splice(3,2); // splice deleted the las 2 elements or the array

document.write(test + "<br>");

test.splice(3,0,"z","x"); // next to the position 3, adds 2 elements

document.write(test + "<br>");

document.write(test[4] + "<br>");

test.splice(4,1,"f"); // replace the element number 4 with an "f"

document.write(test + "<br>");

document.write(test.indexOf("z") + "<br>"); // indicate the position of an item in the array

let copyTest = test.slice();// copy the array

document.write(test + "<br>");

document.write(copyTest + "<br>");

test.reverse();

document.write(test + "<br>");

let string = test.join();

document.write(string);