var listItems = ["Buy Gifts", "Watch Love Actually", "Finish Harry Potter"];

var ul = document.getElementById("list"); // this is the container for the ul and how we access it,

for (var i = 0; i < listItems.length; i++) {
	var li = document.createElement("li");  //this is a REFERENCE
	li.appendChild(document.createTextNode(listItems[i]));
	ul.appendChild(li);
}

function addItem(){
	var item = document.getElementById("todo-input").value;
	listItems.push(item);
	var li = document.createElement("li");	// this is creating an empty list item; ACTION
	li.appendChild(document.createTextNode(item));	
	ul.appendChild(li);
	document.getElementById("todo-input").value = "";
	// parent element.appendChild (child)
 	
    if (item == "") { //refers to variable "item" (ie: the input's ID) that is empty
        alert("You need to type something, you busy bee!");
        return false;
    }

	// debugger
}

// function validateForm() {
   
// }

// after item is added, clear input field


//create a new list item 
//clear the input field to type in new value


	
// var babez = ["Morgane", "Emma","Erin"];
// for(i = 0; i < babez.length; i++)
// console(babez[i] + " is awesome!"

