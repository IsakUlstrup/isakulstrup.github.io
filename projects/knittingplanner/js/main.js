var knitCount;
var pearlCount;
var	multiplier;
var stripeHeight;



function update () {
	$(".preview").html("");
	knitCount = $('#parameters').find('input[name="knitCount"]').val();
	pearlCount = $('#parameters').find('input[name="pearlCount"]').val();
	multiplier = $('#parameters').find('input[name="multiplier"]').val();
	stripeHeight = $('#parameters').find('input[name="stripeHeight"]').val();

	var row = "<li>\\";
	var blackStripe = "<ul class='black'>";
	var whiteStripe = "<ul class='white'>";
	var field = "";


	for (var i = 0; i < multiplier -1; i++) {
		for (var j = 0; j < knitCount; j++) {
			row += "v";
		}
		for (var k = 0; k < pearlCount; k++) {
			row += "_";
		}
	}

	for (var i = 0; i < knitCount; i++) {
		row += "v";
	}

	row += "/</li>";

	//console.log(row);

	
	$(".maskAmount").html(row.length - 9);


	for (var j = 0; j < stripeHeight; j++) {
		blackStripe += row;
	}
	blackStripe += "</ul>";

	for (var j = 0; j < stripeHeight; j++) {
		whiteStripe += row;
	}
	whiteStripe += "</ul>";
	

	for (var j = 0; j < 5; j++) {
		field += blackStripe;
		field += whiteStripe;
	}





	console.log(field);
	$(".preview").append(field);
}