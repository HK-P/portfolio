$(function(){  
	$(".popup_group .btn_close").click(function(){
		$(".popup_group .popup").hide();
	});

	$("#gnb > ul > li").mouseover(function(){
		$("header .bottom .menu").addClass("active");
	});
	$("#gnb > ul > li").mouseout(function(){
		$("header .bottom .menu").removeClass("active");
	});


	var main_swiper = new Swiper('.main_slider .swiper-container', {
		pagination: {
			el: '.main_slider .swiper-pagination',
			clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
			},
		},
	});
});