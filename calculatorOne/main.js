// 1-calculator

let question_one = prompt("Birinchi raqamni kiriting ?: ");
let question_two = prompt("Ikkinchi raqamni kiriting ?: ");
let question_three = prompt("Qaysi amaldan foydalanasiz ?: ");

x = +question_one
y = +question_two

switch (question){
    case "+":
        c=x+y
        console.log(c);
        break;
    case "-":
        c=x-y
        console.log(c);
        break;
    case "/":
        c=x/y
        console.log(c);
        break;
    case "*":
        c=x*y
        console.log(c);
        break;
    case "%":
        c=x%y
        console.log(c);
        break;
    case "**":
        c=x ** y
        console.log(c);
        break;
    default :
        console.log("bu amal menda yo'q")
};



// 2-calculator 

one = 5;
two = 7;

console.log(one + two);
console.log(one - two);
console.log(one * two);
console.log(one / two);

// object

let nameOne = prompt("Ismingizni kiriting...");
let nameTwo = prompt("Familiyangizni kiriting...");
let age = prompt("Yoshingizni kiriting...");
let school = prompt("O`qish joyingizni kiriting...");

let object = {
    name: nameOne,
    lastName: nameTwo,
    age: age,
    school: school,
};

console.log("Ism: " + object["name"]);
console.log("Familiya: " + object["lastName"]);
console.log("Yosh: " + object["age"]);
console.log("O`qish joy : " + object["school"]);