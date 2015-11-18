// Main JS File Unminified 
$(function(){

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

    $('.intro-background').css('background-image', 'url(../img/home-photo-5.jpg').fadeIn(100);

	var homeImages = [];
	homeImages[0] = "../img/home-photo-0.jpg";
	homeImages[1] = "../img/home-photo-1.jpg";
	homeImages[2] = "../img/home-photo-2.jpg";
	homeImages[3] = "../img/home-photo-3.jpg";
	homeImages[4] = "../img/home-photo-4.jpg";
	homeImages[5] = "../img/home-photo-5.jpg";

	var i = 0;
	setInterval(fadeDivs, 5000);

	function fadeDivs() {
	    i = i < homeImages.length ? i : 0;
	    $('.intro-background').fadeOut(500, function(){
	        $(this).css('background-image', 'url('+homeImages[i]+')').fadeIn(500);
	    })
	    i++;
	}
});