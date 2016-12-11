$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({

		autoPlay: 3000,
		items : 4,
		margin: 10,
		responsive:{
			600:{
				items:4
			}
		}
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




