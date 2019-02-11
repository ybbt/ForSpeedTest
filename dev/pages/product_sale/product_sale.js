//slider
$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		fade: true,
		asNavFor: '.slider2'
	});

	$('.slider2').slick({
		slidesToShow: 4,
		slidesToScroll:1,
		asNavFor: '.slider',

		focusOnSelect: true,
		prevArrow:'<img  class="prev" src="img/img_service/arrow_left.jpg">',
		nextArrow:'<img class="next" src="img/img_service/arrow_right.jpg">',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true,
				centerMode: true,
				variableWidth: true
			}
		},]
	});
//rating
$('.choice_rating').raty({
	starOff: 'https://raw.githubusercontent.com/wbotelhos/raty/master/lib/images/star-off.png',
	starOn: 'https://raw.githubusercontent.com/wbotelhos/raty/master/lib/images/star-on.png',

});

//timer
$('._timer').countdown('2019/10/10', function(event) {
	$(this).html(event.strftime(
		'<span class="timer_clock-item">%D</span>' + 
		'<span class="timer_clock-item">%H</span>' + 
		'<span class="timer_clock-item">%M</span> ' + 
		'<span class="timer_clock-item">%S</span>'
		));
});

//input amount
$('._minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 0 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('._plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});
});

//tabs
(function($) {
	$(function() {
		$("ul.tabs_caption").on("click", ".tabs_title:not(.active)", function() {
			$(this)
			.addClass("active")
			.siblings()//выполнять поиск по элементам этих элементов в дереве DOM и создавать новый объект jQuery из соответствующих элементов.
			.removeClass("active")
			.closest(".tabs")
			.find(".tabs_content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});
	});
})(jQuery);

//popup

$(function() {
	var current=$('.slick-current').find('.slider_img');
	current.clone().appendTo('.inner' );
});

$(function() {
	$('._show_popup').click(function () {
		$($(this).data('popup')).fadeIn();
	});


	$('._btn_close').click(function () {
		$(this).parents('.popup').fadeOut();
	});

	$('.popup').click(function () {
		$(this).fadeOut();
	});

	$('.popup .inner').click(function (e) {
		e.stopPropagation();
	});


});
