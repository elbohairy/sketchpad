$(document).ready( function() {
	for (var i = 1; i < 17; i++) {
		$('table').append('<tr></tr>');
		for (var j = 1; j < 17; j++) {
			$('tr:nth-child(' + i + ')' ).append('<td data-brightness="100">' + j + '</td>');
		};
	};


	$('button').on('click', newGrid);

/*	$("td").hover(function() {
		$(this).addClass('hover');
	});
*/
	$(document).on('mouseenter', 'td', function() {
		if ($(this).css('background-color')) {
			var currentBrightness = parseFloat( $(this).data('brightness') ) - 10;
			var newBrightness = currentBrightness.toString();
			var newStringB = "brightness(" + newBrightness + "%)";
			$(this).css('-moz-filter', newStringB);
			$(this).css('filter', newStringB);
			$(this).data('brightness', currentBrightness);
			
			/* TRY just placing the code here.
			I have a feeling the problem is it doesn't know what this
			is referencing

			That is, replace changeBrightness() with the code in the function.
			*/
		};
		$(this).css({'background-color': randomColor()});
	});
});


var clear = function() {
	$('table').empty();
};

var makeGrid = function(rows, columns) {
	for (var i = 1; i < rows+1; i++) {
		$('table').append('<tr></tr>');
		for (var j = 1; j < columns+1; j++) {
			$('tr:nth-child(' + i + ')' ).append('<td data-brightness="100%"></td>');
		};
	};
};

var newGrid = function() {
	clear();
	var rows = Number(prompt("How many rows should the new grid have?"));
	var columns = Number(prompt("And how many columns?"));
	makeGrid(rows, columns);
};

var randomColor = function() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

var changeBrightness = function() {
	console.log('boom');
	console.log( $(this).data('brightness') );
	console.log('lol');
	var currentBrightness = parseFloat( $(this).data('brightness') ) - 10;
	console.log(isNaN(currentBrightness));
	var newBrightness = currentBrightness.toString();
	console.log(newBrightness);
	var newStringB = "brightness(" + newBrightness + "$)";
	$(this).css('-moz-filter', newStringB);
	$(this).css('filter', newStringB);
	$(this).data('brightness', currentBrightness + "$");
};