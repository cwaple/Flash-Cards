$(document).ready(function() {
	$('#createButton').click(function() {
		//var newFlashCard = $('input[name=topText]').val(); 
		var newFlashCard = ["0", "1"]; 
		newFlashCard[0] = $('input[name=topText]').val(); 
		newFlashCard[1] = $('input[name=bottomText]').val();
		$('.flashCardList').append('<li class="flashCard">' + '<div>' + newFlashCard[0] + '</div><div>' + newFlashCard[1] + '</div></li>'); 
	});
}); 