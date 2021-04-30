$(function(){
	var winW;
	var imgH;
	var resizeTimer;
	var pos;
	var n = 0;

	$(window).resize(function(){
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(function(){

			winW = $(window).width();

			if(winW <= 480){
				imgH = $(".mobile").height();
			}
			else if(winW <= 760){
				imgH = $(".tablet").height();
			}
			else {
				imgH = $(".pc").height();
			}

			$(".view, .view li").css({height : imgH});

			pos = (-1)*winW*n;

			$(".view ul").animate({left : pos},100);
		}, 30);
	});

	$(window).trigger("resize");

	$(".control li").eq(n).addClass("active");
	$(".control li").click(function(e){
		e.preventDefault();
		$(".control li").removeClass("active");
		$(this).addClass("active");
		
		n = $(this).index();
		pos = (-1)*winW*n;

		$(".view ul").animate({left : pos}, 500);
	});
});