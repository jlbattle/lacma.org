jQuery(document).ready(function ($) {

	var slideCount = $('#img-scroller ul li').length;

	console.log(slideCount);

	var slideWidth = $('#img-scroller ul li').width();
	var slideHeight = $('#img-scroller ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#img-scroller').css({width: slideWidth, height: slideHeight});

	$('#img-scroller ul').css({width:sliderUlWidth, marginLeft: - slideWidth});

	setInterval(function () {
        moveRight();
    }, 3000);

	function moveLeft() {
		$('#img-scroller ul').animate({
				left: + slideWidth
		}, 200, function () {
			$('#img-scroller ul li:last-child').prependTo('#img-scroller ul');
			$('#img-scroller ul').css('left', '');
		});
	};

	function moveRight() {
		$('#img-scroller ul').animate({
				left: - slideWidth
		}, 200, function () {
			$('#img-scroller ul li:first-child').appendTo('#img-scroller ul');
			$('#img-scroller ul').css('left', '');
		});
	};


	$('a.control_previous').click(function () {
      moveLeft();
  });

  $('a.control_next').click(function () {
        moveRight();
    });

});