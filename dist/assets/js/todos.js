// Check off specific todos by clicking
// Specify the parent element first then use
// on.("click", "target element") to target the element you want to change
$("ul").on("click", "li", function (){
	$(this).toggleClass("completed");

	// or longer version with logic:
	// // if li is grey
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 	// turn it black
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration: "none"
	// 	});
	// }

	// // else
	// else {
	// 	// turn it grey
	// 	$(this).css({
	// 		color:"grey",
	// 		textDecoration: "line-through"
	// 	});
	// }


	// click on X to delete Todo
	$("ul").on("click", "span", function(event){
		// select the span and delete the parent li
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		})
	})
});

$("input[type='text']").keypress(function(event){
	// character code of enter key = 13
	// if user presses enter, record whatever text was in box as new li
	if(event.which ===13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear input
		$(this).val("");
		// create new li and add to ul
		// when use append, first state what you are appending
		// then what with
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});



