$(document).ready(function(e){
    $('.filter_box select').change(function(){
        $(this).parents(".filter_box").find(".resizing_select").html($(this).find('option:selected').text());
        $(this).width($(this).parents(".filter_box").find(".resizing_select").width() + 25);  
    });
    $('.toggleMenu').click(function(){
        $(".overlay,.header_menu").addClass("active");
        $("body").css("overflow","hidden");
    });
    $('.overlay').click(function(){
        $(".overlay,.header_menu").removeClass("active");
        $("body").css("overflow-y","auto")
    });
    if ($(window).scrollTop() >= 10) {
		$('header').addClass('active');
	}
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 10) {
            $('header').addClass('active');
       }
       else {
            $('header').removeClass('active');
       }
	});
});
