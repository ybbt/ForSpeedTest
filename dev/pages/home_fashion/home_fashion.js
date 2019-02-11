

$('._select').each(function(){
	$(this).parent().children('._selecttitle').text( $(this).children('option:selected').text() );
});


$('._select').change(function(){
	$(this).parent().children('._selecttitle').text( $(this).children('option:selected').text() );
});