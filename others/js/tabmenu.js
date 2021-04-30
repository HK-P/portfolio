$(function(){
	var n = 0;
	
	$(".btn li").eq(n).addClass("active");
	$(".contents .desc").eq(n).addClass("active");
	
	$(".btn li").click(function(e){
		e.preventDefault();
		$(".btn li").removeClass("active");
		$(this).addClass("active");

		n = $(this).index();
		$(".contents .desc").removeClass("active");
		$(".contents .desc").eq(n).addClass("active");
	});

});