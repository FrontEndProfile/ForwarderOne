$( document ).ready(function() {
	$('.hamburger').click(function(){

		$('ul.mobileUl').toggleClass('open')
		$('.navOverlay').toggleClass('open')
		$('.hamburger').toggleClass('is-active')
	
	})

	$('ul.mobileUl > li > a').click(function(){

		$('ul.mobileUl').toggleClass('open')
		$('.navOverlay').toggleClass('open')	
		$('.hamburger').toggleClass('is-active')

	})

	$('.navOverlay').click(function(){

		$('ul.mobileUl').toggleClass('open')
		$('.navOverlay').toggleClass('open')
		$('.hamburger').toggleClass('is-active')
	
	})

});

