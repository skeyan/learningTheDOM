/*
Eva Yan & Samson
Mon, 6 Jan 2020
Assignment #3 due Tues, 7 Jan 2020 @10am

Write the code necessary to do the following:
	1) Select the section with an id of container without using querySelector.
	2) Select the section with an id of container using querySelector.
	3) Select all of the list items with a class of "second".
	4) Select a list item with a class of third, but only the list item inside of the ol tag.
	5) Give the section with an id of container the text "Hello!".
	6) Add the class main to the div with a class of footer.
	7) Remove the class main on the div with a class of footer.
	8) Create a new li element.
	9) Give the li the text "four".
	10) Append the li to the ul element.
	12) Loop over all of the lis inside the ol tag and give them a background color of "green".
	13) Remove the div with a class of footer.
*/

//#1  Select the section with an id of container without using querySelector.
document.getElementById("container");

//#2 Select the section with an id of container using querySelector.
document.querySelector("#container");

//#3 Select all of the list items with a class of "second".
document.getElementsByClassName("second");

//#4 Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol").getElementsByClassName("third")[0];

//#5 Give the section with an id of container the text "Hello!"
var t = document.createTextNode("Hello!");
document.getElementById("container").appendChild(t);

//#6 Add the class main to the div with a class of footer.
document.getElementsByClassName("footer")[0].classList.add("main");

//#7 Remove the class main on the div with a class of footer.
document.getElementsByClassName("footer")[0].classList.remove("main");

//#8 Create a new li element.
var list = document.createElement("li");

//#9 Give the li the text "four".
//Note to self: an alternative is to set the property textcontent to "four"
var fourText = document.createTextNode("four");
list.appendChild(fourText);

//#10 Append the li to the ul element.
document.querySelector("ul").appendChild(list);

//#12 Loop over all of the lis inside the ol tag and give them a background color of "green".
var lis = document.querySelector("ol").getElementsByTagName("li"), len = lis.length;
for(var i = 0; i < len; i++) {
	lis[i].style.backgroundColor = "green";
}

//#13 Remove the div with a class of footer.
document.getElementsByClassName("footer")[0].remove();







