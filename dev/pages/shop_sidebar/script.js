// ----------slider фильтр цен-----------
 jQuery(document).ready(function($){
 	$(".js-range-slider").ionRangeSlider({
        type: "double",
         min: 150,
         max: 800,
        // from: 200,
        to: 500,
        grid: false,
        onChange: function(data) {
         
        	$('.price_from').html('$' + data.from)
        	$('.price_to').html('$' + data.to)
        }
    });
})

// ------бургер----------
$('.burger_grid').click(function(){
 	$('.item').removeClass('item_list').addClass('item_grid')})

$('.burger_grid').click(function(){
 	$('.row').removeClass('row_list')})

$('.burger_grid').click(function(){
 	$('.col').addClass('col-sm-4')})



$('.burger_list').click(function(){
	$('.item').removeClass('item_grid').addClass('item_list')})

$('.burger_list').click(function(){
	$('.row').addClass('row_list')})

$('.burger_list').click(function(){
	$('.col').removeClass('col-sm-4')})

// ------------по активной радиокнопке меняется цвет текста 

$('.section2_checkbox').click(function(){
	$(this).closest('ul').find('.section2_subtitle').removeClass('active')
	$(this).next().addClass('active')
});


