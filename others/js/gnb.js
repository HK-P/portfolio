$(function(){
	$(".header_inner").mouseenter(function(){
		$("header").addClass("active");
	});
	$("header").mouseleave(function(){
		$("header").removeClass("active");
	});
});