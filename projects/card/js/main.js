$(document).ready(function() {
	$(window).scroll(function() {
		var scrollAmt = $(document).scrollTop();

		if (scrollAmt > 180) {
			scrollAmt = 180;
			console.log(scrollAmt + "Capped");
		} else {
			console.log(scrollAmt);
		}

		$(".flipper").css("transform", "rotateX(" + scrollAmt + "deg)");
		/*if ($(document).scrollTop() > 50) {
			$(".flip-container").addClass("hover");
		} else {
			$(".flipp-container").removeClass("hover");
		}*/
	});
});