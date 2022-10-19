
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

//ES6 import
var image = document.getElementsByClassName('icon_one');
new simpleParallax(image, {
	orientation: 'down right',
	overflow: true,
	delay: .6,
});
var image = document.getElementsByClassName('icon_two');
new simpleParallax(image, {
	orientation: 'down right',
	overflow: true,
	delay: .6,
});
var image = document.getElementsByClassName('icon_three');
new simpleParallax(image, {
	orientation: 'down left',
	overflow: true,
	delay: .3,
	transition: 'cubic-bezier(0,0,0,1)'
});
var image = document.getElementsByClassName('icon_four');
new simpleParallax(image, {
	orientation: 'top left',
	overflow: true,
	delay: .6,
});