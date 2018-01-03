// the keypress function lets the program know what was presssed on the keyboard
$("input").keypress(function(e){

// the value e is used to know the exact thing that was pressed it can be any variable
// the .which is constant
// 13 is the equivalent of enter

    if(e.which === 13){
        // getting the text in the text field

        var value = $(this).val();


        // after getting the text and storing it in a variable, make the text field empty again
        $(this).val("");
        // this will add a new p tag with the text from the text field
        console.log($("#content").append('<p><span><i class="fa fa-trash"></i></span>' + value + '</p>'));

    }


});

$("#content").on("click", "p", function() {
    $(this).toggleClass("completed");
});


$("#content").on("click", "span", function() {
    $(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

$(".fa-plus").on("click", function(){
    $("input").fadeToggle(1000);
})
