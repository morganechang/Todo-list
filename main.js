var listItems = ["Buy Gifts", "Watch Love Actually", "Finish Harry Potter"];

var ul = document.getElementById("list"); // this is the container for the ul and how we access it; target the list within the html

for (var i = 0; i < listItems.length; i++) {  // FOR is a loop; the most common loop; pass in conditions, the beginning, the end, and the amount we want to increment by (typically always used with arrays - strings, numbers, mini arrays)
	var li = document.createElement("li");  //this is a reference
	li.appendChild(document.createTextNode(listItems[i]));
	ul.appendChild(li);
}

function addItem(){
	var item = document.getElementById("todo-input").value; // VAR can hold array, object, boolean, function; dont needs ""
  //**note your scope.  ie: you could not type "item" into console because wouldn't exist outside of this block. 
	if (item == "") {  //refers to variable "item" (ie: the input's ID) that is empty
        alert("You need to type something, you busy bee!");
	} else {
		var li = document.createElement("li");	// this is creating an empty list item
		listItems.push(item); // pushing to add this element to the list; only method available to call on an ARRAY
		li.appendChild(document.createTextNode(item));
		ul.appendChild(li); // append ul to the li, the list.

		document.getElementById("todo-input").value = ""; // this clears the input field 
		console.log("Item added to list");
		// parent element.appendChild (child)
	};
}

// var list = document.querySelector('ul');
// 	list.addEventListener('click', function(ev) {
//   	if (ev.target.tagName === 'li') {
//     ev.target.classList.toggle('checked');
// 	  }
// 	}, false);


	// debugger

// function validateForm() {
   
// }

// after item is added, clear input field


//create a new list item 
//clear the input field to type in new value


	
// var babez = ["Morgane", "Emma","Erin"];
// for(i = 0; i < babez.length; i++)
// console(babez[i] + " is awesome!"

