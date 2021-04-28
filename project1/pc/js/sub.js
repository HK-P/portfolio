$(function(){
	$(".lnb > ul > li").eq(1).addClass("on");
	$(".lnb > ul").eq(1).find("li").eq(1).addClass("on");

	$(".lnb > ul > li").click(function(e){
		e.preventDefault();
		
		if($(this).hasClass("open") == false){
		   if($(this).find("ul").length){
			   $(this).addClass("open");
			   $(this).find("ul").slideDown(300);
			}
		} else {
			$(this).removeClass("open");
			$(this).find("ul").slideUp(300);
		}
	});

});	