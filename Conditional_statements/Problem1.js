// Given a variable temperature, determine if it is "Cold" (less than 15°C), "Warm" (15°C
//     to 25°C), or "Hot" (greater than 25°C).
    let temp = 15;
    if( temp < 15){
        console.log("Cold");
    }
    else if( temp<=25){
      console.log("Warm");
    }
    else{
        console.log("Hot");
    }
    // Given two variables a and b, print whether a is greater than, less than, or equal to b.
    let a=15;
    let b=10;
    if(a>b){
        console.log("a is greather than b");
    }
    else if(a===b){
        console.log("equlas");
    }
    else{
        console.log("a is smaller than b");
    }
//     ● Given a variable totalAmount, apply the following discount rules:
// ❖ If the amount is greater than $1000, print "20% discount".
// ❖ If the amount is between $500 and $1000, print "10% discount".
// ❖ Otherwise, print "No discount".
let totalAmount =200;
if(totalAmount > 1000)
{
    console.log("20% Discount");
}
else if(totalAmount>=500){
console.log("10% Discount");
}
else{
    console.log("No discount");
}

// Given two variables username and password, check the following:
// ❖ If the username is "admin" and password is "1234", print "Login successful".
// ❖ If the username is "admin" but the password is incorrect, print "Wrong
// password".
// ❖ For any other username, print "User not found"
let username ="admin";
let password = 123;
if(username = "admin" && password == 1234){
    console.log("Login Successful");
}
else if(username = "admin" && password !== 1234){
    console.log("Wrong password");
}
else{
    console.log("User Not Found");
}
// ● Given a variable month representing the month number (1-12), print the corresponding
// season:
// ❖ Winter: December, January, February
// ❖ Spring: March, April, May
// ❖ Summer: June, July, August
// ❖ Autumn: September, October, November
let month = 11;
if(month == 12 || month==1 || month == 2){
    console.log("Winter");
}
else if(month == 3 || month ==4 || month==5){
    console.log("Spring");
}
else if(month == 6 || month==7 || month==8){
    console.log("Summer");
}
else{
    console.log("Autumn");
}
// Given a variable grade representing a letter grade ('A', 'B', 'C', 'D', 'F'), print a
// corresponding description:
// ○ A: Excellent
// ○ B: Good
// ○ C: Average
// ○ D: Below 
let letter = "C";
if(letter =="A"){
    console.log("Excellent");
}
else if(letter=="B"){
    console.log("Good");
}
else if(letter =="C"){
    console.log("Average");
}
else if(letter == "D"){
    console.log("Below");
}
// ● Given a variable char representing a single letter, determine if it is a vowel (a, e, i, o, u)
// or a consonant, and print the result.
let char = "c"
if(char=="a" || char=="e" || char == "o"|| char =="i"|| char=="u" ){
    console.log("Vowel");
}
else{
    console.log("Consotant");
}
// ● Given a variable year, determine if it is a leap year. A year is a leap year if it is divisible
// by 4, but not divisible by 100, unless it is also divisible by 400
let year= 2000;
if( year % 4== 0 && year % 100 != 0 && year % 400 == 0){
    console.log("Leap Year");
}
else{
    console.log("Not leap year");
}
// Given a variable num, print "Divisible by 5" if the number is divisible by 5, and "Not
// divisible by 5" otherwise.
let num = 985;
if(num%5==0){
    console.log("Divisiblr by 5");
}
else {
    console.log("Not divisible by 5");
}
// Given a variable age, determine if a person is a senior citizen (age 65 or older) and print
// "Senior Citizen" or "Not a Senior Citizen"
let age;
if( age >= 65){
    console.log("Senior Citizen");
}
else{
    console.log("Not a Senior Citizen");
}
// Given a variable number, determine if it is positive, negative, or zero, and print the
// result
let number =0;
if(number > 0){
    console.log("Positive");
}
else if(number<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}
// Given a variable password, check its length. Print "Strong password" if the length is 8
// or more characters, and "Weak password" if it is less than 8 characters.
let passwords = "qwert@1234"
if(passwords.length <8 ){
    console.log("Weak passord");
}
else{
console.log("Strong Passord");
}
// Given a variable score, determine if the score is passing or failing. Assume a passing
// score is 50 or higher.
let score=78;
if(score >=50){
    console.log("Passing");
}
else{
    console.log("failing");
}
// Given a variable memberStatus which can be "active" or "inactive", print "Access
// granted" if the status is "active", and "Access denied" if it is "inactive".
let memberStatus;
if( memberStatus == "Active"){
    console.log("Access granted");
}
else{
    console.log("Acess Denied");
}