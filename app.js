//    *** *** *** Chapter # 01  (ALERTS ) *** *** *** 

//   Task # 01

alert("JS Alert Box");

//   Task # 02

alert("Error! Please enter a valid password");

//   Task # 03

alert("Welcome to JS land...                                                                        Happy Coding!");

//   Task # 04

alert("Welcome to JS Land...");
alert("Happy Coding                                                                          Prevent this page from creating additinal dialogs.");

//   Task # 05

console.log("Hello... I can run JS through my web browser's console");


//      *** *** *** Chapter # 02 (VARIABLES FOR STRINGS ) *** *** *** 

//   Task # 01

var Username=prompt("Enter Username","Username is");
alert(Username);

//   Task # 02

var myName=prompt("Enter myname","your Full Name");
alert(myName);

//   Task # 03

var js=prompt("Message","Message is");
alert(js);

//   Task # 04

var stName="Jone";
alert(stName);

var age="15 years old" ;
alert(age);

var course="Certified Mobile Application Development";
alert(course);


//   Task # 05

var a=("   PIZZA                                                                           PIZZ                                                                            PIZ                                                                             PI                                                                              P");
alert(a);

//   Task # 06

var email="My email address is bariqsiddiqui109@gmail.com";
alert(email);

//    Task # 07

var a="I am trying to learn from the Book A Smarter way to learn JavaScript";
alert(a);

//    Task # 08

var a="Yah! i can write HTML content through Javascript";
document.write(a);

//    Task # 09


var a=("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
alert(a);



//        *** *** *** Chapter # 03 (VARIABLES FOR NUMBERS) *** *** *** 

//    Task # 01

var age="I am 15 years old";
alert(age);

//    Task # 02

var a="You have visited this site 14 times";
alert(a);

//     Task # 03

var a="My birth year is 1990";
document.write(a);
var b="Data type of my declared variable is number";
document.write(b);

//     Task # 04

var a="John Doe ordered 5 T-shirt(s) on XYZ Clothing store";
document.write(a);


//         *** *** *** Chapter # 04 (VARIABLE NAMES: LEGAL & ILLEGAL ) *** *** *** 

//     Task # 01

var a="My Name ";
var b="is";
var c="Muhammad Bariq Kamran Siddiqui"
document.write(a + b + "  " + c);

//     Task # 03

var a="Variable names can only contain numbers, $ and -.For example $my_1stVariable";
var b="Variables must begin with a letter, $ or -. For example $name, _name or name";
var c="Variable names are case sensitive";
var d="Variable names should not be JS keywords.";
document.write("<h1>Rules for naming JS variables</h1>");
document.write(a + "<br>" + b + "<br>" + c + "<br>" + d);


//      *** *** *** Chapter # 05 (MATH EXPRESSIONS) *** *** *** 

//       Task # 01

var a=3;
var b=5;
var c=a+b;

document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c);

//      Task # 02

var a=3;
var b=5;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;

document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g + "<br>");

//      Task # 04

var cost=600;
var ticket=5;
var total=cost*ticket;
document.write("Total cost to buy        "  ,  + ticket , "  tickets to a movie is  "  ,total + "  PKR   ");    

//      Task # 05

document.write("Table of 4" + "<br>");
document.write("4" + "x" + "1" + "=" + 2 * 1 + "<br>");
document.write("4" + "x" + "2" + "=" + 2 * 2 + "<br>");
document.write("4" + "x" + "3" + "=" + 2 * 3 + "<br>");
document.write("4" + "x" + "4" + "=" + 2 * 4 + "<br>");
document.write("4" + "x" + "5" + "=" + 2 * 5 + "<br>");
document.write("4" + "x" + "6" + "=" + 2 * 6 + "<br>");
document.write("4" + "x" + "7" + "=" + 2 * 7 + "<br>");
document.write("4" + "x" + "8" + "=" + 2 * 8 + "<br>");
document.write("4" + "x" + "9" + "=" + 2 * 9 + "<br>");
document.write("4" + "x" + "10" + "=" + 2 * 10 + "<br>");


//      Task # 07

var a=+prompt("Enter prize item 1");
var b=+prompt("Enter quantity item 1");
var c=+prompt("Enter prize item 2");
var d=+prompt("Enter quantity item 2");
var e=+prompt("Enter Shipping charges");
var f=a*b;
var g=c*d;
var h=e+f+g;

document.write("Price of item 1 is  " + a + "<br>");
document.write("Quantity of item 1 is  " + b + "<br>" );
document.write("Price of item 2 is  " + c + "<br>" );
document.write("Quantity of item 2 is  " + d + "<br>" );
document.write("Shipping charges  " + e  + "<br>");
document.write("Total cost of your order is  " + h);

//      Task # 08

var a=+prompt("Total marks:");
var b=+prompt("Marks obtained:");
var c=(b/a)*100;
document.write("Total marks:  " + a + "<br>");
document.write("Marks obtained:  " + b + "<br>" );
document.write("Percentage  " + c + "%");

//      Task # 09

var a=10;
var b= 104.80;
var c= 25;
var d=28;
var e=a*b;
var f=c*d;
var g=e+f;
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR   " + g);

//      Task # 10

var a=+prompt("Enter a number");
var b=(a+5)*10/2;
document.write("Result is  " + b);

//      Task # 11

var a=+prompt("Enter Current Year:");
var b=+prompt("Enter Birth Year:");
var c=a-b;
document.write("Current Year:  " + a + "<br>");
document.write("Enter Birth Year:  " + b + "<br>");
document.write("Your Age is:  " + c);

//      Task # 12

var a=20;
var pi=3.142;
var b=2*pi*a;
var c=pi*a*a;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle is:  " + a + "<br>");
document.write("The circumference is:  " + b + "<br>");
document.write("The area is:  " + c);

//              *** *** *** Chapter # 6-9 (MATH EXPRESSIONS )*** *** *** 

//      Task # 6

var subject1 = prompt("Enter subject 1");
var subject2 = prompt("Enter subject 2");
var subject3 = prompt("Enter subject 3");
var total = 100;
var sub1obtained = +prompt("Enter  " + subject1 + "  Marks");
var sub2obtained = +prompt("Enter  " + subject2 + "  Marks");
var sub3obtained = +prompt("Enter  " + subject3 + "  Marks");
var totalmarks = total+total+total;
var obtainedmarks = sub1obtained+sub2obtained+sub3obtained;
var per = (obtainedmarks*100)/totalmarks;
document.write("<h1>Subject</h1>" + "<h1>Total Marks</h1>" + "<h1>Obtained Marks</h1>" + "<h1>Percentage</h1>" + "<br>" + subject1 + total + subject1obtained + subject1 + "%" +"<br>" + subject2 + total + subject2obtained + subject2 + "%" + "<br>" + subject3 + total + subject3obtained + subject3 + "%" + "<br>" + totalmarks + obtainedmarks + per + " % ");



//         *** *** *** Chapter # 9-11 (USER INPUT & CONDITIONAL STATEMENT) *** *** ***

//   Task # 01

var a=prompt("Enter a city name");
if(a=="karachi")
{
    document.write("Welcome to city of lights")
}
else
{
    alert("")
}

//      Task # 02

var a=prompt("Enter Gender");
if(a=="male")
{
    document.write(" Good Morning Sir")
}
else
{
    document.write("Good Morning Ma’am.")
}

//      Task # 03

var a="Signal color";
var b="Message";
var a1="Red";
var a2="Yellow";
var a3="Green";
var b1="Must Stop";
var b2="Ready to move";
var b3="Move now";

document.write(a + " " + " " + " " + b + "<br>" + a1 + " " + " " + " " + b1 + "<br>" + a2 + " " + " " + " " + b2 + "<br>" + a3 + " " + " " + " " + b3);


//      Task # 04

var a=+prompt("Enter  fuel in litres");
if(a<0.25)
{
    document.write(" “Please refill the fuel in your car”")
}
else
{
    document.write()
}


//      Task # 05(a)

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//      Task # 05(b)

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//      Task # 05(c)

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//      Task # 05(d)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//      Task # 05(e)

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

//      Task # 05(f)

if("car" < "cat"){
    alert("car is smaller than cat");
    }

//      Task # 08 

var a=+prompt("Enter a number");
var b=a%3;
if(b==0)
{
    document.write("The number is divisible by 3")
}
else
{
    document.write("The number is not divisible by 3")
}

//      Task # 09

var a=+prompt("Enter a number");
var b=a%2;
if(b==0)
{
    document.write("The number is even")
}
else
{
    document.write("The number is odd")
}

//      Task # 10

var a=+prompt("Enter a Temperature");

if(a>=40)
{
    document.write("It is too hot outside")
}
else if(a>=30)
{
    document.write("The Weather today is Normal")
}
else if(a>=20)
{
    document.write("Today’s Weather is cool")
}
else if(a>=10)
{
    document.write("OMG! Today’s weather is so Cool")
}

//      Task # 11

var a=+prompt("Enter the First number");
var b=+prompt("Enter the Second number");
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
document.write("<h1>Calculator</h1>");
document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g + "<br>");


//           *** *** *** Chapter 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS) *** *** *** 

//      Task # 01

var char = prompt("Enter a number or string");
var check =char.charCodeAt();
document.write(check);


//      Task # 02

var a=+prompt("Enter a First Integer");
var b=+prompt("Enter a Second Integer");
if(a===b)
{
    document.write("The two integers are equal")
}
else if(a>b)
{
    document.write("The first integer is larger")
}
else
{
    document.write("The Second integer is larger")
}

//      Task # 04

var a=prompt("Enter a Character");
if(a==="a")
{
    document.write("It is a vowel")
}
else if(a==="e")
{
    document.write("It is a vowel")
}
else if(a==="i")
{
    document.write("It is a vowel")
}
else if(a==="o")
{
    document.write("It is a vowel")
}
else if(a==="u")
{
    document.write("It is a vowel")
}
else{
    document.write("It is a consonent")
}

//      Task # 05

var a=prompt("Store correct password in a JS variable");
{
    alert("Asks user to enter his/her password")
}
var b=prompt("Please enter your password");
if(b===a){
    alert("“Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}

//      Task # 06

var greeting;
var hour = 13;
if (hour < 18) {
alert("Good day")
}
else
{
alert("Good evening")
}

//          *** *** *** Chapter # 14-16 (ARRAYS)*** *** *** 

//      Task # 01

var student=[" store student names in future"]
alert(student[0]);

//      Task # 02

var student=[" store student names in future"]
document.write(student[0]);

//      Task # 07

var a=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("Qualifications:" + "<br>"+ "<br>");
document.write("1)" + a[0] +"<br>" +"2)" + a[1] +"<br>" +"3)" + a[2] +"<br>" +"4)" + a[3] +"<br>" +"5)" + a[4] +"<br>"+"6)" + a[5] +"<br>" + "6)" + a[5] +"<br>" +"7)" + a[6] +"<br>" +"8)" + a[7] +"<br>");


//      Task # 15

var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for(var i=0; i<arr.length;i++){
    document.write("<option>" + arr[i] + "</option>");
}

document.write("</select>");
    

//     *** *** *** Chapter # 17-20 (ARRAYS AND LOOP) *** *** *** 

//      Task # 01
var arr=[""];
document.write(arr);


//      Task # 02
var arr=["0 1 2 3"];
var arr1=["1 0 1 2"];
var arr2=["2 1 0 1"];
document.write(arr + "<br>" + arr1 + "<br>" + arr2);


//      Task # 03

for(var a=1; a<=10; a++)
{
    document.write(a +"<br>")
}

//      Task # 04

var a=+prompt("Enter a number to show its multiplication table");
var b=+prompt("Enter lenght multiplication table");
document.write("Multiplication Table of  " + a + "  Lenght  " + b + "<br>");
for(var i=1; i<=b;i++)
{
    document.write(a + "x" + i + "=" + a*i + "<br>")
}

//      Task # 05

var fruits = ["apple", "banana", "mango", "orange","strawberry"];
document.write(fruits[0] + "<br>" + fruits[1] + "<br>" + fruits[2] + "<br>" + fruits[3] + "<br>" + fruits[4] + "<br>" + "<br>");
document.write("Element at index 0 is" + fruits[0] + "<br>");
document.write("Element at index 1 is" + fruits[1] + "<br>");
document.write("Element at index 2 is" + fruits[2] + "<br>");
document.write("Element at index 3 is" + fruits[3] + "<br>");
document.write("Element at index 4 is" + fruits[4] + "<br>");

//      Task # 06

document.write("<h1>Counting:</h1>");
for(var a=1; a<=15; a++)
{
    document.write(a +",")
}
document.write("<h1>Reverse counting: </h1>");
for(var b=10; b>=1; b--)
{
    document.write(b +",")
}

document.write("<h1>Even:</h1>");
for(var c=0; c<=20; c=c+2)
{
    document.write(c +",")
}

document.write("<h1>Odd:</h1>");
for(var d=1; d<=19; d=d+2)
{
    document.write(d +",")
}

document.write("<h1>Series: </h1>");
for(var d=2; d<=20; d=d+2)
{
    document.write(d +"k"+",")
}

//      Task # 07

var items =  ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter Search Items");
var a=items.indexOf(search);
if(items.indexOf(search) !== -1){
    alert(search + "  is available at index  " + a + "  in our bakery");
}
else{
    alert("We are sorry.  " + search + "  is not available  " + "  in our bakery");

}

//      Task # 10 

for(var d=5; d<=100; d=d+5)
{
    document.write(d +",")
}


