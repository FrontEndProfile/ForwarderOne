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



$(window).scroll(function() {
	var a = 0;
	var oTop = $('#counter').offset().top - window.innerHeight;
	console.log($('#counter').offset().top);
	if (a == 0 && $(window).scrollTop() > oTop) {
	  $('.counter-value').each(function() {
		var $this = $(this),
		  countTo = $this.attr('data-count');
		$({
		  countNum: $this.text()
		}).animate({
			countNum: countTo
		  },
  
		  {
  
			duration: 2000,
			easing: 'swing',
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			  //alert('finished');
			}
  
		  });
	  });
	  a = 1;
	}
  
  });
