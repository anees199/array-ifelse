var num = prompt("Enter a Number ");
if(num%3 == 0){
    console.log("number is  divisible by 3")

}

else{
    console.log("number is not divisible by 3")
}







var oddEven = prompt("Enter a Number");

if (oddEven%2 == 0){
    console.log("the number is even")

} else {
    console.log("the number is odd")
}







var age = prompt("Enter a age");

if (age > 18){
    console.log("old enough")

} else {
    console.log("too young")
}







var username = prompt("Enter a name");
var myName = "Anees";

if (username == myName){
    console.log("Welcome to our page " + username + " how can we help you")

} else {
    console.log("")
}








var numUpLow = prompt("enter here");

if(numUpLow >= 48 && numUpLow <=57){

    console.log("the input value is number")

} else if(numUpLow >= 65 && numUpLow <=90){

    console.log("the input value is Upper case letter")

} else if(numUpLow >= 97 && numUpLow <=122){

    console.log("the input value is lower case letter")

} else {
    console.log("it is special character")
}







var time = prompt("enter a time in 2400 format");

var num = 0;

if(time < num && time >2400 ){
    console.log("please enter a correct time")
} else if(time >= num && time < 1200 ){
    console.log("Morning")
} else if(time >= 1200 && time < 1700 ){
    console.log("afternoon!")
} else if(time >= 1700 && time < 2100 ){
    console.log("evening!")
} else if(time >= 2100 && time < 2400 ){
    console.log("night!")
} else{
    console.log("Please enter acurate time!")
}









var corrPass = "anees123";
var input = prompt("Enter a Password");

if(corrPass == input) {
    console.log("Correct password")
} else{
    console.log("Incorrect password")
}







var firstName = "Anees";
if (firstName === "Fahad") {
    console.log("Hello Fahad!");
} else{
    console.log("You are not Fahad")
}







var greeting;
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day";
 console.log(greeting)
 } else{
 greeting = "Good evening";
 console.log(greeting)
 }







var num1 = prompt("Enter number 1");
var num2 = prompt("Enter number 2");

if(num1 > num2){
    console.log("The given integer " + num1 + " is greater then " + num2)
} else if(num1 == num2){
    console.log("The given integer " + num1 + " is equal to " + num2)

} else{
    console.log("The given integer " + num1 + " is less then " + num2)
}









var num1 = prompt("Enter number 1");

if(num1 < 0){
    console.log("The given integer " + num1 + " is negative")
} else if(num1 > 0){
    console.log("The given integer " + num1 + " is positive")

} else{
    console.log("The given integer " + num1 + " is zero")
}











var time = prompt("Enter a time")

if (time >= 6 && time <= 9) {
    console.log("Breakfast is served")
} else if (time >= 11 && time <= 13) {
    console.log("Time for lunch.")
} else if (time >= 17 && time <= 20) {
    console.log("It's a Dinner Time.")
} else {
    console.log("Times up.")
}









var alpha = prompt("enter a alphabet");

if(alpha == "a"){
    console.log("True")
} else if(alpha == "e"){
    console.log("True")
} else if(alpha == "i"){
    console.log("True")
} else if(alpha == "0"){
    console.log("True")
} else if(alpha == "u"){
    console.log("True")
} else{
    console.log("False")
}










if(10 != 8){
    console.log("True")
} else {
    console.log("False")
}

