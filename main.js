 // $( document ).ready() block.
$(document).ready(function() {
	console.log( "ready!" );
	});

	var listItems = [
		"Buy Gifts", 
		"Watch Love Actually", 
		"Finish Harry Potter"
		];

	var ul = $("#list"); // this is the container for the ul and how we access it; target the list within the html

	for (var i = 0; i < listItems.length; i++) {  
		 ul.append("<li><input type='checkbox'/>" + listItems[i] + "<a class='remove'>x</a><hr></li>");
	}
		
		// FOR is a loop; the most common loop; pass in conditions, the beginning, the end, and the amount we want to increment by (typically always used with arrays - strings, numbers, mini arrays)

		//  old javascript:
		// var li = $("<li></li>").append(listItems[i]);  //this is a reference
		// // ul.add("li") // original.add("name of tag"); adding to the list // with jQuery, append can take in the actual information
		// ul.append(li); 
		// or just single line coudl be var ul.("<li></li>").append(listItems[i]);
		// $('<input type="checkbox" value="1"/>').prependTo("li");

	$(".add").click(function(){
		addItem();
	});
	//this is a listening for a click event called class "add" in html	


	$(document).on("click", "li",function(){    // we are listening for a click event anywhere on the page;
		toggleStrikeThrough($(this)); // this outside function is defined, so we use (this) to reference the specific item that is being clicked for the code to perform an action onto	
	})  // $(toggleStrikeThrough($(this-refers to item function performed on)));


	function addItem(){
		var item = $("#todo-input").val(); // VAR can hold array, object, boolean, function; dont needs ""  //**note your scope.  ie: you could not type "item" into console because wouldn't exist outside of this block. 
		
		if (item == "") {  //refers to variable "item" (ie: the input's ID) that is empty
	        window.alert("You need to type something, you busy bee!");
		} else {
			listItems.push(item); // pushing to add this element to the list; only method available to call on an ARRAY
			ul.append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			$("#todo-input").val(""); // this clears the input field, with jQuery, you can do .val(text); remove .val()=""
			console.log("Item added to list");
		}
	};
			// old javascript:
			// // var li = $("<li input type="checkbox"/li>").append(item);
			// var li = $("<li></li>").append(item);  // this is creating an empty list item
			// // $('<input type="checkbox"/>').prependTo("li");
			// ul.append(li); // append li to the ul, the list. parent.append(child).append().append()...


	function toggleStrikeThrough(item){	
		if (item.css("text-decoration") == "line-through"){
			item.css("text-decoration", "none");    // if used .removeClass("done") - we can use "done" tied to a certain css property - line strikethrough
		}else {
			item.css("text-decoration", "line-through"); 
		}
	};

	function deleteItem() {
	    $(this).parent().remove();
	}

	$(document).ready(function() {
	    $(document).on('click', '.remove', deleteItem);
	});



		// function toggleStrikeThrough(item){
		// 	item.css("text-decoration", "line-through");
		// }

	// $("li").on(function(){    // we are listening for a click event anywhere on the page;
	// 		$(toggleStrikeThrough($(this))); // this outside function is defined, so we use (this) to reference the specific item that is being clicked for the code to perform an action onto	
	// 	})  // $(toggleStrikeThrough($(this-refers to item function performed on)));	




	// function toggleStrikeThrough(item){
	// 	item.css("text-decoration", "line-through");
	// }

	// ALTERNATIVE OPTION: 

	// function toggleStrikeThrough(item) {
	//     if (item.hasClass("linethrough")){
	//         item.removeClass("linethrough");
	//     } else {
	//         item.addClass("linethrough");
	//     }
	// }

	// CSS doc:
	// .linethrough{
	// 	text-decoration: line-through;
	// }









	//1. toggle between strikethrough item
	//2. conditional (if the line HAS the property of strikethrough, then you could change the style 
		// check for specific css item has a property of ______; then change click back if still ok
		// remove an item 
		// xx by item in the corner
		// edit mode for the list? 
		// 1. always load library in html v cdn, and before any files you use jquery in
		// 2. selectors (easier to read, more functionality)

	// var list = document.querySelector('ul');
	// 	list.addEventListener('click', function(ev) {
	//   	if (ev.target.tagName === 'li') {
	//     ev.target.classList.toggle('checked');
	// 	  }
	// 	}, false);

	// $(document).ready(function() {
	//   $('#rowclick1 tr').click(function(event) {
	//     if (event.target.type !== 'checkbox') {
	//       $(':checkbox', this).trigger('click');
	//     }
	//   });
	// });


		// debugger

	// function validateForm() {
	   
	// }

	// after item is added, clear input field


	//create a new list item 
	//clear the input field to type in new value


		
	// var babez = ["Morgane", "Emma","Erin"];
	// for(i = 0; i < babez.length; i++)
	// console(babez[i] + " is awesome!"

